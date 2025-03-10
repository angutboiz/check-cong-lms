import { useEffect, useState } from "react";
import logo from "/logo.svg";
import { Calendar, Moon, Sun } from "lucide-react";
export default function Header() {
    const [isDark, setIsDark] = useState(() => {
        const savedTheme = localStorage.getItem("dark");
        return savedTheme ? JSON.parse(savedTheme) : false;
    });

    useEffect(() => {
        // Lưu trạng thái theme vào localStorage
        localStorage.setItem("dark", JSON.stringify(isDark));

        // Cập nhật class dark cho root element
        const root = document.documentElement;
        if (isDark) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <div className="dark:bg-slate-800 dark:text-white w-full h-13 shadow-md border-b border-b-white/10  flex items-center justify-center px-5 md:px-0">
            <div className="w-full md:w-[800px] lg:w-[1000px] xl:w-[1200px] flex justify-between items-center">
                <a href="/">
                    <img src={logo} alt="" className="w-20 h-10" />
                </a>
                <div className="flex items-center gap-3">
                    <a href="/" className="flex items-center gap-1">
                        <Calendar size={18} /> Công tháng 2
                    </a>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                        <button onClick={toggleTheme} className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full">
                            {isDark ? <Sun size={20} className="cursor-pointer" /> : <Moon size={20} className="cursor-pointer" />}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
