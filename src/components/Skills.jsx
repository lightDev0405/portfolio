import {
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiFigma,
  SiMaterialui,
} from 'react-icons/si';
import { i18n } from '../locale/i18n';
import { BsBootstrapFill } from 'react-icons/bs';

const Skills = () => {
  return (
    <section name="skills" className="w-full pt-12 md:pt-16">
      <div className="max-w-[900px] mx-auto p-4 md:p-8">
        <div>
          <h1 className="text-2xl md:text-3xl border-b-[4px] inline-block border-theme-white mb-4 pb-1">
            {i18n.t('skillsSection.sectionName')}
          </h1>
          <h2 className="text-base md:text-xl">
            {i18n.t('skillsSection.intro')}
          </h2>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 text-center gap-5 py-10">
          <div className="shadow-md shadow-[rgba(19,33,50,0.8)] p-5 hover:scale-[1.2] duration-500 select-none">
            <SiReact className="text-[#61DAFB] mx-auto mb-4 text-4xl md:text-6xl" />
            <span className="mt-4 text-sm md:text-base">React</span>
          </div>
          <div className="shadow-md shadow-[rgba(19,33,50,0.8)] p-5 hover:scale-[1.2] duration-500 select-none">
            <SiMaterialui className="text-[#3F7DC5] mx-auto mb-4 text-4xl md:text-6xl" />
            <span className="mt-4 text-sm md:text-base">Material UI</span>
          </div>
          <div className="shadow-md shadow-[rgba(19,33,50,0.8)] p-5 hover:scale-[1.2] duration-500 select-none">
            <BsBootstrapFill className="text-[#69419C] mx-auto mb-4 text-4xl md:text-6xl" />
            <span className="mt-4 text-sm md:text-base">Bootstrap</span>
          </div>
          <div className="shadow-md shadow-[rgba(19,33,50,0.8)] p-[20px] hover:scale-[1.2] duration-500 select-none">
            <SiTailwindcss className="text-[#36B7F0] mx-auto mb-4 text-4xl md:text-6xl" />
            <span className="mt-4 text-sm md:text-base">Tailwind CSS</span>
          </div>
          <div className="shadow-md shadow-[rgba(19,33,50,0.8)] p-5 hover:scale-[1.2] duration-500 select-none">
            <SiJavascript className="text-[#F0D506] mx-auto mb-4 text-4xl md:text-6xl" />
            <span className="mt-4 text-sm md:text-base">ES6</span>
          </div>
          <div className="shadow-md shadow-[rgba(19,33,50,0.8)] p-5 hover:scale-[1.2] duration-500 select-none">
            <SiCss3 className="text-[#254BDD] mx-auto mb-4 text-4xl md:text-6xl" />
            <span className="mt-4 text-sm md:text-base">CSS3</span>
          </div>
          <div className="shadow-md shadow-[rgba(19,33,50,0.8)] p-5 hover:scale-[1.2] duration-500 select-none">
            <SiHtml5 className="text-[#DD4B25] mx-auto mb-4 text-4xl md:text-6xl" />
            <span className="mt-4 text-sm md:text-base">HTML5</span>
          </div>
          <div className="shadow-md shadow-[rgba(19,33,50,0.8)] p-5 hover:scale-[1.2] duration-500 select-none">
            <SiFigma className="text-[#62CA80] mx-auto mb-4 text-4xl md:text-6xl" />
            <span className="mt-4 text-sm md:text-base">Figma</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
