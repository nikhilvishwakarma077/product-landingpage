import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
        setOpen(false);
    };

    return (
        <nav className="fixed top-0 w-full z-50 bg-[#11222B]/80 backdrop-blur-md border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">

                <div className="flex items-center gap-2 hover:cursor-pointer">
                    <div className="w-8 h-8 bg-cyan-400 rounded-lg flex items-center justify-center transform rotate-45">
                        <div className="w-4 h-4 bg-slate-900 transform -rotate-45"></div>
                    </div>
                    <span className="text-white text-2xl font-bold">SonicPro</span>
                </div>

                <div className="hidden md:flex items-center gap-10">
                    <ul className="flex gap-8 text-sm text-gray-300">
                        <li
                            onClick={() => scrollTo("features")}
                            className="cursor-pointer hover:text-white transition"
                        >
                            Features
                        </li>
                        <li
                            onClick={() => scrollTo("reviews")}
                            className="cursor-pointer hover:text-white transition"
                        >
                            Reviews
                        </li>
                        <li
                            onClick={() => scrollTo("faq")}
                            className="cursor-pointer hover:text-white transition"
                        >
                            FAQ
                        </li>
                    </ul>

                    <button
                        onClick={() => {
                            navigate("/order")
                        }}
                        className="bg-[#2BADEE] hover:bg-[#1388c3] text-white px-5 py-2 rounded-full font-semibold transition active:scale-95 hover:cursor-pointer"
                    >
                        Buy Now
                    </button>
                </div>

                <button
                    className="md:hidden text-2xl text-white "
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
            </div>

            {open && (
                <div className="md:hidden bg-[#0E1C24] border-t border-slate-800 px-5 py-6 space-y-5">
                    <ul className="flex flex-col gap-4 text-gray-300">
                        <li onClick={() => scrollTo("features")} className="hover:text-white">
                            Features
                        </li>
                        <li onClick={() => scrollTo("reviews")} className="hover:text-white">
                            Reviews
                        </li>
                        <li onClick={() => scrollTo("faq")} className="hover:text-white">
                            FAQ
                        </li>
                    </ul>

                    <button
                        onClick={() => scrollTo("pricing")}
                        className="w-full bg-[#2BADEE] hover:bg-[#1388c3] text-white py-3 rounded-lg font-semibold transition"
                    >
                        Buy Now
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
