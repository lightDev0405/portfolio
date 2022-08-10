import { HiArrowNarrowRight } from 'react-icons/hi';
import ProfilePicture from '../assets/images/profile/me.jpeg';
import Link from 'react-scroll/modules/components/Link';
import SolarSystem from './SolarSystem';
import { i18n } from '../locale/i18n';

const About = () => {
  return (
    <section className="w-full flex flex-col pt-14 md:pt-16" name="about">
      <SolarSystem />
      <div className="w-full max-w-[900px] flex flex-col justify-center mx-auto px-8">
        <h1 className="w-full text-center mx-auto py-4 px-5 rounded text-base md:text-lg bg-[#2C2A2E]">
          {i18n.t('aboutSection.intro')}
        </h1>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between my-5 md:my-7">
          <div className="mt-8">
            <h1 className="text-3xl md:text-4xl	mb-2.5 font-bold">
              Tiago Leite
            </h1>
            <p className="text-base md:text-lg">
              {i18n.t('aboutSection.smallDescription')}
            </p>
          </div>

          <div className="w-40 h-40 md:min-w-[180px] md:min-h-[180px] rounded-full border-2 md:border-[3px] border-theme-white flex justify-center items-center mt-6 md:ml-10">
            <img
              src={ProfilePicture}
              alt="tiago leite selfie"
              className="block w-36 h-36 hover:scale-105 active:scale-105 md:min-w-[160px] md:min-h-[160px] rounded-full border border-solid border-black duration-300 select-none"
            ></img>
          </div>
        </div>

        <p className="text-base md:text-lg">
          {i18n.t('aboutSection.description')}
        </p>

        <div className="w-full flex justify-start items-center mt-6 text-theme-white text-sm md:text-base">
          <Link to="works" smooth={true} duration={600}>
            <button className="w-28 md:w-32 h-12 flex justify-center items-center rounded bg-transparent mr-4 md:mr-7 border-2 hover:text-white active:text-white hover:bg-theme-blue-50 active:bg-theme-blue-50 hover:border-theme-blue-50 active:border-theme-blue-50 duration-200 group">
              {i18n.t('aboutSection.buttons.work')}
              <span className="group-hover:rotate-90 group-active:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-1" />
              </span>
            </button>
          </Link>
          <Link to="contact" smooth={true} duration={600}>
            <button className="w-24 md:w-28 h-12 flex justify-center items-center rounded bg-theme-blue-50 hover:bg-theme-blue-100 active:bg-theme-blue-100 hover:text-white active:text-white duration-200">
              {i18n.t('aboutSection.buttons.hire')}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
