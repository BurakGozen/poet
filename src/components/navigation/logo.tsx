"use client";

import { cn } from "@/lib/utils/classnames";
import { Variants, motion } from "framer-motion";
import { DotIcon } from "lucide-react";
import Link from "next/link";

const MotionDotIcon = motion(DotIcon);

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  const dotVariants: Variants = {
    hover: {
      y: [null, -6, 0],
      transition: { duration: 0.6, repeat: Infinity, repeatDelay: 0.5 },
    },
  };

  return (
    <Link href="/" className={cn("flex items-center justify-center", className)}>
      <motion.div
        className="flex items-center gap-2"
        whileHover="hover"
        transition={{ staggerChildren: -0.1, staggerDirection: -1, ease: "easeInOut" }}
      >
        <MotionDotIcon className="h-5 w-5" variants={dotVariants} />
        <MotionDotIcon className="h-5 w-5" variants={dotVariants} />
        <MotionDotIcon className="h-5 w-5" variants={dotVariants} />
      </motion.div>
    </Link>
  );
}
