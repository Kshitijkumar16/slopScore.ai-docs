"use client";

// global imports
import { useState } from "react";
import { motion } from "motion/react";

// local imports
import { cn } from "@/lib/utils";

interface FlipButtonProps {
  children: React.ReactNode;
  maxHeight: string;
  propHovered?: boolean;
}

const FlipTextButton = ({
  children,
  maxHeight,
  propHovered,
}: FlipButtonProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      onPointerEnter={() => {
        setIsHovered(true);
      }}
      onPointerLeave={() => {
        setIsHovered(false);
      }}
      className={cn("flex h-full w-full items-center justify-center")}
    >
      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center overflow-hidden",
          maxHeight
        )}
      >
        <motion.div
          id="1"
          initial={"not"}
          animate={
            isHovered === true || propHovered === true ? "hovered" : "not"
          }
          variants={{
            hovered: {
              y: "-100%",
              transition: { duration: 0.8, ease: [0.35, 0, 0.65, 1] },
            },
            not: {
              y: 0,
              transition: { duration: 0.8, ease: [0.35, 0, 0.65, 1] },
            },
          }}
          className="absolute top-1/2 left-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center"
        >
          {children}
        </motion.div>

        <motion.div
          id="2"
          initial={"not"}
          animate={
            isHovered === true || propHovered === true ? "hovered" : "not"
          }
          variants={{
            hovered: {
              y: 0,
              transition: { duration: 0.8, ease: [0.35, 0, 0.65, 1] },
            },
            not: {
              y: "100%",
              transition: { duration: 0.8, ease: [0.35, 0, 0.65, 1] },
            },
          }}
          className="absolute top-1/2 left-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default FlipTextButton;
