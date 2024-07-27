import { Chip } from "@nextui-org/chip";
import { Props } from "./types";

const Categories = ({ categories, selectedCategory, onItemClick }: Props) => {
  return (
    <div className="flex flex-row items-center gap-2 py-4 overflow-auto">
      <Chip
        variant={!selectedCategory ? "solid" : "bordered"}
        className={`cursor-pointer text-gray-500 ${
          !selectedCategory && "bg-blue-500 text-white"
        }`}
        onClick={() => onItemClick("")}>
        All
      </Chip>
      {categories.map((category) => (
        <Chip
          variant={selectedCategory === category.key ? "solid" : "bordered"}
          key={category.key}
          onClick={() => onItemClick(category.key)}
          className={`cursor-pointer text-gray-500 ${
            selectedCategory === category.key && `${category.color} text-white`
          }`}>
          {category.label}
        </Chip>
      ))}
    </div>
  );
};

export default Categories;
