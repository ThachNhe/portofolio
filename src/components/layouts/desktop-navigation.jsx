import { navItems } from "../../utils/constants";

export const DesktopNavigation = ({activeSection, scrollToSection}) => {
  return (
    <nav className="hidden md:inline-flex space-x-8">
      {navItems.map((item) => {
        return (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`transition-colors hover:text-primary ${
              activeSection === item.id ? "text-white font-medium" : ""
            }`}
          >
            <div
              className={`flex items-center gap-2 mr-2 px-2 py-2 rounded-lg hover:text-blue-500
               ${
                  activeSection === item.id
                     ? "bg-gray-800 text-white hover:text-white"
                     : ""
               }`}
            >
              {item.ico} <span>{item.label}</span>
            </div>
          </button>
        );
      })}
    </nav>
  );
};
