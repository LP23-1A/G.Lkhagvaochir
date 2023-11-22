import ThemeIcon from "./icon/Themicon";

export default function Navbar() {
  return (
    <header className="flex justifyS aligItemc">
      <div>Logo</div>
      <div className="headerConText flex gap24">
        <ul className="headerListContainer flex gap24 ">
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
          <button className="download borderR12">Download CV</button>
        </div>
      </div>
    </header>
  );
}
