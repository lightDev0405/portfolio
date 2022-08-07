const Footer = () => {
  return (
    <footer className="w-full h-8 md:h-9 bg-[#262629] text-theme-white flex justify-center items-center shadow-[0px_-1px_10px_0px] shadow-[rgba(0,0,0,0.2)]">
      <span className="text-sm font-medium">2020 Tiago Leite</span>{' '}
      <a
        className="text-sm absolute right-2.5"
        href="/"
        target="_blank"
        rel="nofererrer"
      >
        source
      </a>
    </footer>
  );
};

export default Footer;
