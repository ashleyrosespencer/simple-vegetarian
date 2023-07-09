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
        <div className="flex items-center justify-center py-2 sm:py-0 relative sm:w-96">
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
        <div className="flex items-center justify-center px-4 sm:px-0">
          <img src="/images/logo.png" alt="Logo" className="h-16 sm:h-20" />
        </div>
        <div className="flex justify-center sm:w-96 sm:pl-4">
          <div className="flex gap-4 sm:gap-6">
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

