import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { i18n } from '../locale/i18n';

const Sidebar = () => {
  const social = {
    linkedin: 'https://www.linkedin.com/in/tiagocreator/',
    github: 'https://github.com/tiagocreator',
    email: 'mailto:tiagoleite1405@gmail.com',
  };

  return (
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
          className="flex justify-around items-center w-full"
          href={social.github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub <FaGithub size={30} />
        </a>
      </li>
      <li className="flex justify-between items-between w-40 h-14 ml-[-100px] hover:ml-0 duration-300 bg-[#e22211]">
        <a
          className="flex justify-around items-center w-full"
          href={social.email}
        >
          Email <HiOutlineMail className="ml-4" size={30} />
        </a>
      </li>
      <li className="flex justify-between items-between w-40 h-14 ml-[-100px] hover:ml-0 duration-300 bg-[#4E535E]">
        <a
          className="flex justify-around items-center w-full"
          href="/"
          target="_blank"
          rel="noreferrer"
        >
          {i18n.t('header.socialMedia.resume')}{' '}
          <BsFillPersonLinesFill size={30} />
        </a>
      </li>
    </ul>
  );
};

export default Sidebar;
