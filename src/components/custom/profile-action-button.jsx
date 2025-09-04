import { ToolTip } from "./tooltip";

export const ProfileActionButton = ({ icon: Icon, size, title, onClick }) => {
  return (
    <div className="relative group">
      <button className="inline-flex items-center w-full px-6 py-3 font-semibold rounded-lg hover:shadow-lg hover:-translate-y-1 text-white bg-gray-800 gap-2 duration-300 ">
        <Icon size={size} />
        {title}
      </button>

      <ToolTip title={title} />
    </div>
  );
};
