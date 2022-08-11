import {
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiFigma,
} from 'react-icons/si';
import { DiGit } from 'react-icons/di';
import { i18n } from '../locale/i18n';
import { BsBootstrapFill, BsPlusLg } from 'react-icons/bs';
import { useState } from 'react';

const Skills = () => {
  const [active, setActive] = useState(false);
  const showMore = () => {
    setActive(!active);
    console.log(active);
  };

  return (
    <section name="skills" className="w-full pt-12 md:pt-16">
      <div className="max-w-[900px] mx-auto p-4 md:p-8">
        <div>
          <h1 className="text-2xl md:text-3xl border-b-[4px] inline-block border-theme-white mb-4 pb-1">
            {i18n.t('skillsSection.sectionName')}
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl">
            {i18n.t('skillsSection.intro')}
          </h2>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 text-center gap-5 py-10">
          <div className="order-1 shadow-md shadow-[rgba(19,33,50,0.8)] p-5 hover:scale-[1.2] duration-500 select-none">
            <SiReact className="text-[#61DAFB] mx-auto mb-4 text-4xl md:text-6xl" />
            <span className="mt-4 text-sm md:text-base">React</span>
          </div>
          <div
            className={`${
              active ? 'block' : 'hidden'
            } sm:block order-7 sm:order-3 shadow-md shadow-[rgba(19,33,50,0.8)] p-5 hover:scale-[1.2] duration-500 select-none`}
          >
            <BsBootstrapFill className="text-[#69419C] mx-auto mb-4 text-4xl md:text-6xl" />
            <span className="mt-4 text-sm md:text-base">Bootstrap</span>
          </div>
          <div
            className={`${
              active ? 'block' : 'hidden'
            } sm:block order-6 sm:order-2 shadow-md shadow-[rgba(19,33,50,0.8)] p-[20px] hover:scale-[1.2] duration-500 select-none`}
          >
            <SiTailwindcss className="text-[#36B7F0] mx-auto mb-4 text-4xl md:text-6xl" />
            <span className="mt-4 text-sm md:text-base">Tailwind CSS</span>
          </div>
          <div className="order-2 sm:order-4 shadow-md shadow-[rgba(19,33,50,0.8)] p-5 hover:scale-[1.2] duration-500 select-none">
            <DiGit className="scale-[1.4] text-[#e44c30] mx-auto mb-4 text-4xl md:text-6xl" />
            <span className="mt-4 text-sm md:text-base">Git</span>
          </div>
          <div className="order-3 sm:order-5 shadow-md shadow-[rgba(19,33,50,0.8)] p-5 hover:scale-[1.2] duration-500 select-none">
            <SiJavascript className="text-[#F0D506] mx-auto mb-4 text-4xl md:text-6xl" />
            <span className="mt-4 text-sm md:text-base">ES6</span>
          </div>
          <div className="order-4 sm:order-7 shadow-md shadow-[rgba(19,33,50,0.8)] p-5 hover:scale-[1.2] duration-500 select-none">
            <SiCss3 className="text-[#254BDD] mx-auto mb-4 text-4xl md:text-6xl" />
            <span className="mt-4 text-sm md:text-base">CSS3</span>
          </div>
          <div
            className={`${
              active ? 'block' : 'hidden'
            } sm:block order-5 sm:order-6 shadow-md shadow-[rgba(19,33,50,0.8)] p-5 hover:scale-[1.2] duration-500 select-none`}
          >
            <SiHtml5 className="text-[#DD4B25] mx-auto mb-4 text-4xl md:text-6xl" />
            <span className="mt-4 text-sm md:text-base">HTML5</span>
          </div>
          <div
            className={`${
              active ? 'block' : 'hidden'
            } sm:block order-8 shadow-md shadow-[rgba(19,33,50,0.8)] p-5 hover:scale-[1.2] duration-500 select-none`}
          >
            <SiFigma className="text-[#62CA80] mx-auto mb-4 text-4xl md:text-6xl" />
            <span className="mt-4 text-sm md:text-base">Figma</span>
          </div>
        </div>
        <button
          className={`${
            active ? 'hidden' : 'block'
          } sm:hidden w-36 h-11 flex justify-center items-center mx-auto rounded bg-transparent border-2 hover:text-white active:text-white hover:bg-theme-blue-50 active:bg-theme-blue-50 hover:border-theme-blue-50 active:border-theme-blue-50 duration-200 group font-medium`}
          onClick={showMore}
        >
          {i18n.t('skillsSection.button')}
          <BsPlusLg className="ml-1" />
        </button>
      </div>
    </section>
  );
};

export default Skills;
