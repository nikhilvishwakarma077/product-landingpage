import React from "react";
import Badges from "./Badges";
import Headline from "./Headline";
import Buttons from "./Buttons";
import Image from "./Image";

const Hero = () => {
  return (
    <div className="w-full min-h-[90vh] px-5 md:px-10 py-10 grid grid-cols-1 md:grid-cols-2
     bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 ">

      <div className="w-full flex flex-col mt-10 items-start gap-6 p-2 md:p-5">
        <Badges />
        <Headline />
        <Buttons />
      </div>
      
      <Image />

    </div>
  );
};

export default Hero;
