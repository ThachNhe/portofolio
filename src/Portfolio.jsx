import AOS from "aos";
import "aos/dist/aos.css";
import { ChartColumnDecreasing, CodeXml, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { InfoBadge } from "./components/custom/Info-badge";
import { ProfileActionButton } from "./components/custom/profile-action-button";
import { SkillBadge } from "./components/custom/skill-badge";
import { SocialMedia } from "./components/custom/social-media";
import TypeWriter from "./components/custom/typewriter";
import {
  infoBadges,
  navItems,
  ProfileActionButtons,
  skillBadges,
  socialMedials,
  introCards,
  personalInfos
} from "./utils/constants";
import { SectionContainer } from "./components/custom/section-container";
import { SectionHeader } from "./components/custom/section-header";
import { IntroCard } from "./components/custom/intro-card";
import { PersonalInfoCard } from "./components/custom/personal-info-card";

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
        {/* Home Section */}
        <section
          id="home"
          className="min-h-screen bg-white shadow-lg overflow-hidden"
        >
          <SectionContainer>
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
                    <TypeWriter
                      words={[
                        "Fullstack Web Developer",
                        "MERN Stack Developer",
                      ]}
                    />
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
                    {socialMedials.map((socialMedia, index) => {
                      const { icon: Icon, link } = socialMedia;
                      return (
                        <SocialMedia key={index} icon={Icon} link={link} />
                      );
                    })}
                  </div>
                </div>

                <div
                  className="flex flex-col sm:flex-row gap-4"
                  data-aos-delay="600"
                  data-aos="fade-down"
                >
                  {ProfileActionButtons.map((button, index) => {
                    const { icon: Icon, size, title } = button;
                    return (
                      <ProfileActionButton
                        key={index}
                        icon={Icon}
                        size={size}
                        title={title}
                      />
                    );
                  })}
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
                  {infoBadges.map((infoBadge, index) => {
                    const { icon: Icon, title, subtitle } = infoBadge;
                    return (
                      <InfoBadge
                        key={index}
                        icon={Icon}
                        title={title}
                        subtitle={subtitle}
                      />
                    );
                  })}
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
                {skillBadges?.map((badge, index) => (
                  <SkillBadge
                    key={index}
                    icon={badge.icon}
                    text={badge.text}
                    size={badge.size}
                    position={badge.position}
                    animation={badge.animation}
                  />
                ))}
              </div>
            </div>
          </SectionContainer>
        </section>

        {/* About Section */}

        <section
          id="about"
          className="min-h-screen bg-white pt-20 overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="8000"
        >
          <SectionContainer>
            <SectionHeader
              title="About Me"
              subtitle="I am a passionate web developer with a knack for creating dynamic and responsive web applications."
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center min-h-[calc(100vh-5rem)]">
              <div className="flex items-center justify-center lg:justify-start">
                <img
                  src="https://thach-bucket110902.s3.ap-southeast-1.amazonaws.com/7a74fb22-637f-4000-b014-b20b0a1b24cc.jpg"
                  alt="About me"
                  className="w-96 h-96 object-cover max-w-md border-8 border-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 duration-300"
                />
              </div>
              <div className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {introCards.map((item, index) => {
                  return (
                    <IntroCard
                      key={index}
                      icon={item.icon}
                      size={item.size}
                      title={item.title}
                      desc={item.desc}
                    />
                  )
                })}

                {personalInfos.map((item, index) => {
                  return (
                    <PersonalInfoCard
                      key={index}
                      icon={item.icon}
                      size={item.size}
                      label={item.label}
                      value={item.value}
                    />
                  )
                })}
                </div>

                <div></div>
              </div>
            </div>
          </SectionContainer>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
