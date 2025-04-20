import React from "react";

const Cards = () => {
  return (
    <div className="w-full h-screen border-t-[1px] border-zinc-500 flex gap-5 items-center px-10 ">
      <div className="card-container w-1/2  h-[50vh]  ">
        <div className="card relative w-full h-full  bg-[#004d43] rounded-2xl flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute left-10 bottom-10 px-8 rounded-full py-1 border-[2px] border-[#e1fb84] text-[#e1fb84]">
            &copy;2019-2020
          </button>
        </div>
      </div>
      <div className="card-container w-1/2 h-[50vh] flex gap-5">
        <div className="card  relative w-1/2 h-full  bg-[#212121] rounded-2xl flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute left-10 bottom-10 px-8 rounded-full py-1 border-[1px] tracking-tighter">
           RATING ON CLUTCH
          </button>
        </div>
        <div className="card  relative w-1/2 h-full  bg-[#212121] rounded-2xl flex items-center justify-center">
          <img
            className="w-32 object-cover"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
            <button className="absolute left-10 bottom-10 px-8 rounded-full py-1 border-[1px] tracking-tighter">
          BUSSINESS BOOTCAMP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
