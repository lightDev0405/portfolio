import WorkElement from './WorkElement';
import CineflixMobileImg from '../assets/images/works/cineflix.jpg';
import CineflixDesktopImg from '../assets/images/works/cineflix-desktop.jpg';
import NoirMobileImg from '../assets/images/works/noir.jpg';
import NoirDesktopImg from '../assets/images/works/noir-desktop.jpg';
import LassoMobileImg from '../assets/images/works/lasso.jpg';
import LassoDesktopImg from '../assets/images/works/lasso-desktop.jpg';
import CasaECorMobileImg from '../assets/images/works/casa-e-cor.jpg';
import CasaECorDesktopImg from '../assets/images/works/casa-e-cor-desktop.jpg';

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
    <section name='works' className='pt-12 md:pt-20 w-full text-theme-white'>
      <div className='flex flex-col w-full h-full max-w-[900px] mx-auto py-4 px-8'>
        <div className='pb-10'>
          <h1 className='font-medium text-xl 2xl:text-2xl border-b-4 inline-block border-theme-white mb-4 pb-1'>
            {i18n.t('worksSection.sectionName')}
          </h1>
          <p className='text-base 2xl:text-lg'>{i18n.t('worksSection.intro')}</p>
        </div>

        <>
          {/* Mobile Slider */}
          <div className='mx-auto w-full max-w-[400px] md:hidden'>
            <Slider {...settings}>
              <div>
                <WorkElement
                  img={CasaECorMobileImg}
                  alt={i18n.t('worksSection.casaECor.alt')}
                  name={`${i18n.t('worksSection.casaECor.name')}`}
                  description={`${i18n.t('worksSection.casaECor.description')}`}
                  tools='HTML5, LESS, JavaScript'
                  link='https://casa-e-cor.vercel.app/'
                  code='https://github.com/tiagocreator/casa-e-cor'
                />
              </div>
              <div>
                <WorkElement
                  img={LassoMobileImg}
                  alt={i18n.t('worksSection.lasso.alt')}
                  name={`${i18n.t('worksSection.lasso.name')}`}
                  description={`${i18n.t('worksSection.lasso.description')}`}
                  tools='React, Redux, Sass'
                  link='https://lasso-ecommerce.up.railway.app/'
                  code='https://github.com/tiagocreator/lasso-ecommerce'
                />
              </div>
              <div>
                <WorkElement
                  img={NoirMobileImg}
                  alt={i18n.t('worksSection.noir.alt')}
                  name={`${i18n.t('worksSection.noir.name')}`}
                  description={`${i18n.t('worksSection.noir.description')}`}
                  tools='HTML5, CSS3, JavaScript'
                  link='https://noir-barbearia.vercel.app/'
                  code='https://github.com/tiagocreator/noir-barbearia'
                />
              </div>
              <div>
                <WorkElement
                  img={CineflixMobileImg}
                  alt={i18n.t('worksSection.cineflix.alt')}
                  name={`${i18n.t('worksSection.cineflix.name')}`}
                  description={`${i18n.t('worksSection.cineflix.description')}`}
                  tools='React, TailwindCSS, Firebase'
                  link='https://cineflix-ten.vercel.app/'
                  code='https://github.com/tiagocreator/cineflix'
                />
              </div>
            </Slider>
          </div>
          {/* Desktop */}
          <div className='hidden md:flex flex-col'>
            <WorkElement
              img={CasaECorDesktopImg}
              alt={i18n.t('worksSection.casaECor.alt')}
              name={`${i18n.t('worksSection.casaECor.name')}`}
              description={`${i18n.t('worksSection.casaECor.description')}`}
              tools='HTML5, LESS, JavaScript'
              link='https://casa-e-cor.vercel.app/'
              code='https://github.com/tiagocreator/casa-e-cor'
            />
            <WorkElement
              img={LassoDesktopImg}
              alt={i18n.t('worksSection.lasso.alt')}
              name={`${i18n.t('worksSection.lasso.name')}`}
              description={`${i18n.t('worksSection.lasso.description')}`}
              tools='React, Redux, Sass'
              link='https://lasso-ecommerce.up.railway.app/'
              code='https://github.com/tiagocreator/lasso-ecommerce'
              reverse
            />
            <WorkElement
              img={NoirDesktopImg}
              alt={i18n.t('worksSection.noir.alt')}
              name={`${i18n.t('worksSection.noir.name')}`}
              description={`${i18n.t('worksSection.noir.description')}`}
              tools='HTML5, CSS3, JavaScript'
              link='https://noir-barbearia.vercel.app/'
              code='https://github.com/tiagocreator/noir-barbearia'
            />
            <WorkElement
              img={CineflixDesktopImg}
              alt={i18n.t('worksSection.cineflix.alt')}
              name={`${i18n.t('worksSection.cineflix.name')}`}
              description={`${i18n.t('worksSection.cineflix.description')}`}
              tools='React, TailwindCSS, Firebase'
              link='https://cineflix-ten.vercel.app/'
              code='https://github.com/tiagocreator/cineflix'
              reverse
            />
          </div>
        </>
      </div>
    </section>
  );
};

export default Works;
