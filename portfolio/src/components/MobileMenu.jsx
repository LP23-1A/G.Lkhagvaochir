import { useTheme } from "next-themes";
import CloseIcon from "./CloseIcon";
import Layout from "./Layout";
import Moonicon from "./icon/MoonIcon";
import Sunicon from "./icon/SunIcon";

export default function MobileM(props) {
  const { theme, setTheme } = useTheme();
  const closeHandler = () => {
    props.setIsOpen(false);
  };

  const themeToggle = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };
  return (
    <Layout>
      <div className="w-screen h-screen top-0 left-0 absolute bg-[#00000090] flex justify-end">
        <div className="w-10/12 h-screen p-4 bg-white dark:bg-[black]">
          <div className="flex justify-between">
            <div className="text-black dark:text-[#F9FAFB]">Logo</div>
            <button onClick={closeHandler}>
              <CloseIcon />
            </button>
          </div>
          <hr className="mt-4" />
          <ul className="flex gap-6 flex-col items-start">
            {["Home", "About", "Testimonials", "Contact"].map((navItem) => {
              return (
                <li className="text-black">
                  <a className="dark:text-[#D1D5DB]" href="#">
                    {navItem}
                  </a>
                </li>
              );
            })}
          </ul>
          <hr className="mt-4" />
          <div className="py-4">
            <div className="flex justify-between">
              <p className="text-[#4B5563] dark:text-[#D1D5DB]">Switch theme</p>
              <button className="" onClick={themeToggle}>
                {theme == "dark" ? <Sunicon /> : <Moonicon />}
              </button>
            </div>

            <button className="mt-4 w-full bg-black text-white px-4 py-1.5 rounded-lg font-medium dark:text-[#111827] dark:bg-[white]">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
