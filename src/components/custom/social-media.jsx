export const SocialMedia = ({ icon: Icon, link }) => {
  return (
    <a
      href={`${link}`}
      className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center "
    >
      <Icon className="h-4 w-4" />
    </a>
  );
};
