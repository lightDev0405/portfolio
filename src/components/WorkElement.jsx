import { FiExternalLink } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';
import { i18n } from '../locale/i18n';

const WorkElement = ({
  img,
  alt,
  name,
  description,
  tools,
  link,
  code,
  reverse,
}) => {
  return (
    <>
      {/* Mobile */}
      <div className="group relative w-[92%] mx-auto flex flex-col justify-center items-center sm:hidden">
        <div className="mx-[-1px] -z-10 absolute top-0 left-0 w-full ">
          <img src={img} alt={alt} className="rounded min-h-full" />
          <div className="rounded absolute top-0 left-0 z-20 w-full h-full bg-[rgba(0,0,0,0.2)] group-hover:bg-[rgba(0,0,0,0.9)] group-active:bg-[rgba(0,0,0,0.9)] group-focus:bg-[rgba(0,0,0,0.9)] duration-500"></div>
        </div>
        <div className="mx-[1px] min-h-[450px] flex flex-col justify-center align-center">
          <div className="duration-500 h-[450px] hidden group-hover:flex group-active:flex group-focus:flex flex-col justify-between align-center">
            <h1 className="flex items-center justify-center bg-[rgba(0,0,0,0.6)] w-full h-[60px] text-2xl font-medium">
              {name}
            </h1>
            <p className="text-lg text-center mx-5">{description}</p>
            <div className="flex justify-center items-center flex-col">
              <div className="flex flex-col items-center">
                <h1 className="text-lg mb-1.5 font-medium">
                  {i18n.t('worksSection.workElement.tools')}
                </h1>
                <div className="flex justify-center items-center">
                  <div className="font-medium">{tools}</div>
                </div>
              </div>
              <div className="flex my-5">
                <a
                  className="h-9 w-28 bg-theme-blue-50 hover:bg-theme-blue-100 active:bg-theme-blue-100 hover:text-white active:text-white rounded mx-1.5 flex items-center justify-around hover:-translate-y-[2px] duration-300"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {i18n.t('worksSection.workElement.buttons.demo')}{' '}
                  <FiExternalLink size={19} />
                </a>
                <a
                  className="h-9 w-28 rounded mx-1.5 shadow-sm shadow-theme-white bg-theme-white text-theme-black font-bold  flex items-center justify-around hover:-translate-y-[2px] active:-translate-y-[2px] duration-300"
                  href={code}
                  target="_blank"
                  rel="noreferrer"
                >
                  {i18n.t('worksSection.workElement.buttons.code')}{' '}
                  <AiFillGithub size={19} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div
        className={`hidden sm:flex ${
          !reverse ? 'flex-row text-right' : 'flex-row-reverse text-left'
        } w-full mb-28 last-of-type:mb-0 relative`}
      >
        <div className="shadow-[0px_0px_16px_11px] shadow-[rgba(96,138,177,0.1)] flex-[50%] max-w-[430px] absolute">
          <img src={img} alt={alt} className="w-full h-full" />
        </div>
        <div
          className={`flex-[40%] flex flex-col z-[2] ${
            !reverse ? 'items-end' : 'items-start'
          }`}
        >
          <div>
            <p className="italic">
              {i18n.t('worksSection.workElement.featured')}
            </p>
            <h1 className="text-3xl my-1.5 font-medium ">
              <a href={link} rel="noreferrer" target="_blank">
                {name}
              </a>
            </h1>
          </div>
          <div
            className={` bg-[rgba(44,42,46,0.95)] hover:bg-[rgba(44,42,46,0.90)] rounded py-4 px-[20px] my-2.5 flex w-[60%] ${
              !reverse ? 'justify-end' : 'justify-start'
            }`}
          >
            {' '}
            <a href={link} rel="noreferrer" target="_blank">
              <p className="text-lg">{description}</p>
            </a>
          </div>
          <div className="flex">
            <div className="font-medium">{tools}</div>
          </div>
          <div className="flex justify-between items-center mt-4 sm:w-[80px] md:w-[264px]">
            <a
              className="sm:h-9 sm:w-9 md:h-8 md:w-32 flex items-center justify-around bg-theme-blue-50 sm:rounded-full md:rounded  hover:-translate-y-[2px] duration-300"
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              <span className="sm:hidden md:block">
                {i18n.t('worksSection.workElement.buttons.demo')}{' '}
              </span>
              <FiExternalLink size={20} />
            </a>
            <a
              className="sm:h-9 sm:w-9 md:h-8 md:w-32 flex items-center justify-around shadow-sm shadow-theme-white bg-theme-white text-theme-black font-bold  sm:rounded-full md:rounded hover:-translate-y-[2px] duration-300"
              href={code}
              target="_blank"
              rel="noreferrer"
            >
              <span className="sm:hidden md:block">
                {i18n.t('worksSection.workElement.buttons.code')}{' '}
              </span>
              <AiFillGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkElement;
