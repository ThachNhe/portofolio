import "aos/dist/aos.css";
import { CircleAlert, Download } from "lucide-react";
import { introCards, personalInfos } from "../../utils/constants";
import {
  IntroCard,
  PersonalInfoCard,
  SectionContainer,
  ToolTip,
  SectionHeader,
} from "../custom";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-white pt-20 overflow-hidden"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <SectionContainer>
        <SectionHeader
          title="About Me"
          subtitle="I am a passionate web developer with a knack for creating dynamic and responsive web applications."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center min-h-[calc(100vh-5rem)]">
          <div
            className="flex items-center justify-center lg:justify-start"
            data-aos="fade-right"
            data-aos-delay="600"
          >
            <img
              src="https://thach-bucket110902.s3.ap-southeast-1.amazonaws.com/nhai.jpg"
              alt="About me"
              className="w-96 h-96 object-cover max-w-md border-8 border-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 duration-300"
            />
          </div>
          <div className="w-full">
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              {introCards.map((item, index) => {
                return (
                  <IntroCard
                    key={index}
                    icon={item.icon}
                    size={item.size}
                    title={item.title}
                    desc={item.desc}
                  />
                );
              })}
            </div>
            <div
              className="flex items-center gap-4 mb-4"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              <CircleAlert size={23} />
              <span className="text-2xl text-gray-800 font-semibold">
                Personal Info
              </span>
            </div>

            <ul
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-lg mx-auto"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              {personalInfos.map((item, index) => {
                return (
                  <PersonalInfoCard
                    key={index}
                    icon={item.icon}
                    size={item.size}
                    label={item.label}
                    value={item.value}
                  />
                );
              })}
            </ul>

            <button
              className="relative group inline-flex items-center gap-2 border-2 border-gray-800 px-6 py-2 rounded-lg hover:text-white hover:bg-gray-800 hover:-translate-y-1 duration-300 transition-all"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              <Download />
              <span className="font-semibold">Download My Resume</span>
              <ToolTip title="Download My Resume" />
            </button>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default About;