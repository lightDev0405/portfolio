import React, { useState } from 'react';
import Brackets from '../assets/images/logo/brackets-dark.png';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const social = {
    linkedin: 'https://www.linkedin.com/in/tiagocreator/',
    github: 'https://github.com/tiagocreator',
    email: 'mailto:tiagoleite1405@gmail.com',
  };

  return (
    <header className="w-full mx-auto h-14 md:h-16 flex justify-between items-center px-5 md:px-10 bg-[rgba(32,32,35,0.4)] text-theme-white fixed backdrop-blur-[10px] z-10 shadow-[0px_3px_15px_0px] shadow-[rgba(0,0,0,0.2)]">
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

      <div className="hidden md:block">
        <ul className="flex text-xl w-[330px] justify-between items-center">
          <li className="cursor-pointer hover:text-white duration-200">
            <Link to="about" smooth={true} duration={600}>
              About
            </Link>
          </li>
          <li className="cursor-pointer hover:text-white duration-200">
            <Link to="skills" smooth={true} duration={600}>
              Skills
            </Link>
          </li>
          <li className="cursor-pointer hover:text-white duration-200">
            <Link to="works" smooth={true} duration={600}>
              Works
            </Link>
          </li>
          <li className="cursor-pointer duration-200 bg-theme-blue-50 hover:bg-theme-blue-100 active:bg-theme-blue-100 hover:text-white active:text-white py-1.5 px-2.5 rounded">
            <Link to="contact" smooth={true} duration={600}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div onClick={handleClick} className="flex md:hidden z-10">
        <FaBars size={40} />
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
          size={45}
          className="absolute top-5 right-5"
        />

        <ul className="h-72 flex flex-col justify-between items-center text-3xl">
          <li>
            <Link onClick={handleClick} to="about" smooth={true} duration={600}>
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={600}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link onClick={handleClick} to="works" smooth={true} duration={600}>
              Works
            </Link>
          </li>
          <li>
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={600}
            >
              Contact
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
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
