import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function FooterDemo() {
    const handleContactClick = () => {
        window.location.href = 'mailto:yongchunhao2003@gmail.com';
    };

    return (
        <footer className="bg-gray-900">
            <div className="container flex flex-wrap px-4 py-4 mx-auto items-center justify-between lg:items-start">
                <div className="w-full lg:w-1/3 mx-auto text-center lg:text-left pr-5">
                    <Link to={"/"} className="text-2xl text-white">
                        unFeathered
                    </Link>
                    <p className="mt-2 text-xs text-justify text-gray-400">
                        Welcome to unFeathered, your ultimate destination for navigating the complex world of finance with confidence. Explore a wealth of educational content, expert tips, and real-world case studies to enhance your financial literacy and protect your assets. Join our community today and embark on a journey towards financial empowerment and security.
                    </p>
                    <div className="flex mt-4 justify-center lg:justify-start">
                        <p className="text-gray-300 mr-2 mt-2">Have a question?</p>
                        <Button variant="destructive" onClick={handleContactClick}>Contact us!</Button>
                    </div>
                </div>
                <div className="w-full lg:w-1/3 mt-4 lg:mt-0 text-center ">
                    <h2 className="mb-2 font-bold tracking-widest text-gray-100">
                        Readings
                    </h2>
                    <ul className="mb-8 space-y-2 text-sm list-none">
                        <li>
                            <Link to={"/"} className="text-gray-300">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to={"/news"} className="text-gray-300">
                                News
                            </Link>
                        </li>
                        <li>
                            <Link to={"/knowledge-hub"} className="text-gray-300">
                                Knowledge Hub
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="w-full lg:w-1/3 mt-4 lg:mt-0 text-center">
                    <h2 className="mb-2 font-bold tracking-widest text-gray-100">
                        Self-Assessment
                    </h2>
                    <ul className="mb-8 space-y-2 text-sm list-none">
                        <li>
                            <Link to={"/self-assessment"} className="text-gray-300">
                                Investor Tips
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-center">
                <p className="text-center text-white pb-2">
                    @2024 All rights reserved&copy;unFeathered
                </p>
            </div>
        </footer>
    );
}
