import AOS from "aos";
import "aos/dist/aos.css";
import {
  CodeXml,
  Menu,
  X
} from "lucide-react";
import { lazy, Suspense, useEffect, useState } from "react";
import { Home } from "./components/sections/home";
import {
  navItems
} from "./utils/constants";

const About = lazy (() => import ("./components/sections/about"));

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      // once: true,
      offset: 100,
      easing: "ease-in-out",
    });

    const hash = window.location.hash.slice(1);
    if (hash && navItems.some((item) => item.id === hash)) {
      console.log("Scrolling to section:", hash);
      setActiveSection(hash);
      setTimeout(() => {
        scrollToSection(hash);
      }, 500);
    }
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    window.location.hash = id;
    setActiveSection(id);
  };

  return (
    <div className="min-h-screen bg-background ">
      {/* Header */}
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
      </nav>
      <main>
        {/* Home Section */}
        <Home />

        {/* About Section */}
        <Suspense fallback={<div>Loading...</div>}>
          <About />
        </Suspense>

      </main>
    </div>
  );
};

export default Portfolio;
