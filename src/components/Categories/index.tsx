import { Chip } from "@nextui-org/chip";
import { Props } from "./types";

const Categories = ({ categories, selectedCategory, onItemClick }: Props) => {
  return (
    <div className="flex flex-row items-center gap-2 overflow-auto">
      <Chip
        variant={selectedCategory === "All" ? "solid" : "bordered"}
        className={`cursor-pointer text-gray-500 ${
          selectedCategory === "All" && "bg-blue-500 text-white"
        }`}
        onClick={() => onItemClick("All")}>
        All
      </Chip>
      {categories.map((category) => (
        <Chip
          variant={selectedCategory === category.label ? "solid" : "bordered"}
          key={category.key}
          onClick={() => onItemClick(category.label)}
          className={`cursor-pointer text-gray-500 ${
            selectedCategory === category.label &&
            `${category.color} text-white`
          }`}>
          {category.label}
        </Chip>
      ))}
    </div>
  );
};

export default Categories;
