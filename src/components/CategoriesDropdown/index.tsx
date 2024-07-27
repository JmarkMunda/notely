import { Select, SelectItem } from "@nextui-org/select";
import { Props } from "./types";

const CategoriesDropdown = ({
  label,
  categories,
  selectedCategory,
  onItemClick,
  ...props
}: Props) => {
  return (
    <Select
      label={label}
      variant="bordered"
      selectedKeys={[selectedCategory]}
      {...props}>
      {categories.map((category) => (
        <SelectItem
          key={category.key}
          onClick={() => onItemClick(category.key)}>
          {category.label}
        </SelectItem>
      ))}
    </Select>
  );
};

export default CategoriesDropdown;
