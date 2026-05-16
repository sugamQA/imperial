"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // I need to create this utility first

interface MotionCardProps {
  children: React.ReactNode;
  className?: string;
  whileHover?: any;
  initial?: any;
  whileInView?: any;
  viewport?: any;
}

export default function MotionCard({
  children,
  className,
  whileHover = { y: -10, scale: 1.02 },
  initial = { opacity: 0, y: 20 },
  whileInView = { opacity: 1, y: 0 },
  viewport = { once: true }
}: MotionCardProps) {
  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      whileHover={whileHover}
      viewport={viewport}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn("p-6 rounded-2xl transition-all duration-300", className)}
    >
      {children}
    </motion.div>
  );
}
