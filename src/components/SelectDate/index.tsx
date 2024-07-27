import { Select, SelectItem } from "@nextui-org/select";
import { Props } from "./types";

const SelectDate = ({ sortBy, handleSortChange }: Props) => {
  return (
    <Select
      label="Sory by date"
      className="max-w-40 mt-4 self-end sm:mt-0 "
      selectedKeys={[sortBy]}>
      <SelectItem key="desc" onClick={() => handleSortChange("desc")}>
        Newest
      </SelectItem>
      <SelectItem key="asc" onClick={() => handleSortChange("asc")}>
        Oldest
      </SelectItem>
    </Select>
  );
};

export default SelectDate;
