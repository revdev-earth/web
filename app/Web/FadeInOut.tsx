"use client";
import { ReactNode, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

interface Props {
  component?: ReactNode;
  children?: ReactNode;
  className?: string;
  style?: any;
}

const FadeInOut = ({
  component,
  children,
  className = "",
  style = {},
}: Props) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  const checkVisibility = () => {
    const { current } = ref;
    if (!current) return;

    const top = current.getBoundingClientRect().top;
    const height = window.innerHeight;
    const threshold = 0.7;

    if (
      top < height * threshold ||
      window.innerHeight + window.scrollY >= document.body.offsetHeight
    ) {
      controls.start({ opacity: 1 });
    } else {
      controls.start({ opacity: 0 });
    }
  };

  const handleScroll = () => {
    checkVisibility();
  };

  useEffect(() => {
    checkVisibility();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      className={"relative " + className}
      initial={{ opacity: 0 }}
      animate={controls}
      style={style}
    >
      {component && component}
      {children && children}
    </motion.div>
  );
};

export default FadeInOut;
