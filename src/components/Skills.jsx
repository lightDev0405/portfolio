import SkillCard from './SkillCard';

import {
  SiTailwindcss,
  SiFirebase,
  SiReact,
  SiFigma,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiSass,
  SiChakraui,
  SiJest,
} from 'react-icons/si';
import { BsPlusLg, BsServer } from 'react-icons/bs';
import { HiMinus } from 'react-icons/hi';

import { i18n } from '../locale/i18n';
import { useState } from 'react';

const Skills = () => {
  const [active, setActive] = useState(false);
  const showMore = () => {
    setActive(!active);
  };

  return (
    <section name='skills' className='w-full pt-12 md:pt-20'>
      <div className='max-w-[900px] mx-auto p-4 md:p-8'>
        <div>
          <h1 className='font-medium text-xl 2xl:text-2xl border-b-4 inline-block border-theme-white mb-4 pb-1'>
            {i18n.t('skillsSection.sectionName')}
          </h1>
        </div>
        <div className='w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 text-center gap-5 pb-6 md:pb-0 md:pt-6'>
          <SkillCard color='#61DAFB' icon={SiReact} name='React' />
          <SkillCard color='#EFD81E' icon={SiJavascript} name='JavaScript' />
          <SkillCard color='#146BBC' icon={SiTypescript} name='TypeScript' />
          <SkillCard color='#DC4A29' icon={SiHtml5} name='HTML5' />
          <SkillCard color='#376FB4' icon={SiCss3} name='CSS3' />
          <SkillCard color='#62CA80' icon={SiFigma} name='Figma' />
          <SkillCard color='#C76494' icon={SiSass} name='Sass' active={active} />
          <SkillCard color='#65CBCD' icon={SiChakraui} name='Chakra UI' active={active} />
          <SkillCard color='#36B7F0' icon={SiTailwindcss} name='Tailwind' active={active} />
          <SkillCard color='#EE800F' icon={SiFirebase} name='Firebase' active={active} />
          <SkillCard color='#69DDB3' icon={BsServer} name='Restful API' active={active} />
          <SkillCard color='#954058' icon={SiJest} name='Jest' active={active} />
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
