export const SkillBadge = ({ icon: Icon, text, size, position = "", animation = "animate-float" }) => {
  return (
    <div className={`group absolute ${position} w-12 h-12 lg:w-16 lg:h-16 bg-gray-800 rounded-full shadow-xl text-white ${animation} cursor-pointer flex items-center justify-center z-10`}>
      <Icon size={size} />
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-700 px-3 py-1 rounded-sm text-xs">
        {text}
        <div className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-gray-700"></div>
      </div>
    </div>
  );
};