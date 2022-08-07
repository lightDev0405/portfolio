import WorkElement from './WorkElement';
import CineflixDesktopImg from '../assets/images/works/cineflix-desktop.jpg';
import CineflixMobileImg from '../assets/images/works/cineflix.jpg';
import SampleDesktopImg from '../assets/images/works/sample-project-desktop.png';
import SampleMobileImg from '../assets/images/works/sample-project.png';

import Slider from 'react-slick';
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
      <div className="flex flex-col w-full h-full max-w-[900px] mx-auto py-[16px] px-[32px]">
        <div className="pb-[40px]">
          <h1 className="text-3xl md:text-4xl border-b-4 inline-block border-theme-white mb-[10px]">
            Works
          </h1>
          <h2 className="text-base md:text-lg">
            I created and launched complete projects. carrying the development
            of its' front-end codebases and collaborating with designers. Here
            are some examples of my work.
          </h2>
        </div>

        <>
          <div className="mx-auto w-full max-w-[400px] sm:hidden">
            <Slider {...settings}>
              <div>
                <WorkElement
                  img={CineflixMobileImg}
                  alt="cineflix"
                  name="Cineflix"
                  description="Database of movies mimicking the look of Netflix, it has integration with Firebase to create an account, login and save the movies to favorites."
                  tools="React, TailwindCSS, Firebase"
                  link="https://cineflix-ten.vercel.app/"
                  code="https://github.com/tiagocreator/cineflix"
                />
              </div>
              <div>
                <WorkElement
                  img={SampleMobileImg}
                  alt=""
                  name="Sample Project"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
              alt="cineflix"
              name="Cineflix"
              description="Database of movies mimicking the look of Netflix, it has integration with Firebase to create an account, login and save the movies to favorites."
              tools="React, TailwindCSS, Firebase"
              link="https://cineflix-ten.vercel.app/"
              code="https://github.com/tiagocreator/cineflix"
            />
            <WorkElement
              img={SampleDesktopImg}
              alt=""
              name="Sample Project"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              link="#"
              code="#"
              reverse
            />
            <WorkElement
              img={SampleDesktopImg}
              alt=""
              name="Sample Project"
              description="Quis varius quam quisque id diam. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Purus viverra accumsan in nisl. Enim sit amet venenatis urna cursus eget."
              link="#"
              code="#"
            />
            <WorkElement
              img={SampleDesktopImg}
              alt=""
              name="Sample Project"
              description="Libero enim sed faucibus turpis. Eu nisl nunc mi ipsum. Pretium lectus quam id leo in vitae turpis. Cursus turpis massa tincidunt dui ut. Ultricies lacus sed turpis tincidunt. Bibendum neque egestas congue quisque."
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
