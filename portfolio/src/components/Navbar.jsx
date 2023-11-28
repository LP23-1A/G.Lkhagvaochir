import MobileR from "./Mobile";
import ThemeIcon from "./icon/Themicon";

export default function Navbar() {
  return (
    <header className=" m-auto max-w-[1440px] py-4 px-20 text-center flex justify-center items-center justify-between">
      <div>Logo</div>
      <div className="headerConText flex gap-6 items-center">
        <ul className="headerListContainer flex gap-6 max-sm:hidden">
          {["Home", "About", "Testimonials", "Contact"].map((navItem) => {
            return (
              <li className="listStyle">
                <a className="textDec defColor" href="#">
                  {navItem}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="flex gap-4">
          <button className="max-sm:hidden">
            <ThemeIcon />
          </button>
          <button className="hidden max-sm:flex">
            <MobileR />
          </button>
          <button className="max-sm:hidden download rounded-xl bg-black text-white py-1.5 px-4">
            Download CV
          </button>
        </div>
      </div>
    </header>
  );
}
