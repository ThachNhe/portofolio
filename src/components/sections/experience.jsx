import { SectionContainer, SectionHeader } from "../custom";
import { SectionCard } from ".";
import { experienceData } from "@/utils/constants";
import { useState } from "react";

export const Experience = () => {
   const [activeFilter, setActiveFilter] = useState("work");
   const [filteredProject, setFilteredProjects] = useState(
      experienceData.projects
   );

   const handleActiveFilter = (category) => {
      setActiveFilter(category);
      if (category === "all") {
         setFilteredProjects(experienceData.projects);
      } else {
         const filteredProjects = experienceData.projects.filter(
            (project) => project.category === category
         );
         setFilteredProjects(filteredProjects);
      }
   };

   return (
      <section className="min-h-screen bg-white pt-20 overflow-hidden" id="experiences" data-aos="fade-down" data-aos-duration="1000">
         <SectionContainer>
            <SectionHeader
               title="Experience"
               subtitle="Explore some of the works I've built — from slick frontend UIs, powerful backend APIs, to fullstack apps connected with real-time databases."
            />
            <SectionCard
               activeFilter={activeFilter}
               handleFilterChange={handleActiveFilter}
               filterCategories={experienceData.filterCategories}
               filteredProjects={filteredProject}
            />
         </SectionContainer>
      </section>
   )
}
export default Experience;