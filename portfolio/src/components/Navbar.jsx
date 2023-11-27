import ThemeIcon from "./icon/Themicon";

export default function Navbar() {
  return (
    <header className=" py-4 px-20 text-center flex justify-center items-center justify-between">
      <div>Logo</div>
      <div className="headerConText flex gap-6">
        <ul className="headerListContainer flex gap-6 ">
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
        <div className="flex gap16">
          <button className="Ticon">
            <ThemeIcon />
          </button>
          <button className="download rounded-xl bg-black text-white py-1.5 px-4">
            Download CV
          </button>
        </div>
      </div>
    </header>
  );
}
