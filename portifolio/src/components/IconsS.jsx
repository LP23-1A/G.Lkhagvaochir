import iconpostgresql from "./icon/Home/Desktop/iconpostgresql.png";
import iconmongodb from "./icon/Home/Desktop/iconmongodb.png";
import iconsass from "./icon/Home/Desktop/iconsass.png";
import icontailwindcss from "./icon/Home/Desktop/icontailwindcss.png";
import iconfigma from "./icon/Home/Desktop/iconfigma.png";
import iconcypress from "./icon/Home/Desktop/iconcypress.png";
import iconstorybook from "./icon/Home/Desktop/iconstorybook.png";
import icongit from "./icon/Home/Desktop/icongit.png";

export default function IconsS(props) {
  return (
    <div className="gap84 flex">
      <img className="lilIcons" src={iconpostgresql.src} alt="" />
      <img className="lilIcons" src={iconmongodb.src} alt="" />
      <img className="lilIcons" src={iconsass.src} alt="" />
      <img className="lilIcons" src={icontailwindcss.src} alt="" />
      <img className="lilIcons" src={iconfigma.src} alt="" />
      <img className="lilIcons" src={iconcypress.src} alt="" />
      <img className="lilIcons" src={iconstorybook.src} alt="" />
      <img className="lilIcons" src={icongit.src} alt="" />
    </div>
  );
}
