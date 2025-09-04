export const InfoBadge = ({ icon: Icon, title, subtitle }) => {
  return (
    <div
      className="border border-gray-800 px-2 py-1 lg:py-2 rounded-2xl
      bg-gray-800 text-white flex items-center gap-2 hover:-translate-y-1 duration-300 shadow-lg"
    >
      <Icon size={15} className="flex-shrink-0" />
      <div className="flex flex-col text-sm leading-tight">
        <span className="font-semibold">{title}</span>
        <span className="text-xs">{subtitle}</span>
      </div>
    </div>
  );
};
