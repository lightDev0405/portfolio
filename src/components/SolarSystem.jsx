import { DiJavascript1, DiCss3, DiHtml5, DiReact, DiGit } from 'react-icons/di';
import { CgFigma } from 'react-icons/cg';
import { useState } from 'react';

const ReactSolarSystem = () => {
  const [isActive, setActive] = useState(false);

  const handleToggler = () => {
    setActive(!isActive);
  };

  return (
    <div
      className="relative mx-auto w-[330px] h-[330px] sm:my-[20px] md:my-[40px] lg:my-[60px] scale-[0.75] sm:scale-[0.85] md:scale-[1.0] lg:scale-[1.20] select-none perspective-9"
      onClick={handleToggler}
    >
      {/* Solar Circle */}
      <div
        className={`${
          isActive ? 'rotate3d' : ''
        } w-[330px] h-[330px] absolute inset-0 m-auto rounded-[50%] transition-all duration-[3s]`}
      >
        {/* Solar Orbit */}
        <div className="w-full h-full border-[1px] border-[rgba(0,0,0,0.2)] rounded-[50%] box-border absolute inset-0 m-auto transform perspective-9 transition-all duration-[3s]">
          {/* Solar Planet */}
          <div className="w-[25px] h-[25px] rounded-[50%] absolute inset-x-0 top-[-14px] bottom-0 box-border flex items-center justify-center my-0 mx-auto bg-[rgba(169,146,95,0.2)] border-[2px] border-[#e44c30] text-[#e44c30] text-[1.4rem] leading-[26px] animate-travelOrbit10 origin-[50%_713%] transition-all duration-[1s]">
            {/* Icon */}
            <span className="animate-unrotate10">
              <DiGit />
            </span>
          </div>
        </div>
        {/* Solar Orbit */}
        <div className="w-[82.5%] h-[82.5%] border-[1px] border-[rgba(0,0,0,0.2)] rounded-[50%] box-border absolute inset-0 m-auto transform perspective-9 transition-all duration-[3s]">
          {/* Solar Planet */}
          <div className="w-[25px] h-[25px] rounded-[50%] absolute inset-x-0 top-[-14px] bottom-0 box-border flex items-center justify-center my-0 mx-auto bg-[rgba(98,203,128,0.15)] border-[2px] border-[#62cb80] text-[#62cb80] text-[1.1rem] leading-[26px] animate-travelOrbit8 origin-[50%_597%] transition-all duration-[1s]">
            {/* Icon */}
            <span className="animate-unrotate8">
              <CgFigma />
            </span>
          </div>
        </div>
        {/* Solar Orbit */}
        <div className="w-[65%] h-[65%] border-[1px] border-[rgba(0,0,0,0.2)] rounded-[50%] box-border absolute inset-0 m-auto transform perspective-9 transition-all duration-[3s]">
          {/* Solar Planet */}
          <div className="w-[25px] h-[25px] rounded-[50%] absolute inset-x-0 top-[-14px] bottom-0 box-border flex items-center justify-center my-0 mx-auto bg-[rgba(221,74,41,0.2)] border-[2px] border-[#dd4b29] text-[#dd4b29] text-[1rem] leading-[26px] animate-travelOrbit6 origin-[50%_480%] transition-all duration-[1s]">
            {/* Icon */}
            <span className="animate-unrotate6">
              <DiHtml5 />
            </span>
          </div>
        </div>
        {/* Solar Orbit */}
        <div className="w-[47.5%] h-[47.5%] border-[1px] border-[rgba(0,0,0,0.2)] rounded-[50%] box-border absolute inset-0 m-auto transform perspective-9 transition-all duration-[3s]">
          {/* Solar Planet */}
          <div className="w-[25px] h-[25px] rounded-[50%] absolute inset-x-0 top-[-14px] bottom-0 box-border flex items-center justify-center my-0 mx-auto bg-[rgba(43,76,221,0.15)] border-[2px] border-[#2b4bdd] text-[#2b4bdd] text-[1rem] leading-[26px] animate-travelOrbit4 origin-[50%_363%] transition-all duration-[1s]">
            {/* Icon */}
            <span className="animate-unrotate4">
              <DiCss3 />
            </span>
          </div>
        </div>
        {/* Solar Orbit */}
        <div className="w-[30%] h-[30%] border-[1px] border-[rgba(0,0,0,0.2)] rounded-[50%] box-border absolute inset-0 m-auto transform perspective-9 transition-all duration-[3s]">
          {/* Solar Planet */}
          <div className="w-[25px] h-[25px] rounded-[50%] absolute inset-x-0 top-[-14px] bottom-0 box-border flex items-center justify-center my-0 mx-auto bg-[rgba(109,218,251,0.1)] border-[2px] border-[#6ddafb] text-[#6ddafb] text-[1rem] leading-[26px] animate-travelOrbit2 origin-[50%_243%] transition-all duration-[1s]">
            {/* Icon */}
            <span className="animate-unrotate2">
              <DiReact />
            </span>
          </div>
        </div>
      </div>

      {/* Solar Top Circle */}
      <div className="panel flex items-center justify-center absolute inset-0 m-auto w-[33px] h-[33px] rounded-[50%] bg-[#ffeb00] shadow-[0_0_45px] shadow-[#ffeb00] text-[1.5rem] text-[#645c00]">
        <DiJavascript1 />
      </div>
    </div>
  );
};

export default ReactSolarSystem;
