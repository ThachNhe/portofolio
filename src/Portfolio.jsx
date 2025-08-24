import { useState, useEffect } from "react";
import { navItems } from "./utils/constants";
import {
  Menu,
  X,
  CodeXml,
  Download,
  ChartColumnDecreasing,
  BriefcaseBusiness,
  FileJson,
  FolderKanban,
  GraduationCap,
  Mail,
  FileCode,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaFacebookF,
  FaHtml5,
  FaReact,
} from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
import TypeWriter from "./components/ui/typewriter";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setActiveSection(id);
  };

  return (
    <div className="min-h-screen bg-background ">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b shadow-lg">
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
      </header>
      <main>
        <section
          id="home"
          className="min-h-screen bg-white shadow-lg overflow-hidden pt-24"
        >
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-10 justify-center min-h-[calc(100vh-5rem)] py-12">
              <div className="flex flex-col gap-10 w-full flex-1">
                <div className="space-y-4">
                  <h1
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800"
                    data-aos-delay="400"
                    data-aos="fade-down"
                  >
                    Hi, I'm Thach
                    <div>Dinh 👋</div>
                  </h1>
                  <h2
                    className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800"
                    data-aos="fade-right"
                    data-aos-delay="600"
                  >
                    {/* Fullstack Web Developer */}
                    <TypeWriter words={["Fullstack Web Developer", "MERN Stack Developer"]} />
                  </h2>
                </div>
                <p
                  className="text-lg text-gray-800 leading-relaxed"
                  data-aos="fade-left"
                  data-aos-delay="650"
                >
                  I build modern, responsive web apps with clean UI and smooth
                  UX blending design and code to create experiences that feel
                  intuitive, fast, and delightful to use.
                </p>

                <div
                  className="flex items-center gap-4"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <span className="text-md font-semibold ">Follow me on:</span>
                  <div className="flex space-x-3">
                    <a
                      href="https://github.com/Hizkia178"
                      className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center "
                    >
                      <FaGithub className="h-4 w-4" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/hizkia-siahaan-59b003280/"
                      className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center "
                    >
                      <FaLinkedin className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center "
                    >
                      <FaFacebookF className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center "
                    >
                      <FaYoutube className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div
                  className="flex flex-col sm:flex-row gap-4"
                  data-aos-delay="600"
                  data-aos="fade-down"
                >
                  <div className="relative group">
                    <button className="inline-flex items-center w-full px-6 py-3 font-semibold rounded-lg hover:shadow-lg hover:-translate-y-1 text-white bg-gray-800 gap-2 duration-300 ">
                      <Download size={20} />
                      Explore My Project
                    </button>

                    <div className="absolute -top-10 left-1/2 bg-gray-700 -translate-x-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-3 py-1 text-sm rounded pointer-events-none whitespace-nowrap">
                      Explore My Project
                      <div className="absolute top-full left-1/2 border-4 border-transparent border-t-gray-800"></div>
                    </div>
                  </div>

                  <div className="relative group">
                    <button className="inline-flex items-center w-full px-6 py-3 font-semibold rounded-lg hover:shadow-lg hover:-translate-y-1 hover:bg-gray-800 hover:text-white gap-2 border-2 border-gray-800 duration-300">
                      <Mail size={20} />
                      <span>Download My CV</span>
                    </button>

                    <div className="absolute -top-10 left-1/2 bg-gray-700 text-white opacity-0 group-hover:opacity-100 -translate-x-1/2 text-sm whitespace-nowrap rounded px-3 py-1">
                      Download My CV
                      <div className="absolute left-1/2 border-4 border-transparent border-t-gray-800 top-full"></div>
                    </div>
                  </div>
                </div>
                
                {/* Quick stat */}
                <h4
                  className="flex gap-2 font-semibold items-center"
                  data-aos-delay="500"
                  data-aos="fade-down"
                >
                  <ChartColumnDecreasing size={18} />
                  <span>Quick stats:</span>
                </h4>

                <div
                  className="grid grid-cols-2 lg:grid-cols-4 gap-4"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <div
                    className="border border-gray-800 px-2 py-2 rounded-2xl
                   bg-gray-800 text-white flex items-center gap-2 hover:-translate-y-1 duration-300 shadow-lg"
                  >
                    <BriefcaseBusiness size={15} className="flex-shrink-0"/>
                    <div className="flex flex-col text-sm">
                      <span className="font-semibold">1+ Year</span>
                      <span className="text-xs">Experience</span>
                    </div>
                  </div>

                  <div className="border border-gray-800 px-2 py-2 rounded-2xl text-white bg-gray-800 flex items-center gap-1 hover:-translate-y-1 duration-300 shadow-lg ">
                    <FileJson size={15} className="flex-shrink-0" />
                    <div className="flex flex-col text-sm">
                      <span className="font-semibold">JavaScript</span>
                      <span className="text-xs whitespace-nowrap">
                        Main language
                      </span>
                    </div>
                  </div>
                  <div
                    className="border border-gray-800 bg-gray-800 px-2 py-2  rounded-2xl text-white items-center
                  gap-1 hover:-translate-y-1 duration-300 shadow-lg flex
                  "
                  >
                    <FolderKanban size={15} className="flex-shrink-0" />
                    <div className="flex flex-col text-sm">
                      <span className="font-semibold">2 projects</span>
                      <span className="text-xs whitespace-nowrap">
                        Total project
                      </span>
                    </div>
                  </div>
                  <div className="border border-gray-800 bg-gray-800 px-2 py-2 rounded-2xl text-white hover:-translate-y-1 duration-300 shadow-lg flex items-center gap-1">
                    <GraduationCap size={15} className="flex-shrink-0" />
                    <div className="flex flex-col text-sm">
                      <span className="font-semibold">3.63/4.00</span>
                      <span className="text-xs">GPA </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="relative w-full flex justify-center flex-1"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="relative z-20">
                  <img
                    src="https://thach-bucket110902.s3.ap-southeast-1.amazonaws.com/7a74fb22-637f-4000-b014-b20b0a1b24cc.jpg"
                    alt="van thach portfolio"
                    className="w-64 h-64 sm:h-80 sm:w-80 lg:w-96 lg:h-96 rounded-full shadow-2xl border-8 border-white hover:-translate-y-3 duration-300 object-cover"
                  />
                </div>
                <div className="group absolute left-10 lg:left-8 w-12 h-12 lg:w-16 lg:h-16 bg-gray-800 rounded-full shadow-xl text-white animate-float cursor-pointer flex items-center justify-center z-10">
                  <FaHtml5 size={20} />
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-700 px-3 py-1 rounded-sm text-xs">
                    HTML
                    <div className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                  </div>
                </div>

                <div className="group absolute right-8 w-12 h-12 lg:w-16 lg:h-16 bg-gray-800 rounded-full shadow-xl text-white animate-float cursor-pointer flex items-center justify-center">
                  <IoLogoCss3 size={19} />
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-700 px-3 py-1 rounded-sm text-xs">
                    CSS
                    <div className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                  </div>
                </div>

                <div className="group absolute left-8 bottom-0 w-12 h-12 lg:w-16 lg:h-16 bg-gray-800 rounded-full shadow-xl text-white animate-float cursor-pointer flex items-center justify-center">
                  <IoLogoJavascript size={19} />
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-700 px-3 py-1 rounded-sm text-xs">
                    Javascript
                    <div className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                  </div>
                </div>

                <div className="group absolute bottom-0 right-10 lg:right-8 w-12 h-12 lg:w-16 lg:h-16 bg-gray-800 rounded-full shadow-xl text-white animate-float-fast cursor-pointer flex items-center justify-center">
                  <FaReact size={19} />
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-700 px-3 py-1 rounded-sm text-xs">
                    React
                    <div className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
