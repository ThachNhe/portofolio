import { CodeXml, Menu, X } from "lucide-react";
import { DesktopNavigation } from "./desktop-navigation";
import { MobileNavigation } from "./mobile-navigation";

export const Header = ({
  activeSection,
  scrollToSection,
  isOpenMenu,
  setIsOpenMenu
}) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b shadow-lg">
      <div className="container px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <div className="font-bold text-xl">
            <span className="flex gap-2 items-center">
              <CodeXml size={25} />
              Thach Portfolio
            </span>
          </div>

          {/* Desktop Navigation */}
          <DesktopNavigation
            activeSection={activeSection}
            scrollToSection={scrollToSection}
          />

          <button
            className="md:hidden"
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          >
            <Menu size={25} />
          </button>

          {/* Mobile Navigation */}
          <MobileNavigation
            activeSection={activeSection}
            scrollToSection={scrollToSection}
            isOpenMenu={isOpenMenu}
            setIsOpenMenu={setIsOpenMenu}
          />
        </div>
      </div>
    </nav>
  );
};
