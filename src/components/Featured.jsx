import { motion, useAnimation } from "framer-motion";
import React from "react";

const Featured = () => {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleLeave = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20 text-black">
      {/* Title */}
      <div className="w-full px-20 border-b-[1px] border-zinc-600 pb-15">
        <h1 className="text-6xl font-['Neue_Montreal'] tracking-tight">
          Featured projects
        </h1>
      </div>

      {/* Cards */}
      <div className="px-20">
        <div className="cards w-full flex gap-10 px-10 py-20">

          {/* Card 1 - FYDE */}
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleLeave(0)}
            className="card-container w-1/2 h-[75vh] relative"
          >
            <h1 className="absolute flex left-full overflow-hidden -translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] text-9xl font-bold leading-none tracking-tighter text-[#e1fb84]">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            <div className="w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png"
                alt="FYDE"
              />
            </div>
          </motion.div>

          {/* Card 2 - VISE */}
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleLeave(1)}
            className="card-container w-1/2 h-[75vh] relative"
          >
            <h1 className="absolute flex right-full overflow-hidden translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] text-9xl font-bold leading-none tracking-tighter text-[#e1fb84]">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            <div className="w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png"
                alt="VISE"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Featured;
