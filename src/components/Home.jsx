import Link from 'react-scroll/modules/components/Link';
import toast from 'react-hot-toast';

import { i18n } from '../locale/i18n';
import { TypeAnimation } from 'react-type-animation';

import Stars from './Stars';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { FcDocument } from 'react-icons/fc';

import ptResume from '../assets/docs/tiago-leite-resume-pt.pdf';
import enResume from '../assets/docs/tiago-leite-resume-en.pdf';
import ProfilePicture from '../assets/images/profile/me.jpg';

// Language settings
const CURRENT_KEY = localStorage.getItem('i18nextLng');

const Home = () => {
  const social = {
    linkedin: 'https://www.linkedin.com/in/tiagocreator/',
    github: 'https://github.com/tiagocreator',
    email: 'mailto:contato@tiagocreator.com',
  };

  const resumeLink = CURRENT_KEY === 'pt-BR' ? ptResume : enResume;

  const downloadResume = () => {
    toast(i18n.t('header.resume.downloadMessage'), {
      icon: <FcDocument size={28} />,
      duration: 6000,
    });
  };

  const pictureStyle = {
    background: `url(${ProfilePicture})`,
  };

  return (
    <>
      <Stars />
      <section
        className='w-full flex justify-center align-center flex-col pt-16 md:pt-20 min-h-screen lg:pb-16 relative bg-transparent shadow-lg shadow-[#282A3A]'
        name='home'>
        <div className='w-full max-w-[900px] flex flex-col justify-center mx-auto px-4 md:px-8'>
          <div className='flex flex-col md:flex-row-reverse align-center justify-center'>
            {/* Profile Picture */}
            <div
              className='w-56 h-56 md:w-80 md:h-80 border-2 md:border-[3px] animate-morph border-theme-white flex justify-center items-center m-auto md:ml-auto md:my-auto transition-all duration-[1s] bg-center bg-no-repeat bg-cover border-3 border-solid relative ease-in-out'
              style={pictureStyle}></div>
            <div>
              {/* Introduction */}
              <div className='flex flex-col md:flex-row items-start justify-between mb-6'>
                <div className='mt-4 md:mt-0 mx-auto md:mx-0'>
                  <h1 className="flex items-center gap-2 text-2xl sm:text-3xl 2xl:text-4xl font-bold after:content-[''] after:w-1.5 after:h-14 after:bg-theme-blue-100 after:animate-cursorBlink">
                    {i18n.t('homeSection.intro')}
                  </h1>
                  <h2 className='text-base sm:text-lg mb-3'>{i18n.t('homeSection.welcome')}</h2>
                  <div className='text-base sm:text-xl 2xl:text-2xl flex items-center justify-start md:mt-5'>
                    <p>{i18n.t('homeSection.smallDescription')} </p>
                    <span className='text-3xl sm:text-4xl 2xl:text-5xl text-theme-blue-50 ml-1 md:ml-2 md:mr-1'>
                      [
                    </span>
                    <div className='text-lg md:text-xl 2xl:text-2xl font-medium'>
                      <TypeAnimation
                        cursor={false}
                        sequence={[
                          `${i18n.t('homeSection.animatedTexts.textOne')}`,
                          3000,
                          `${i18n.t('homeSection.animatedTexts.textTwo')}`,
                          3000,
                          `${i18n.t('homeSection.animatedTexts.textThree')}`,
                          3000,
                          `${i18n.t('homeSection.animatedTexts.textFour')}`,
                          3000,
                          `${i18n.t('homeSection.animatedTexts.textFive')}`,
                          3000,
                          `${i18n.t('homeSection.animatedTexts.textSix')}`,
                          3000,
                        ]}
                        wrapper='span'
                        speed='45'
                        repeat={Infinity}
                      />
                    </div>
                    <span className='text-3xl sm:text-4xl 2xl:text-5xl text-theme-blue-50 sm:ml-1'>
                      ]
                    </span>
                  </div>
                </div>
              </div>
              {/* Description */}
              <p className='tracking-wide w-[274.63px] sm:w-[339.78px] md:w-[400px] max-w-[500px] text-base sm:text-lg 2xl:text-xl mx-auto'>
                {i18n.t('homeSection.description')}
              </p>
              {/* Social Links */}
              <div className='lg:hidden mt-6 mx-auto md:mx-0 w-[265px] sm:w-[328.56px]'>
                <ul className='flex justify-between items-center'>
                  <li className='p-2 bg-[#2867B2] rounded'>
                    <a href={social.linkedin} target='_blank' rel='noreferrer'>
                      <FaLinkedin size={30} />
                    </a>
                  </li>
                  <li className='p-2 bg-[#1B1F23] rounded'>
                    <a href={social.github} target='_blank' rel='noreferrer'>
                      <FaGithub size={28} />
                    </a>
                  </li>
                  <li className='p-2 bg-[#e22211] rounded'>
                    <a href={social.email}>
                      <HiOutlineMail size={28} />
                    </a>
                  </li>
                  <li className='p-2 bg-[#4E535E] rounded'>
                    <a
                      href={resumeLink}
                      download={i18n.t('header.resume.downloadName')}
                      rel='noreferrer'
                      target='_blank'
                      onClick={downloadResume}>
                      <BsFillPersonLinesFill size={28} />
                    </a>
                  </li>
                </ul>
              </div>
              {/* Buttons */}
              <div className='md:mx-0 w-full flex justify-center md:justify-start items-center mt-6 text-theme-white text-sm sm:text-base'>
                <Link to='works' smooth={true} duration={600}>
                  <button className='w-28 sm:w-32 2xl:w-32 h-12 flex justify-center items-center rounded bg-transparent mr-4 md:mr-7 border-2 hover:text-white active:text-white hover:bg-theme-blue-50 active:bg-theme-blue-50 hover:border-theme-blue-50 active:border-theme-blue-50 duration-200 group font-medium'>
                    {i18n.t('homeSection.buttons.work')}
                    <span className='group-hover:rotate-90 group-active:rotate-90 duration-300'>
                      <HiArrowNarrowRight className='ml-1' />
                    </span>
                  </button>
                </Link>
                <Link to='contact' smooth={true} duration={600}>
                  <button className='w-24 2xl:w-28 h-12 flex justify-center items-center rounded bg-theme-blue-50 hover:bg-theme-blue-100 active:bg-theme-blue-100 hover:text-white active:text-white duration-200 font-medium'>
                    {i18n.t('homeSection.buttons.hire')}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
