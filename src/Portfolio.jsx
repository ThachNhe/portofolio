import { useState } from "react";
import { navItems } from "./utils/constants";
import { Menu, X, CodeXml } from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if(element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }

    setActiveSection(id);
  }

  return (
    <div className="min-h-screen bg-background ">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b shadow-lg">
        <div className="container px-4 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <div className="font-bold text-xl">
              <span className="flex gap-2 items-center">
                <CodeXml size={25} />
                Thach Portfolio
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
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
                       activeSection === item.id ? "bg-gray-800 text-white hover:text-white" : ""
                     }`}
                    >
                      {item.ico} <span>{item.label}</span>
                    </div>
                  </button>
                );
              })}
            </nav>

            <button
              className="md:hidden"
              onClick={() => setIsOpenMenu(!isOpenMenu)}
            ></button>

            {/* Mobile Navigation */}
            <nav className="md:hidden py-4 border-t">
              {isOpenMenu ? <X size={24} /> : <Menu size={24} />}
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Portfolio;
