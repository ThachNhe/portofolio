export const ToolTip = ({ title }) => {
  return (
    <div className="absolute -top-10 left-1/2 bg-gray-700 -translate-x-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-3 py-1 text-sm rounded pointer-events-none whitespace-nowrap">
      {title}
      <div className="absolute top-full left-1/2 border-4 border-transparent border-t-gray-800"></div>
    </div>
  );
};
 
