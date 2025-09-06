import { ChevronRight } from "lucide-react";

export const MobileNavItems = ({
  index,
  id,
  ico: Icon,
  label,
  activeSection,
  scrollToSection,
  isOpenMenu,
  setIsOpenMenu,
}) => {
  return (
    <li
      className={`transform transition-all duration-300 hover:text-blue-600 mb-2 rounded-md font-semibold text-lg
    ${
      activeSection === id
        ? "bg-gray-800 text-white shadow-lg"
        : "text-gray-700"
    }

    ${isOpenMenu ? "translate-x-0 opacity-100" : "translate-x-9 opacity-0"}
    `}
      style={{ transitionDelay: `${index * 85}ms` }}
    >
      <a
        href={`#${id}`}
        className="flex items-center justify-between px-4 py-3"
        onClick={() => {
          scrollToSection(id);
          setIsOpenMenu(false);
        }}
      >
        <div className="flex items-center gap-2  font-semibold">
          <Icon size={18} />
          {label}
        </div>
        <ChevronRight size={18} />
      </a>
    </li>
  );
};
