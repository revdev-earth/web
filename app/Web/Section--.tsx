import { ReactNode, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

interface Props {
  children?: ReactNode;
  className?: string;
}

const Section = ({ children, className = "" }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const opacityStart = 0;
  const opacityEnd = 1;

  const calculateOpacity = useTransform(
    [scrollYProgress, scrollY],
    ([_scrollYProgress, _scrollY]) => {
      const scrollProgress = _scrollYProgress as number;

      const scrollPercentage = Math.trunc(scrollProgress * 100);

      const threshold = 35;

      if (scrollPercentage < threshold) {
        return (scrollPercentage / threshold) * opacityEnd;
      }

      const { current } = ref;
      if (!current) return opacityStart;

      const currentOffsetTop = current.offsetTop;
      const currentHeight = current.offsetHeight;

      const scrollBottom = (_scrollY as number) + window.innerHeight - 50;
      const topElement = currentOffsetTop + currentHeight;
      const topElementCustom = topElement * 1.06;

      if (scrollBottom > topElementCustom) {
        const opacityValue =
          1 - (scrollBottom - topElementCustom) / window.innerHeight;
        return Math.max(opacityValue, opacityStart);
      }

      return opacityStart;
    }
  );

  const opacitySpring = useSpring(calculateOpacity, {
    damping: 50,
    stiffness: 100,
  });

  return (
    <div className="overflow-hidden">
      <motion.div
        ref={ref}
        className={"relative " + className}
        style={{
          opacity: opacitySpring,
        }}
      >
        {children && children}
      </motion.div>
    </div>
  );
};

export default Section;
