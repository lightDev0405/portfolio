import WorkElement from './WorkElement';
import CineflixMobileImg from '../assets/images/works/cineflix.jpg';
import CineflixDesktopImg from '../assets/images/works/cineflix-desktop.jpg';
import JsClassicGamesMobileImg from '../assets/images/works/js-classic-games.jpg';
import JsClassicGamesDesktopImg from '../assets/images/works/js-classic-games-desktop.jpg';
import SampleMobileImg from '../assets/images/works/sample-project.png';
import SampleDesktopImg from '../assets/images/works/sample-project-desktop.png';

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
          <h1 className="text-2xl md:text-3xl border-b-4 inline-block border-theme-white mb-4 pb-1">
            {i18n.t('worksSection.sectionName')}
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl">
            {i18n.t('worksSection.intro')}
          </h2>
        </div>

        <>
          <div className="mx-auto w-full max-w-[400px] sm:hidden">
            <Slider {...settings}>
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
                  img={JsClassicGamesMobileImg}
                  alt="javascript classic games website"
                  name={`${i18n.t('worksSection.classicGames.name')}`}
                  description={`${i18n.t(
                    'worksSection.classicGames.description'
                  )}`}
                  tools="HTML, CSS, JavaScript"
                  link="https://js-classic-games.vercel.app/"
                  code="https://github.com/tiagocreator/js-classic-games"
                  reverse
                />
              </div>
              <div>
                <WorkElement
                  img={SampleMobileImg}
                  alt=""
                  name="Sample Project"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  tools="tool 1, tool 2, tool 3"
                  link="#"
                  code="#"
                  reverse
                />
              </div>
              <div>
                <WorkElement
                  img={SampleMobileImg}
                  alt=""
                  name="Sample Project"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  tools="tool 1, tool 2, tool 3"
                  link="#"
                  code="#"
                  reverse
                />
              </div>
            </Slider>
          </div>
          <div className="hidden sm:flex flex-col">
            <WorkElement
              img={CineflixDesktopImg}
              alt="cineflix movie database website"
              name={`${i18n.t('worksSection.cineflix.name')}`}
              description={`${i18n.t('worksSection.cineflix.description')}`}
              tools="React, TailwindCSS, Firebase"
              link="https://cineflix-ten.vercel.app/"
              code="https://github.com/tiagocreator/cineflix"
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
              img={SampleDesktopImg}
              alt=""
              name="Sample Project"
              description="Quis varius quam quisque id diam. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Purus viverra accumsan in nisl. Enim sit amet venenatis urna cursus eget."
              tools="tool 1, tool 2, tool 3"
              link="#"
              code="#"
            />
            <WorkElement
              img={SampleDesktopImg}
              alt=""
              name="Sample Project"
              description="Libero enim sed faucibus turpis. Eu nisl nunc mi ipsum. Pretium lectus quam id leo in vitae turpis. Cursus turpis massa tincidunt dui ut. Ultricies lacus sed turpis tincidunt. Bibendum neque egestas congue quisque."
              tools="tool 1, tool 2, tool 3"
              link="#"
              code="#"
              reverse
            />
          </div>
        </>
      </div>
    </section>
  );
};

export default Works;
