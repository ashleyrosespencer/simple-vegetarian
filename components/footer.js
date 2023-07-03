import { ImFacebook, ImTwitter, ImInstagram } from "react-icons/im";

export default function footer() {
    return (
        <footer className="bg-gray-100">
            <div className="container mx-auto flex justify-center py-6">
                <div className="py-5">
                    <div className="flex gap-6 justify-center">
                        <a className="text-2xl cursor-pointer text-gray-500 transition-colors duration-300 hover:text-gray-700"><ImInstagram /></a>
                        <a className="text-2xl cursor-pointer text-gray-500 transition-colors duration-300 hover:text-gray-700"><ImFacebook /></a>
                        <a className="text-2xl cursor-pointer text-gray-500 transition-colors duration-300 hover:text-gray-700"><ImTwitter /></a>
                    </div>
                    <p className="py-5 text-gray-400">&copy; {new Date().getFullYear()} Simple Vegetarian. All rights reserved.</p>
                    <p className="text-gray-400 text-center">Terms & Conditions</p>
                </div>
            </div>

        </footer>
    )
}