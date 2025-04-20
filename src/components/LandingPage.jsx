import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className="w-full h-screen pt-1">
      <div className="text-structure mt-30 px-20  ">
        {["WE CREATE", "EYE OPENING ", "PRESENTATIONS"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration:1 }}
                   
                    className="w-[8vw] mr-[1vw] h-[5vw] p-4 relative top-[1.3vw] bg-amber-300 rounded "
                  ></motion.div>
                )}
                <h1
                  className=" text-[7vw] tracking-tighter leading-[6.5vw] font-['Founders Grotesk Medium'] font-bold "
                  style={{ color: "#212121" }}
                >
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-30 flex justify-between items-center py-5 px-20 text-black">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return <p className="text-md  tracking-tight leading-none">{item}</p>;
        })}
        <div className="Start flex items-center gap-5">
          <div className="px-5 py-2 border-[2px] rounded-full border-zinc-400 text-md uppercase">
            Start the project
          </div>
          <div className="w-10 h-10 border-[2px] flex items-center justify-center border-zinc-600  rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;