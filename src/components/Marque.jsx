import React from "react";
import { motion } from "framer-motion";
const Marque = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1"
      className="w-full py-20 rounded-tl-3xl rounded-tr-3xl"
      style={{ backgroundColor: "#004d43" }}
    >
      <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden">
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:6}}  
        className="text-[18vw] leading-none -tracking-wider font-bold uppercase mb-[5vw] pr-10">
          we are ochi
        </motion.h1>
        <motion.h1  initial={{x:0}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:6}}
         className="text-[18vw] leading-none -tracking-wider font-['Founders Grotesk Medium'] font-bold uppercase mb-[6vw] pr-10">
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marque;