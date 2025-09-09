import AOS from "aos";
import "aos/dist/aos.css";
import { lazy, Suspense, useEffect, useState } from "react";
import { Header } from "./components/layouts";
import { Home } from "./components/sections/home";
import { navItems } from "./utils/constants";
import { SectionLoader } from "./components/custom";

const About = lazy(() => import("./components/sections/about"));
const Project = lazy(() => import("./components/sections/project"));

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
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
      {/* Nav */}
      <Header
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isOpenMenu={isOpenMenu}
        setIsOpenMenu={setIsOpenMenu}
      />
      <main>
        {/* Home Section */}
        <Home />
        {/* About Section */}
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Project />
        </Suspense>
      </main>
    </div>
  );
};

export default Portfolio;
