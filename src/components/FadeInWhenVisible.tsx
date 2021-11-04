import React, { useEffect, useMemo, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

export const FadeInWhenVisible = ({
  children,
  yOffset = 12,
  easing = [0.42, 0, 0.58, 1],
  delayOrder,
}: any) => {
  const controls = useAnimation();
  const [intersectionRef, inView] = useInView();
  const [delay, setDelay] = useState(0.5);

  const offset = 0.4;

  useEffect(() => {
    if (delayOrder) {
      setDelay(delayOrder * offset);
    }
  }, [delayOrder, offset]);

  useEffect(() => {
    if (inView) {
      controls.start('show');
    }
  }, [controls, inView]);

  const transition = useMemo(
    () => ({
      duration: 0.25,
      delay,
      ease: easing,
    }),
    [delay, easing]
  );

  const variants = {
    hidden: { y: yOffset, opacity: 0, transition },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition,
    },
  };

  return (
    <motion.div
      ref={intersectionRef}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};
