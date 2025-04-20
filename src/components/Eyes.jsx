import React, { useEffect, useRef, useState } from "react";

const Eyes = () => {
const [rotate, setRotate] = useState(0)
  useEffect(()=>{
    window.addEventListener("mousemove",(e)=>{
      let mouseX= e.clientX;
      let mouseY= e.clientY;

      let deltaX = mouseX-window.innerWidth/2;
      let deltaY = mouseY-window.innerHeight/2;
      
      var angle = Math.atan2(deltaY,deltaX) * (180/Math.PI)
      setRotate(angle-180)
    })
  })
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-.7" className='relative h-full w-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          {/* eyes */}
          <div className="w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex items-center justify-center">
            <div className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full ">
            
              {/* line */}
              <div style={{transform:` rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-8 w-full">
                <div className="w-[2vw] h-[2vw] bg-zinc-100 rounded-full "></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex items-center justify-center">
            <div className=" relative w-2/3 h-2/3 bg-zinc-900 rounded-full flex items-center justify-center">
              {/* line */}
              <div style={{transform:` rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-8 w-full ">
                <div className="w-[2vw] h-[2vw] bg-zinc-100 rounded-full "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
