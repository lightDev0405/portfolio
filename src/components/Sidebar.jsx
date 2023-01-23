import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { FcDocument } from 'react-icons/fc';
import { i18n } from '../locale/i18n';
import ptResume from '../assets/docs/tiago-leite-resume-pt.pdf';
import enResume from '../assets/docs/tiago-leite-resume-en.pdf';
import toast from 'react-hot-toast';

const CURRENT_KEY = localStorage.getItem('i18nextLng');

const Sidebar = () => {
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
          href={resumeLink}
          download={i18n.t('header.resume.downloadName')}
          rel="noreferrer"
          target="_blank"
          onClick={downloadResume}
        >
          {i18n.t('header.resume.name')} <BsFillPersonLinesFill size={30} />
        </a>
      </li>
    </ul>
  );
};

export default Sidebar;
