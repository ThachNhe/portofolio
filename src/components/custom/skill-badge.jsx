import { ToolTip } from "./tooltip";

export const SkillBadge = ({ icon: Icon, text, size, position = "", animation = "animate-float" }) => {
  return (
    <div className={`group absolute ${position} w-12 h-12 lg:w-16 lg:h-16 bg-gray-800 rounded-full shadow-xl text-white ${animation} cursor-pointer flex items-center justify-center z-10`}>
      <Icon size={size} />
      <ToolTip title={text} />
    </div>
  );
};