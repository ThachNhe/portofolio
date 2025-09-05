import "aos/dist/aos.css";
import {
   ChartColumnDecreasing
} from "lucide-react";
import {
   infoBadges,
   ProfileActionButtons,
   skillBadges,
   socialMedials
} from "../../utils/constants";
import { InfoBadge } from "../custom/info-badge";
import { ProfileActionButton } from "../custom/profile-action-button";
import { SectionContainer } from "../custom/section-container";
import { SkillBadge } from "../custom/skill-badge";
import { SocialMedia } from "../custom/social-media";
import TypeWriter from "../custom/typewriter";

export const Home = () => {
  return (
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
                  words={["Fullstack Web Developer", "MERN Stack Developer"]}
                />
              </h2>
            </div>
            <p
              className="text-lg text-gray-800 leading-relaxed"
              data-aos="fade-left"
              data-aos-delay="650"
            >
              I build modern, responsive web apps with clean UI and smooth UX
              blending design and code to create experiences that feel
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
                  return <SocialMedia key={index} icon={Icon} link={link} />;
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
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
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
                src="https://thach-bucket110902.s3.ap-southeast-1.amazonaws.com/nhai.jpg"
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
  );
};
