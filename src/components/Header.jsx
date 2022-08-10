import React, { useState } from 'react';
import Brackets from '../assets/images/logo/brackets-dark.png';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { BsChevronDown } from 'react-icons/bs';
import { i18n } from '../locale/i18n';
import '../../node_modules/flag-icons/css/flag-icons.min.css';

const I18N_STORAGE_KEY = 'i18nextLng';
const CURRENT_KEY = localStorage.getItem('i18nextLng');

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

const changeLocale = (e) => {
  console.log(e.target.value);
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

  return (
    <header className="w-full mx-auto h-12 md:h-14 flex justify-between items-center px-5 md:px-10 bg-[rgba(32,32,35,0.4)] text-theme-white fixed backdrop-blur-[10px] z-10 shadow-[0px_3px_15px_0px] shadow-[rgba(0,0,0,0.2)]">
      <Link to="about" smooth={true} duration={600}>
        <div className="group flex justify-center items-center select-none">
          <img
            className="w-9 h-auto group-hover:rotate-[25deg] duration-300"
            src={Brackets}
            alt="logo"
          />
          <h1 className="text-2xl md:text-3xl ml-4 font-bold">Tiago Leite</h1>
        </div>
      </Link>

      <div className="hidden md:flex items-center justify-center">
        <div className="h-full mr-4">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center items-center w-full rounded-md border border-theme-white shadow-sm px-2 py-2 bg-theme-white text-sm font-medium text-gray-700 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-theme-blue-100">
                {CURRENT_KEY === 'pt-BR' ? (
                  <span className="fi fi-br"></span>
                ) : (
                  <span className="fi fi-us"></span>
                )}
                <BsChevronDown
                  className="-mr-1 ml-1 text-sm"
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
        <ul className="flex text-xl w-[330px] justify-between items-center">
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
          <li className="cursor-pointer duration-200 bg-theme-blue-50 hover:bg-theme-blue-100 active:bg-theme-blue-100 hover:text-white active:text-white py-1.5 px-2.5 rounded">
            <Link to="contact" smooth={true} duration={600}>
              {i18n.t('header.nav.contact')}
            </Link>
          </li>
        </ul>
      </div>

      <div onClick={handleClick} className="flex md:hidden z-10">
        <FaBars size={37} />
      </div>

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

        <ul className="h-72 flex flex-col justify-between items-center text-3xl">
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
            <a href="/">
              <BsFillPersonLinesFill size={40} />
            </a>
          </li>
        </ul>
      </div>

      <div className="hidden lg:flex fixed flex-col top-[35vh] left-0">
        <ul>
          <li className="flex justify-between items-between w-40 h-14 ml-[-100px] hover:ml-0 duration-300 bg-[#2867B2]">
            <a
              className="flex justify-around items-center w-full "
              href={social.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="flex justify-between items-between w-40 h-14 ml-[-100px] hover:ml-0 duration-300 bg-[#1B1F23]">
            <a
              className="flex justify-around items-center w-full "
              href={social.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="flex justify-between items-between w-40 h-14 ml-[-100px] hover:ml-0 duration-300 bg-[#e22211]">
            <a
              className="flex justify-around items-center w-full "
              href={social.email}
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="flex justify-between items-between w-40 h-14 ml-[-100px] hover:ml-0 duration-300 bg-[#4E535E]">
            <a
              className="flex justify-around items-center w-full "
              href="/"
              target="_blank"
              rel="noreferrer"
            >
              {i18n.t('header.socialMedia.resume')}{' '}
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
