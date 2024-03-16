import WorkElement from './WorkElement';
import NoirMobileImg from '../assets/images/works/noir.jpg';
import NoirDesktopImg from '../assets/images/works/noir-desktop.jpg';
import LassoMobileImg from '../assets/images/works/lasso.jpg';
import LassoDesktopImg from '../assets/images/works/lasso-desktop.jpg';
import CasaECorMobileImg from '../assets/images/works/casa-e-cor.jpg';
import CasaECorDesktopImg from '../assets/images/works/casa-e-cor-desktop.jpg';
import AlugaFacilMobileImg from '../assets/images/works/aluga-facil.jpg';
import AlugaFacilDesktopImg from '../assets/images/works/aluga-facil-desktop.jpg';

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

  let info = {
    casaECor: {
      alt: i18n.t('worksSection.casaECor.alt'),
      name: `${i18n.t('worksSection.casaECor.name')}`,
      description: `${i18n.t('worksSection.casaECor.description')}`,
      tools: 'HTML5, LESS, JavaScript',
      link: 'https://casa-e-cor.vercel.app/',
      code: 'https://github.com/tiagocreator/casa-e-cor',
    },
    lasso: {
      alt: i18n.t('worksSection.lasso.alt'),
      name: `${i18n.t('worksSection.lasso.name')}`,
      description: `${i18n.t('worksSection.lasso.description')}`,
      tools: 'React, Redux, Sass',
      link: 'https://lasso-ecommerce.up.railway.app/',
      code: 'https://github.com/tiagocreator/lasso-ecommerce',
    },
    noir: {
      alt: i18n.t('worksSection.noir.alt'),
      name: `${i18n.t('worksSection.noir.name')}`,
      description: `${i18n.t('worksSection.noir.description')}`,
      tools: 'HTML5, CSS3, JavaScript',
      link: 'https://noir-barbearia.vercel.app/',
      code: 'https://github.com/tiagocreator/noir-barbearia',
    },
    alugaFacil: {
      alt: i18n.t('worksSection.alugaFacil.alt'),
      name: `${i18n.t('worksSection.alugaFacil.name')}`,
      description: `${i18n.t('worksSection.alugaFacil.description')}`,
      tools: 'React, TypeScript, Sass',
      link: 'https://aluga-facil.vercel.app/',
      code: 'https://github.com/tiagocreator/aluga-facil',
    },
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
                {/* Casa & Cor */}
                <WorkElement
                  img={CasaECorMobileImg}
                  alt={info.casaECor.alt}
                  name={info.casaECor.name}
                  description={info.casaECor.description}
                  tools={info.casaECor.tools}
                  link={info.casaECor.link}
                  code={info.casaECor.code}
                />
              </div>
              <div>
                {/* Lasso */}
                <WorkElement
                  img={LassoMobileImg}
                  alt={info.lasso.alt}
                  name={info.lasso.name}
                  description={info.lasso.description}
                  tools={info.lasso.tools}
                  link={info.lasso.link}
                  code={info.lasso.code}
                />
              </div>
              <div>
                {/* Noir */}
                <WorkElement
                  img={NoirMobileImg}
                  alt={info.noir.alt}
                  name={info.noir.name}
                  description={info.noir.description}
                  tools={info.noir.tools}
                  link={info.noir.link}
                  code={info.noir.code}
                />
              </div>
              <div>
                {/* Aluga Fácil */}
                <WorkElement
                  img={AlugaFacilMobileImg}
                  alt={info.alugaFacil.alt}
                  name={info.alugaFacil.name}
                  description={info.alugaFacil.description}
                  tools={info.alugaFacil.tools}
                  link={info.alugaFacil.link}
                  code={info.alugaFacil.code}
                />
              </div>
            </Slider>
          </div>
          {/* Desktop */}
          <div className='hidden md:flex flex-col'>
            {/* Casa & Cor */}
            <WorkElement
              img={CasaECorDesktopImg}
              alt={info.casaECor.alt}
              name={info.casaECor.name}
              description={info.casaECor.description}
              tools={info.casaECor.tools}
              link={info.casaECor.link}
              code={info.casaECor.code}
            />
            {/* Lasso */}
            <WorkElement
              img={LassoDesktopImg}
              alt={info.lasso.alt}
              name={info.lasso.name}
              description={info.lasso.description}
              tools={info.lasso.tools}
              link={info.lasso.link}
              code={info.lasso.code}
              reverse
            />
            {/* Noir */}
            <WorkElement
              img={NoirDesktopImg}
              alt={info.noir.alt}
              name={info.noir.name}
              description={info.noir.description}
              tools={info.noir.tools}
              link={info.noir.link}
              code={info.noir.code}
            />
            {/* Aluga Fácil */}
            <WorkElement
              img={AlugaFacilDesktopImg}
              alt={info.alugaFacil.alt}
              name={info.alugaFacil.name}
              description={info.alugaFacil.description}
              tools={info.alugaFacil.tools}
              link={info.alugaFacil.link}
              code={info.alugaFacil.code}
              reverse
            />
          </div>
        </>
      </div>
    </section>
  );
};

export default Works;
