import {
  SiTailwindcss,
  SiFirebase,
  SiReact,
  SiFigma,
  SiRedux,
  SiJavascript,
  SiTypescript,
  SiBootstrap,
} from 'react-icons/si';
import { DiGit } from 'react-icons/di';
import { BsPlusLg, BsServer } from 'react-icons/bs';
import { FaNodeJs, FaSass } from 'react-icons/fa';
import { HiMinus } from 'react-icons/hi';

import { i18n } from '../locale/i18n';
import { useState } from 'react';

const Skills = () => {
  const [active, setActive] = useState(false);
  const showMore = () => {
    setActive(!active);
  };

  return (
    <section name='skills' className='w-full pt-12 md:pt-16'>
      <div className='max-w-[900px] mx-auto p-4 md:p-8'>
        <div>
          <h1 className='text-2xl 2xl:text-3xl border-b-[4px] inline-block border-theme-white mb-4 pb-1'>
            {i18n.t('skillsSection.sectionName')}
          </h1>
          <h2 className='text-base sm:text-lg 2xl:text-xl'>{i18n.t('skillsSection.intro')}</h2>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 text-center gap-5 py-10'>
          <div className='shadow-md shadow-[rgba(19,33,50,0.8)] p-5 hover:scale-[1.2] duration-500 select-none'>
            <SiReact className='text-[#61DAFB] mx-auto mb-4 text-4xl xl:text-5xl 2xl:text-6xl' />
            <span className='mt-4 text-sm 2xl:text-base'>React</span>
          </div>
          <div className='shadow-md shadow-[rgba(19,33,50,0.8)] p-5 hover:scale-[1.2] duration-500 select-none'>
            <SiRedux className='text-[#764ABC] mx-auto mb-4 text-4xl xl:text-5xl 2xl:text-6xl' />
            <span className='mt-4 text-sm 2xl:text-base'>Redux</span>
          </div>
          <div className='shadow-md shadow-[rgba(19,33,50,0.8)] p-5 hover:scale-[1.2] duration-500 select-none'>
            <SiJavascript className='text-[#EFD81E] mx-auto mb-4 text-4xl xl:text-5xl 2xl:text-6xl' />
            <span className='mt-4 text-sm 2xl:text-base'>JavaScript</span>
          </div>
          <div className='shadow-md shadow-[rgba(19,33,50,0.8)] p-5 hover:scale-[1.2] duration-500 select-none'>
            <SiTypescript className='text-[#146BBC] mx-auto mb-4 text-4xl xl:text-5xl 2xl:text-6xl' />
            <span className='mt-4 text-sm 2xl:text-base'>TypeScript</span>
          </div>
          <div
            className={`${
              active ? 'block' : 'hidden'
            } sm:block shadow-md shadow-[rgba(19,33,50,0.8)] p-5 hover:scale-[1.2] duration-500 select-none`}>
            <FaSass className='scale-[1.4] text-[#C66394] mx-auto mb-4 text-4xl xl:text-5xl 2xl:text-6xl' />
            <span className='mt-4 text-sm 2xl:text-base'>Sass</span>
          </div>
          <div
            className={`${
              active ? 'block' : 'hidden'
            } sm:block shadow-md shadow-[rgba(19,33,50,0.8)] p-[20px] hover:scale-[1.2] duration-500 select-none`}>
            <SiTailwindcss className='text-[#36B7F0] mx-auto mb-4 text-4xl xl:text-5xl 2xl:text-6xl' />
            <span className='mt-4 text-sm 2xl:text-base'>Tailwind CSS</span>
          </div>
          <div
            className={`${
              active ? 'block' : 'hidden'
            } sm:block shadow-md shadow-[rgba(19,33,50,0.8)] p-5 hover:scale-[1.2] duration-500 select-none`}>
            <SiBootstrap className='text-[#8715F2] mx-auto mb-4 text-4xl xl:text-5xl 2xl:text-6xl' />
            <span className='mt-4 text-sm 2xl:text-base'>Bootstrap</span>
          </div>
          <div
            className={`${
              active ? 'block' : 'hidden'
            } sm:block shadow-md shadow-[rgba(19,33,50,0.8)] p-5 hover:scale-[1.2] duration-500 select-none`}>
            <SiFigma className='text-[#62CA80] mx-auto mb-4 text-4xl xl:text-5xl 2xl:text-6xl' />
            <span className='mt-4 text-sm 2xl:text-base'>Figma</span>
          </div>
          <div
            className={`${
              active ? 'block' : 'hidden'
            } sm:block shadow-md shadow-[rgba(19,33,50,0.8)] p-5 hover:scale-[1.2] duration-500 select-none`}>
            <FaNodeJs className='text-[#8BBF3D] mx-auto mb-4 text-4xl xl:text-5xl 2xl:text-6xl' />
            <span className='mt-4 text-sm 2xl:text-base'>NodeJs</span>
          </div>
          <div
            className={`${
              active ? 'block' : 'hidden'
            } sm:block shadow-md shadow-[rgba(19,33,50,0.8)] p-5 hover:scale-[1.2] duration-500 select-none`}>
            <SiFirebase className='text-[#EE800F] mx-auto mb-4 text-4xl xl:text-5xl 2xl:text-6xl' />
            <span className='mt-4 text-sm 2xl:text-base'>Firebase</span>
          </div>
          <div
            className={`${
              active ? 'block' : 'hidden'
            } sm:block shadow-md shadow-[rgba(19,33,50,0.8)] p-5 hover:scale-[1.2] duration-500 select-none`}>
            <BsServer className='text-[#69DDB3] mx-auto mb-4 text-4xl xl:text-5xl 2xl:text-6xl' />
            <span className='mt-4 text-sm 2xl:text-base'>RESTful API</span>
          </div>
          <div
            className={`${
              active ? 'block' : 'hidden'
            } sm:block shadow-md shadow-[rgba(19,33,50,0.8)] p-5 hover:scale-[1.2] duration-500 select-none`}>
            <DiGit className='scale-[1.4] text-[#e44c30] mx-auto mb-4 text-4xl xl:text-5xl 2xl:text-6xl' />
            <span className='mt-4 text-sm 2xl:text-base'>Git</span>
          </div>
        </div>
        <button
          className='sm:hidden w-36 h-11 flex justify-center items-center mx-auto rounded bg-transparent border-2 hover:text-white active:text-white hover:bg-theme-blue-50 active:bg-theme-blue-50 hover:border-theme-blue-50 active:border-theme-blue-50 duration-200 group font-medium'
          onClick={showMore}>
          {active ? `${i18n.t('skillsSection.showLess')}` : `${i18n.t('skillsSection.showMore')}`}
          {active ? <HiMinus className='ml-1' /> : <BsPlusLg className='ml-1' />}
        </button>
      </div>
    </section>
  );
};

export default Skills;
