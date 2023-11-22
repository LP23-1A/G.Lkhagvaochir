import typescript from "./icon/typescript.png";
import js from "./icon/js.png";
import science from "./icon/science.png";
import iconnextjs from "./icon/iconnextjs.png";
import iconnodejs from "./icon/Home/Desktop/iconnodejs.png";
import iconexpress from "./icon/Home/Desktop/iconexpress.png";
import iconnest from "./icon/Home/Desktop/iconnest.png";
import iconsocket from "./icon/Home/Desktop/iconsocket.png";

export default function (props) {
  return (
    <div className="gap84 flex">
      <img className="lilIcons" src={js.src} alt="" />
      <img className="lilIcons" src={typescript.src} alt="" />
      <img className="lilIcons" src={science.src} alt="" />
      <img className="lilIcons" src={iconnextjs.src} alt="" />
      <img className="lilIcons" src={iconnodejs.src} alt="" />
      <img className="lilIcons" src={iconexpress.src} alt="" />
      <img className="lilIcons" src={iconnest.src} alt="" />
      <img className="lilIcons" src={iconsocket.src} alt="" />
    </div>
  );
}
