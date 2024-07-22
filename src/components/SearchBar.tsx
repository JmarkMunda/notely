import { Input, InputProps } from "@nextui-org/react";

type Props = {
  searchValue: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & InputProps;

const SearchBar = ({ searchValue, onSearchChange, ...props }: Props) => {
  return (
    <div className="flex gap-2 items-center justify-center">
      <Input value={searchValue} onChange={onSearchChange} {...props} />
    </div>
  );
};

export default SearchBar;
