import { Props } from "./types";

const Fab = ({ title, onClick }: Props) => {
  return (
    <div className="fixed bottom-6 right-6 lg:bottom-14 lg:right-14 z-50">
      <button
        title={title}
        className="group cursor-pointer outline-none hover:rotate-90 duration-300"
        onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64px"
          height="64px"
          viewBox="0 0 24 24"
          className="stroke-blue-800 fill-none group-hover:fill-blue-300 group-active:stroke-blue-300 group-active:fill-blue-600 group-active:duration-0 duration-300">
          <path
            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
            stroke-width="1.5"></path>
          <path d="M8 12H16" stroke-width="1.5"></path>
          <path d="M12 16V8" stroke-width="1.5"></path>
        </svg>
      </button>
    </div>
  );
};

export default Fab;
