import SkillCard from './SkillCard';

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
    <section name='skills' className='w-full pt-4 md:pt-16'>
      <div className='max-w-[900px] mx-auto p-4 md:p-8'>
        <div>
          <h1 className='text-2xl 2xl:text-3xl border-b-[4px] inline-block border-theme-white mb-4 pb-1'>
            {i18n.t('skillsSection.sectionName')}
          </h1>
        </div>
        <div className='w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 text-center gap-5 py-10'>
          <SkillCard shadow='rgba(19,33,50,0.8)' color='#61DAFB' icon={SiReact} name='React' />
          <SkillCard shadow='rgba(19,33,50,0.8)' color='#764ABC' icon={SiRedux} name='Redux' />
          <SkillCard
            shadow='rgba(19,33,50,0.8)'
            color='#EFD81E'
            icon={SiJavascript}
            name='JavaScript'
          />
          <SkillCard
            shadow='rgba(19,33,50,0.8)'
            color='#146BBC'
            icon={SiTypescript}
            name='TypeScript'
          />
          <SkillCard
            shadow='rgba(19,33,50,0.8)'
            color='#36B7F0'
            icon={SiBootstrap}
            name='Bootstrap'
            active={active}
          />
          <SkillCard
            shadow='rgba(19,33,50,0.8)'
            color='#36B7F0'
            icon={FaSass}
            name='Sass'
            iconStyles={'scale-[1.3]'}
          />
          <SkillCard
            shadow='rgba(19,33,50,0.8)'
            color='#36B7F0'
            icon={SiTailwindcss}
            name='Tailwind CSS'
          />
          <SkillCard
            shadow='rgba(19,33,50,0.8)'
            color='#62CA80'
            icon={SiFigma}
            name='Figma'
            active={active}
          />
          <SkillCard
            shadow='rgba(19,33,50,0.8)'
            color='#8BBF3D'
            icon={FaNodeJs}
            name='NodeJs'
            active={active}
          />
          <SkillCard
            shadow='rgba(19,33,50,0.8)'
            color='#EE800F'
            icon={SiFirebase}
            name='Firebase'
            active={active}
          />
          <SkillCard
            shadow='rgba(19,33,50,0.8)'
            color='#69DDB3'
            icon={BsServer}
            name='Restful API'
            active={active}
          />
          <SkillCard
            shadow='rgba(19,33,50,0.8)'
            color='#e44c30'
            icon={DiGit}
            name='Git'
            active={active}
            iconStyles={'scale-[1.4]'}
          />
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
