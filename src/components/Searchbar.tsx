import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <>
      <div className="w-1/3 p-2 bg-white rounded-full shadow-sm flex items-center flex-col">
        <div className="flex flex-row w-full items-center">
          <input
            type="text"
            className="outline-none w-9/10 text-lg p-1 placeholder:text-gray-600 mx-2"
            placeholder="Search for some places...."
          />
          <div className="cursor-pointer">
            <IoSearch className="text-2xl" />
          </div>
        </div>
        <div className="bg-black"></div>
      </div>
    </>
  );
};
export default SearchBar;
