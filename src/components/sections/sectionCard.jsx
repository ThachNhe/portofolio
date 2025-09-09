import { CategoryFilterItem, ProjectCard } from "../custom";

export const SectionCard = ({activeFilter, handleFilterChange, filterCategories, filteredProjects }) => {
  return (
    <>
      <div className="flex items-center justify-center gap-4 flex-wrap mb-8">
        {filterCategories.map((item, index) => {
          return (
            <CategoryFilterItem
              categoryData={item}
              key={index}
              activeFilter={activeFilter}
              onFilterChange={handleFilterChange}
            />
          );
        })}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProjects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </>
  );
};
