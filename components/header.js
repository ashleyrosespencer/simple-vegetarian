import { ImFacebook, ImTwitter, ImInstagram, ImSearch } from "react-icons/im";
import { useRouter } from "next/router";
import Navbar from "../components/navbar";

export default function Header() {
  const router = useRouter();

  const handleSearch = () => {
    const query = document.getElementById("search-input").value;
    router.push(`/search?query=${query}`);
  };

  return (
    <header className="bg-gray-100 py-1">
      <div className="container mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3 px-5">
        <div className="md:flex-none w-full sm:w-96 order-2 sm:order-1 flex items-center justify-center py-2 sm:py-0 relative">
          <div className="relative flex items-center">
            <input
              type="text"
              id="search-input"
              className="input-text pr-10"
              placeholder="Search recipes.."
            />
            <button className="absolute right-2 focus:outline-none" onClick={handleSearch}>
              <ImSearch className="text-gray-500 transition-colors duration-300 hover:text-gray-700" />
            </button>
          </div>
        </div>
        <div className="shrink w-80 sm:w-auto sm:order-2 flex items-center justify-center">
          <img src="/images/logo.png" alt="Logo" className="h-20" />
        </div>
        <div className="w-full sm:w-96 order-3 flex justify-center">
          <div className="flex gap-6">
            <a className="text-2xl cursor-pointer text-gray-500 transition-colors duration-300 hover:text-gray-700"><ImInstagram /></a>
            <a className="text-2xl cursor-pointer text-gray-500 transition-colors duration-300 hover:text-gray-700"><ImFacebook /></a>
            <a className="text-2xl cursor-pointer text-gray-500 transition-colors duration-300 hover:text-gray-700"><ImTwitter /></a>
          </div>
        </div>
      </div>
      <Navbar />
    </header>
  );
}
