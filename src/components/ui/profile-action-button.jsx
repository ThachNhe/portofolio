export const ProfileActionButton = ({ icon: Icon, size, title, onClick }) => {
  return (
    <div className="relative group">
      <button className="inline-flex items-center w-full px-6 py-3 font-semibold rounded-lg hover:shadow-lg hover:-translate-y-1 text-white bg-gray-800 gap-2 duration-300 ">
        <Icon size={size} />
        {title}
      </button>

      <div className="absolute -top-10 left-1/2 bg-gray-700 -translate-x-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-3 py-1 text-sm rounded pointer-events-none whitespace-nowrap">
        {title}
        <div className="absolute top-full left-1/2 border-4 border-transparent border-t-gray-800"></div>
      </div>
    </div>
  );
};
