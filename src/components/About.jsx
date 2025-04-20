import React from "react";

const About = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.4"
      className="w-full p-20 rounded-tl-xl rounded-tr-xl text-black font-['Neue_Montreal']"
      style={{ backgroundColor: "#cdea68" }}
    >
      <h1 className="text-[3vw] leading-[3.5vw] tracking-tight">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and
        hire great peo­ple.
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] mt-20 p-10 border-[#808c55] ">
        <div className="w-1/2">
        <h1 className="text-[#212121] text-[4vw]  ">Our Approach</h1>
        <button className="px-10 py-6 bg-zinc-900 rounded-full mt-10 text-white flex items-center gap-2">Read More
          <div className="h-2 w-2 bg-zinc-100 rounded-full "></div>
        </button>
      </div>
      <div className="w-1/2 h-[70vh] bg-amber-100 rounded-3xl">
     
      <img  className="h-[100%] w-[100%] rounded-3xl object-cover" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />

      </div>
      </div>
    </div>
  );
};

export default About;
