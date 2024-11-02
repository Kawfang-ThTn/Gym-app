import React from "react";
import Button from "./Button";

function Title() {
  return (
    <>
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
        <div className="flex flex-col gap-4">
            <p>IT'S TIME TO GET</p>
            <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">You to the <span className="text-green-400">GYM</span></h1>
        </div>
            <p className='text-sm md:text-base font-light'>I hereby acknowledgement that I may become <span className='text-red-400 font-medium'>unbelievably loser</span> and accept all risks of becoming  <span className='text-red-400 font-medium'>depression</span>, but now it's time to be a <span className='text-green-400 font-medium'>GYM BRO!</span></p>
          
        <Button func={ () => {window.location.href = '#generate'} } className="px-8 py-4 rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid btnBlueShadow duration-200" text={"Accept and Begin"} />
    </div>
    </>
  );
}

export default Title;
