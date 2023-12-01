import Typescript from "../components/icon/typescript.png";
import React from "../components/icon/science.png";
import Node from "../components/icon/iconnodejs.png";
import Express from "../components/icon/iconexpress.png";
import Java from "../components/icon/js.png";
import Nest from "../components/icon/iconnest.png";
import Socket from "../components/icon/iconsocket.png";
import Postgre from "../components/icon/iconpostgresql.png";
import MongoDB from "../components/icon/iconmongodb.png";
import Sass from "../components/icon/iconsass.png";
import Tailwindcss from "../components/icon/icontailwindcss.png";
import Figma from "../components/icon/iconfigma.png";
import Cypress from "../components/icon/iconcypress.png";
import Storybook from "../components/icon/iconstorybook.png";
import Git from "../components/icon/icongit.png";
import Next from "../components/icon/iconnextjs.png";
import IconsS from "./IconsS";

const skills = [
  {
    image: Java,
    text: "JavaScript",
  },
  {
    image: Typescript,
    text: "Typescript",
  },

  {
    image: React,
    text: "React",
  },
  {
    image: Next,
    text: "Next",
  },
  {
    image: Node,
    text: "Node",
  },
  {
    image: Express,
    text: "Express",
  },
  {
    image: Nest,
    text: "Nest",
  },
  {
    image: Socket,
    text: "Socket",
  },
  {
    image: Postgre,
    text: "Postgre",
  },
  {
    image: MongoDB,
    text: "MongoDB",
  },
  {
    image: Sass,
    text: "Sass",
  },
  {
    image: Tailwindcss,
    text: "Tailwindcss",
  },
  {
    image: Figma,
    text: "Figma",
  },
  {
    image: Cypress,
    text: "Cypress",
  },
  {
    image: Storybook,
    text: "Storybook",
  },
  {
    image: Git,
    text: "Git",
  },
];
export default function SkillsFu() {
  return (
    <div>
      <IconsS skills={skills} />
    </div>
  );
}
