import classNames from "classnames";
import { FC } from "react";

interface SearchInputProps {
  value: string;
  setValue: (value: string) => void;
}

const SearchInput: FC<SearchInputProps> = (props) => {
  return (
    <div className="w-5/6 h-14 flex flex-row justify-center">
      <input
        className={classNames(
          "h-full border-normal rounded-r-md bg-inherit px-3",
          "text-normal text-primary-light",
          "w-3/4 ",
          "border-primary-dark focus:border-primary-light focus:outline-none focus:ring-0",
          "transition-colors duration-500"
        )}
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
      />
      <button
        className={classNames(
          "w-1/4 h-full bg-primary-dark rounded-l-md",
          "text-primary-light text-normal"
        )}
      >
        جستوجو
      </button>
    </div>
  );
};

export default SearchInput;
