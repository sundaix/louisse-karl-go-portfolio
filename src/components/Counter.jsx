import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

export default function Counter({ to, suffix = "", duration = 1.6 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: duration * 1000, bounce: 0 });
  const displayRef = useRef(null);

  useEffect(() => {
    if (inView) motionVal.set(to);
  }, [inView, to, motionVal]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => {
      if (displayRef.current) displayRef.current.textContent = Math.round(v) + suffix;
    });
    return unsub;
  }, [spring, suffix]);

  return (
    <span ref={ref}>
      <span ref={displayRef}>0{suffix}</span>
    </span>
  );
}
