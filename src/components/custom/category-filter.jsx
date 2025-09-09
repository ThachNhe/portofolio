export const CategoryFilterItem = ({ categoryData, activeFilter, onFilterChange }) => {
  const { id, label, icon: Icon } = categoryData;
  return (
    <div
      className={`flex items-center gap-2 border-2 px-5 py-3 rounded-md border-none shadow-md hover:shadow-lg ${
        activeFilter === id
          ? "bg-gray-800 text-white shadow-lg"
          : "bg-white text-gray-800"
      }`}
      onClick={() => onFilterChange(id)}
      style={{ cursor: "pointer" }}
    >
      <Icon size={17} />
      <span className="font-medium text-sm">{label}</span>
    </div>
  );
};