const SkillCard = ({ color, icon, name, active = true, iconStyles = undefined }) => {
  const DynamicIcon = icon;

  return (
    <div
      className={`${
        active ? 'block' : 'hidden sm:block'
      } shadow-md shadow-[rgba(19,33,50,0.8)] p-2 hover:scale-[1.1] duration-500 select-none`}>
      <DynamicIcon className={`mx-auto mb-4 text-4xl xl:text-5xl 2xl:text-6xl`} style={{ color }} />
      <span className='mt-4 text-sm 2xl:text-base'>{name}</span>
    </div>
  );
};

export default SkillCard;
