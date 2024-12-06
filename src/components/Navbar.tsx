import Auth from "./Auth";
import SearchBar from "./Searchbar";
const Navbar = () => {
  return (
    <nav className="absolute top-0 right-0 w-full p-5 z-10 bg-transparent flex items-center justify-between">
      <SearchBar />
      <Auth />
    </nav>
  );
};
export default Navbar;
