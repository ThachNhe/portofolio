export const IntroCard = ({ icon: Icon, size, title, desc }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center">
          <Icon size={size} className="text-white" />
        </div>
        <span className="mt-2 text-xl font-semibold text-gray-800">
          {title}
        </span>
      </div>
      <p className="text-gray-600">
       {desc}
      </p>
    </div>
  );
};
