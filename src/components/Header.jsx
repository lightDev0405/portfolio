import React, { useState } from 'react';
import Brackets from '../assets/images/logo/brackets-dark.png';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaExchangeAlt,
} from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { FcDocument } from 'react-icons/fc';
import { Link } from 'react-scroll';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { BsChevronDown } from 'react-icons/bs';
import { i18n } from '../locale/i18n';
import '../../node_modules/flag-icons/css/flag-icons.min.css';
import Sidebar from './Sidebar';
import ptResume from '../assets/docs/tiago-leite-resume-pt.pdf';
import enResume from '../assets/docs/tiago-leite-resume-en.pdf';
import toast from 'react-hot-toast';

const I18N_STORAGE_KEY = 'i18nextLng';
const CURRENT_KEY = localStorage.getItem('i18nextLng');

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

const changeLocale = (e) => {
  localStorage.setItem(I18N_STORAGE_KEY, e.target.value);
  if (CURRENT_KEY !== e.target.value) {
    window.location.reload();
  }
};

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const social = {
    linkedin: 'https://www.linkedin.com/in/tiagocreator/',
    github: 'https://github.com/tiagocreator',
    email: 'mailto:tiagoleite1405@gmail.com',
  };

  const resumeLink = CURRENT_KEY === 'pt-BR' ? ptResume : enResume;

  const downloadResume = () => {
    toast(i18n.t('header.resume.downloadMessage'), {
      icon: <FcDocument size={28} />,
      duration: 6000,
    });
  };

  return (
    <header className="w-full mx-auto h-12 md:h-14 flex justify-between items-center px-5 md:px-10 bg-[rgba(32,32,35,0.4)] text-theme-white fixed backdrop-blur-[10px] z-10 shadow-[0px_3px_15px_0px] shadow-[rgba(0,0,0,0.2)]">
      <Link to="about" smooth={true} duration={600}>
        <div className="group flex justify-center items-center select-none">
          <img
            className="w-8 2xl:w-9 h-auto group-hover:rotate-[25deg] duration-300"
            src={Brackets}
            alt="logo"
          />
          <h1 className="text-2xl 2xl:text-3xl ml-4 font-bold">Tiago Leite</h1>
        </div>
      </Link>

      {/* Mobile Menu */}
      <div
        className={
          !nav
            ? 'hidden'
            : 'w-full h-screen md:hidden flex flex-col justify-between items-center fixed inset-0 bg-theme-black py-28 z-20'
        }
      >
        <FaTimes
          onClick={handleClick}
          size={44}
          className="absolute top-5 right-5"
        />

        <ul className="h-60 flex flex-col justify-between items-center text-3xl">
          <li>
            <Link onClick={handleClick} to="about" smooth={true} duration={600}>
              {i18n.t('header.nav.about')}
            </Link>
          </li>
          <li>
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={600}
            >
              {i18n.t('header.nav.skills')}
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} to="works" smooth={true} duration={600}>
              {i18n.t('header.nav.works')}
            </Link>
          </li>
          <li>
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={600}
            >
              {i18n.t('header.nav.contact')}
            </Link>
          </li>
        </ul>

        <div className="flex items-center justify-center text-5xl">
          <button
            className="w-auto h-auto"
            value="pt-BR"
            onClick={changeLocale}
          >
            <span className="fi fi-br -z-10"></span>
          </button>
          <FaExchangeAlt className="text-2xl mx-8" />
          <button
            className="w-auto h-auto"
            value="en-US"
            onClick={changeLocale}
          >
            <span className="fi fi-us -z-10"></span>
          </button>
        </div>
        <ul className="w-[300px] flex justify-between items-center">
          <li className="p-2.5 bg-[#2867B2] rounded">
            <a href={social.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin size={42} />
            </a>
          </li>
          <li className="p-2.5 bg-[#1B1F23] rounded">
            <a href={social.github} target="_blank" rel="noreferrer">
              <FaGithub size={40} />
            </a>
          </li>
          <li className="p-2.5 bg-[#e22211] rounded">
            <a href={social.email}>
              <HiOutlineMail size={40} />
            </a>
          </li>
          <li className="p-2.5 bg-[#4E535E] rounded">
            <a
              href={resumeLink}
              download={i18n.t('header.resume.downloadName')}
              rel="noreferrer"
              target="_blank"
              onClick={downloadResume}
            >
              <BsFillPersonLinesFill size={40} />
            </a>
          </li>
        </ul>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center justify-center">
        <div className="h-full mr-8">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center items-center w-full rounded border border-theme-white shadow-sm md:px-1.5 md:py-1.5 2xl:px-2 2xl:py-2 bg-theme-white text-sm font-medium text-gray-700 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-theme-blue-100">
                {CURRENT_KEY === 'pt-BR' ? 'PT' : 'EN'}
                <BsChevronDown
                  className="-mr-1 ml-0.5 text-sm"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        value="pt-BR"
                        className={classNames(
                          active
                            ? 'bg-theme-white text-theme-black'
                            : 'text-gray-700',
                          'w-full text-left block px-4 py-2 text-sm'
                        )}
                        onClick={changeLocale}
                      >
                        <span className="fi fi-br mr-2"></span>Português
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        value="en-US"
                        className={classNames(
                          active
                            ? 'bg-theme-white text-theme-black'
                            : 'text-gray-700',
                          'w-full text-left block px-4 py-2 text-sm'
                        )}
                        onClick={changeLocale}
                      >
                        <span className="fi fi-us mr-2"></span>English
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <ul className="flex md:text-lg 2xl:text-xl w-[330px] justify-between items-center">
          <li className="cursor-pointer hover:text-white duration-200">
            <Link to="about" smooth={true} duration={600}>
              {i18n.t('header.nav.about')}
            </Link>
          </li>
          <li className="cursor-pointer hover:text-white duration-200">
            <Link to="skills" smooth={true} duration={600}>
              {i18n.t('header.nav.skills')}{' '}
            </Link>
          </li>
          <li className="cursor-pointer hover:text-white duration-200">
            <Link to="works" smooth={true} duration={600}>
              {i18n.t('header.nav.works')}
            </Link>
          </li>
          <li className="cursor-pointer duration-200 bg-theme-blue-50 hover:bg-theme-blue-100 active:bg-theme-blue-100 hover:text-white active:text-white md:py-[4px] 2xl:py-1.5 px-2.5 rounded">
            <Link to="contact" smooth={true} duration={600}>
              {i18n.t('header.nav.contact')}
            </Link>
          </li>
        </ul>
      </div>

      <div onClick={handleClick} className="flex md:hidden z-10">
        <FaBars size={37} />
      </div>

      {/* Sidebar */}
      <div className="hidden lg:flex fixed flex-col top-[35vh] left-0">
        <Sidebar />
      </div>
    </header>
  );
};

export default Navbar;
