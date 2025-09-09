import { projectData } from "@/utils/constants";
import { useState } from "react";
import { SectionCard } from ".";
import { SectionContainer, SectionHeader } from "../custom";
export const Project = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(
    projectData.projects
  );

  const handleFilterChange = (category) => {
    setActiveFilter(category);
    if (category === "all") {
      setFilteredProjects(projectData.projects);
    } else {
      const filteredProjects = projectData.projects.filter(
        (project) => project.category === category
      );
      setFilteredProjects(filteredProjects);
    }
  };

  return (
    <section
      id="projects"
      className="min-h-screen bg-white pt-20 overflow-hidden"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <SectionContainer>
        <SectionHeader
          title="Projects"
          subtitle="Explore some of the works I've built — from slick frontend UIs, powerful backend APIs, to fullstack apps connected with real-time databases."
        />
        <SectionCard
          activeFilter={activeFilter}
          handleFilterChange={handleFilterChange}
          filterCategories={projectData.filterCategories}
          filteredProjects={filteredProjects}
        />
      </SectionContainer>
    </section>
  );
};
export default Project;
