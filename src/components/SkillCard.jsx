const SkillCard = ({ shadow, color, icon, name, active = true, iconStyles = undefined }) => {
  const DynamicIcon = icon;
  const iconCustomClass = iconStyles;

  return (
    <div
      className={`${
        active ? 'block' : 'hidden sm:block'
      } shadow-md shadow-[${shadow}] p-2 hover:scale-[1.1] duration-500 select-none`}>
      <DynamicIcon
        className={`mx-auto mb-4 text-4xl xl:text-5xl 2xl:text-6xl ${iconCustomClass}`}
        style={{ color }}
      />
      <span className='mt-4 text-sm 2xl:text-base'>{name}</span>
    </div>
  );
};

export default SkillCard;
