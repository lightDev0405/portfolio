import About from './About';
import Skills from './Skills';
import Works from './Works';
import Contact from './Contact';

const Main = () => {
  return (
    <main className="bg-theme-black text-theme-white">
      <About />
      <Skills />
      <Works />
      <Contact />
    </main>
  );
};

export default Main;
