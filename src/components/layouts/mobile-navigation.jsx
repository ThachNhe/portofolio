import { CodeXml, X } from "lucide-react";
import { navItems } from "../../utils/constants";
import { MobileNavItems } from "../custom/mobile-nav-items";

export const MobileNavigation = ({
  activeSection,
  scrollToSection,
  isOpenMenu,
  setIsOpenMenu,
}) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full min-h-screen bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden z-40 flex flex-col w-72
      ${isOpenMenu ? "translate-x-0" : "translate-x-full"}
      `}
    >
      <div className="flex items-center justify-between gap-4 border-b mb-4 p-6">
        <div className="flex items-center gap-2">
          <CodeXml size={23} />
          <span className="font-bold text-lg">Navigation</span>
        </div>
        <button className="p-2">
          <X size={20} onClick={() => setIsOpenMenu(false)} />
        </button>
      </div>
      <div className="flex-1 px-6">
        <ul className="flex flex-col py-6 gap-1">
          {navItems.map((item, index) => {
            const { id, ico: Icon, label } = item;
            return (
              <MobileNavItems
                index={index}
                key={id}
                id={id}
                ico={Icon}
                label={label}
                activeSection={activeSection}
                scrollToSection={scrollToSection}
                isOpenMenu={isOpenMenu}
                setIsOpenMenu={setIsOpenMenu}
              />
            );
          })}
        </ul>
      </div>
      <div className="border-t p-6 flex items-center justify-center text-sm text-gray-500 text-center">
        © 2023 thachxx02. All rights reserved.
      </div>
    </div>
  );
};
