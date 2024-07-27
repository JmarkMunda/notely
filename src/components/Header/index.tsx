import { Props } from "./types";

const Header = ({ title, subtitle }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default Header;
