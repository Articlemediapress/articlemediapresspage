import React, { useState } from "react";
import { motion } from "framer-motion"; // Make sure framer-motion is installed

const CircleFadingArrowUp = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
}: {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}) => {
  // State to handle hover
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Centers the content vertically
        backgroundColor: "#282c34", // Set background to make it stand out
        cursor: "pointer",
        userSelect: "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transition: "transform 0.2s" }} // Smooth transition for animation
        animate={{
          translateY: hovered ? "-5px" : "0", // Moves up on hover
        }}
      >
        <path d="M12 2a10 10 0 0 1 7.38 16.75" />
        <motion.g
          animate={{
            translateY: hovered ? "-2px" : "0", // Slight move when hovered
          }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 25,
          }}
        >
          <path d="m16 12-4-4-4 4" />
          <path d="M12 16V8" />
        </motion.g>
        <path d="M2.5 8.875a10 10 0 0 0-.5 3" />
        <path d="M2.83 16a10 10 0 0 0 2.43 3.4" />
        <path d="M4.636 5.235a10 10 0 0 1 .891-.857" />
        <path d="M8.644 21.42a10 10 0 0 0 7.631-.38" />
      </motion.svg>
    </div>
  );
};

export { CircleFadingArrowUp };
