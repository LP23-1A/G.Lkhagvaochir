import { useTheme } from "next-themes";
import MobileR from "./Mobile";
import Sunicon from "./icon/SunIcon";
import Moonicon from "./icon/MoonIcon";
import Layout from "./Layout";
import { useState } from "react";
import MobileM from "./MobileMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const themeToggle = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };
  const menuHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Layout className=" m-auto max-w-[1440px] py-4 px-20 text-center flex justify-center items-center justify-between">
      <div>Logo</div>
      <div className="headerConText flex gap-6 items-center">
        <ul className="headerListContainer flex gap-6 max-sm:hidden">
          {["Home", "About", "Testimonials", "Contact"].map((navItem) => {
            return (
              <li className="listStyle">
                <a className="dark:text-[#D1D5DB]" href="#">
                  {navItem}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="flex gap-4">
          <button className="max-sm:hidden" onClick={themeToggle}>
            {theme == "dark" ? <Sunicon /> : <Moonicon />}
          </button>
          <button className="hidden max-sm:flex" onClick={menuHandler}>
            <MobileR />
          </button>
          {isOpen ? <MobileM setIsOpen={setIsOpen} /> : null}
          <button className="download rounded-xl bg-black text-white py-1.5 px-4 max-sm:hidden dark:bg-[white] dark:text-[black]">
            Download CV
          </button>
        </div>
      </div>
    </Layout>
  );
}
