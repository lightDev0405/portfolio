import WorkElement from './WorkElement';
import CineflixMobileImg from '../assets/images/works/cineflix.jpg';
import CineflixDesktopImg from '../assets/images/works/cineflix-desktop.jpg';
import JsClassicGamesMobileImg from '../assets/images/works/js-classic-games.jpg';
import JsClassicGamesDesktopImg from '../assets/images/works/js-classic-games-desktop.jpg';
import TodoSorrisoMobileImg from '../assets/images/works/todosorriso.jpg';
import TodoSorrisoDesktopImg from '../assets/images/works/todosorriso-desktop.jpg';
import TaskoMobileImg from '../assets/images/works/tasko.jpg';
import TaskoDesktopImg from '../assets/images/works/tasko-desktop.jpg';
import HypeCamperDesktopImg from '../assets/images/works/hype-camper-desktop.jpg';
import HypeCamperMobileImg from '../assets/images/works/hype-camper.jpg';

import Slider from 'react-slick';
import { i18n } from '../locale/i18n';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Works = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section
      name="works"
      className="pb-[70px] md:pb-[80px] w-full text-theme-white"
    >
      <div className="flex flex-col w-full h-full max-w-[900px] mx-auto py-4 px-8">
        <div className="pb-10">
          <h1 className="text-2xl 2xl:text-3xl border-b-4 inline-block border-theme-white mb-4 pb-1">
            {i18n.t('worksSection.sectionName')}
          </h1>
          <h2 className="text-base sm:text-lg 2xl:text-xl">
            {i18n.t('worksSection.intro')}
          </h2>
        </div>

        <>
          <div className="mx-auto w-full max-w-[400px] md:hidden">
            <Slider {...settings}>
              <div>
                <WorkElement
                  img={HypeCamperMobileImg}
                  alt="hype camper camping locations website"
                  name={`${i18n.t('worksSection.hypeCamper.name')}`}
                  description={`${i18n.t(
                    'worksSection.hypeCamper.description'
                  )}`}
                  tools="Node, Express, MongoDB"
                  link="https://hype-camper.herokuapp.com/"
                  code="https://github.com/tiagocreator/hype-camper"
                />
              </div>
              <div>
                <WorkElement
                  img={JsClassicGamesMobileImg}
                  alt="javascript classic games website"
                  name={`${i18n.t('worksSection.classicGames.name')}`}
                  description={`${i18n.t(
                    'worksSection.classicGames.description'
                  )}`}
                  tools="HTML, CSS, JavaScript"
                  link="https://js-classic-games.vercel.app/"
                  code="https://github.com/tiagocreator/js-classic-games"
                />
              </div>
              <div>
                <WorkElement
                  img={TodoSorrisoMobileImg}
                  alt="todo sorriso dental clinic website"
                  name={`${i18n.t('worksSection.todoSorriso.name')}`}
                  description={`${i18n.t(
                    'worksSection.todoSorriso.description'
                  )}`}
                  tools="HTML, CSS, JavaScript"
                  link="https://todosorriso.vercel.app/"
                  code="https://github.com/tiagocreator/todosorriso"
                />
              </div>
              <div>
                <WorkElement
                  img={CineflixMobileImg}
                  alt="cineflix"
                  name={`${i18n.t('worksSection.cineflix.name')}`}
                  description={`${i18n.t('worksSection.cineflix.description')}`}
                  tools="React, TailwindCSS, Firebase"
                  link="https://cineflix-ten.vercel.app/"
                  code="https://github.com/tiagocreator/cineflix"
                />
              </div>
              <div>
                <WorkElement
                  img={TaskoMobileImg}
                  alt="tasko a todo task and pomodoro web app"
                  name="Tasko"
                  description={`${i18n.t('worksSection.tasko.description')}`}
                  tools="React, JavaScript, styled-components"
                  link="https://tasko-nine.vercel.app/"
                  code="https://github.com/tiagocreator/tasko"
                />
              </div>
            </Slider>
          </div>

          <div className="hidden md:flex flex-col">
            <WorkElement
              img={HypeCamperDesktopImg}
              alt="hype camper camping locations website"
              name={`${i18n.t('worksSection.hypeCamper.name')}`}
              description={`${i18n.t('worksSection.hypeCamper.description')}`}
              tools="Node, Express, MongoDB"
              link="https://hype-camper.herokuapp.com/"
              code="https://github.com/tiagocreator/hype-camper"
            />
            <WorkElement
              img={JsClassicGamesDesktopImg}
              alt="javascript classic games website"
              name={`${i18n.t('worksSection.classicGames.name')}`}
              description={`${i18n.t('worksSection.classicGames.description')}`}
              tools="HTML, CSS, JavaScript"
              link="https://js-classic-games.vercel.app/"
              code="https://github.com/tiagocreator/js-classic-games"
              reverse
            />
            <WorkElement
              img={TodoSorrisoDesktopImg}
              alt="todo sorriso dental clinic website"
              name={`${i18n.t('worksSection.todoSorriso.name')}`}
              description={`${i18n.t('worksSection.todoSorriso.description')}`}
              tools="HTML, CSS, JavaScript"
              link="https://todosorriso.vercel.app/"
              code="https://github.com/tiagocreator/todosorriso"
            />
            <WorkElement
              img={CineflixDesktopImg}
              alt="cineflix movie database website"
              name={`${i18n.t('worksSection.cineflix.name')}`}
              description={`${i18n.t('worksSection.cineflix.description')}`}
              tools="React, TailwindCSS, Firebase"
              link="https://cineflix-ten.vercel.app/"
              code="https://github.com/tiagocreator/cineflix"
              reverse
            />
            <WorkElement
              img={TaskoDesktopImg}
              alt="tasko a todo task and pomodoro web app"
              name={`${i18n.t('worksSection.tasko.name')}`}
              description={`${i18n.t('worksSection.tasko.description')}`}
              tools="React, JavaScript, styled-components"
              link="https://tasko-nine.vercel.app/"
              code="https://github.com/tiagocreator/tasko"
            />
          </div>
        </>
      </div>
    </section>
  );
};

export default Works;
