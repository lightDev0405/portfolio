import { HiArrowNarrowRight } from 'react-icons/hi';
import ProfilePicture from '../assets/images/profile/me.jpeg';
import Link from 'react-scroll/modules/components/Link';
import SolarSystem from './SolarSystem';
import Sidebar from './Sidebar';
import { i18n } from '../locale/i18n';
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  return (
    <section className="w-full flex flex-col pt-14 md:pt-20" name="about">
      <SolarSystem />
      <div className="w-full max-w-[900px] flex flex-col justify-center mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-start justify-between mb-6">
          {/* Introduction */}
          <div className="md:mt-6 mx-auto md:mx-0">
            <h1 className="flex items-center gap-2 text-2xl sm:text-3xl md:text-4xl font-bold after:content-[''] after:w-1.5 after:h-14 after:bg-theme-blue-100 after:animate-cursorBlink">
              {i18n.t('aboutSection.intro')}
            </h1>
            <h2 className="text-base sm:text-lg mb-3">
              {i18n.t('aboutSection.welcome')}
            </h2>
            <div className="text-base sm:text-xl md:text-2xl flex items-center justify-start md:mt-5">
              <p>{i18n.t('aboutSection.smallDescription')} </p>
              <span className="text-4xl md:text-6xl text-theme-blue-50 ml-1 md:ml-2 md:mr-1">
                [
              </span>
              <div className="text-lg sm:text-xl md:text-3xl font-medium">
                <TypeAnimation
                  cursor={false}
                  sequence={[
                    `${i18n.t('aboutSection.animatedTexts.textOne')}`,
                    3000,
                    `${i18n.t('aboutSection.animatedTexts.textTwo')}`,
                    3000,
                    `${i18n.t('aboutSection.animatedTexts.textThree')}`,
                    3000,
                    `${i18n.t('aboutSection.animatedTexts.textFour')}`,
                    3000,
                    `${i18n.t('aboutSection.animatedTexts.textFive')}`,
                    3000,
                    `${i18n.t('aboutSection.animatedTexts.textSix')}`,
                    3000,
                  ]}
                  wrapper="span"
                  speed="45"
                  repeat={Infinity}
                />
              </div>
              <span className="text-4xl md:text-6xl text-theme-blue-50 sm:ml-1">
                ]
              </span>
            </div>
          </div>
          {/* Profile Picture */}
          <div className="w-40 h-40 md:min-w-[180px] md:min-h-[180px] rounded-full border-2 md:border-[3px] border-theme-white flex justify-center items-center mt-6 md:ml-10 mx-auto md:mx-0">
            <img
              src={ProfilePicture}
              alt="tiago leite selfie"
              className="block w-36 h-36 hover:scale-105 active:scale-105 md:min-w-[160px] md:min-h-[160px] rounded-full border border-solid border-black duration-300 select-none"
            ></img>
          </div>
        </div>
        <div className="md:hidden mx-auto md:mx-0">
          <h1 className="text-2xl md:text-3xl border-b-[4px] inline-block border-theme-white mb-4 pb-1">
            About Me
          </h1>
        </div>
        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl">
          {i18n.t('aboutSection.description')}
        </p>

        {/* Buttons */}
        <div className="md:mx-0 w-full flex justify-center md:justify-start items-center mt-6 text-theme-white text-sm sm:text-base">
          <Link to="works" smooth={true} duration={600}>
            <button className="w-28 sm:w-32 h-12 flex justify-center items-center rounded bg-transparent mr-4 md:mr-7 border-2 hover:text-white active:text-white hover:bg-theme-blue-50 active:bg-theme-blue-50 hover:border-theme-blue-50 active:border-theme-blue-50 duration-200 group font-medium">
              {i18n.t('aboutSection.buttons.work')}
              <span className="group-hover:rotate-90 group-active:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-1" />
              </span>
            </button>
          </Link>
          <Link to="contact" smooth={true} duration={600}>
            <button className="w-24 md:w-28 h-12 flex justify-center items-center rounded bg-theme-blue-50 hover:bg-theme-blue-100 active:bg-theme-blue-100 hover:text-white active:text-white duration-200 font-medium">
              {i18n.t('aboutSection.buttons.hire')}
            </button>
          </Link>
        </div>
      </div>
      {/* Sidebar */}
      <div className="hidden md:block lg:hidden absolute top-40 left-0">
        <Sidebar />
      </div>
    </section>
  );
};

export default About;
