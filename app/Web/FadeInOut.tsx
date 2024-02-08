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

    // Ajusta el umbral según tus necesidades
    const threshold = 0.8;

    if (
      top < height * threshold ||
      window.innerHeight + window.scrollY >= document.body.offsetHeight
    ) {
      // Sección visible o hemos llegado al final de la página
      controls.start({ opacity: 1 });
    } else {
      // Sección oculta
      controls.start({ opacity: 0 });
    }
  };

  const handleScroll = () => {
    checkVisibility();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Limpia el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Se ejecuta solo en el montaje

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
