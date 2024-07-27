import { Button, Input } from "@nextui-org/react";
import { IoSearch } from "react-icons/io5";
import { Props } from "./types";

const SearchBar = ({
  searchValue,
  onSearchChange,
  handleSearchSubmit,
  ...props
}: Props) => {
  return (
    <form
      onSubmit={handleSearchSubmit}
      className="flex gap-2 items-center justify-center">
      <Input value={searchValue} onChange={onSearchChange} {...props} />
      <Button color="primary" type="submit" disabled={!searchValue}>
        <IoSearch />
      </Button>
    </form>
  );
};

export default SearchBar;
