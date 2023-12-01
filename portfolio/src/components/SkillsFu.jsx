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
import { v4 as uuidv4 } from "uuid";

const skills = [
  {
    id: uuidv4(),
    image: Java,
    text: "JavaScript",
  },
  {
    id: uuidv4(),
    image: Typescript,
    text: "Typescript",
  },

  {
    id: uuidv4(),
    image: React,
    text: "React",
  },
  {
    id: uuidv4(),
    image: Next,
    text: "Next",
  },
  {
    id: uuidv4(),
    image: Node,
    text: "Node",
  },
  {
    id: uuidv4(),
    image: Express,
    text: "Express",
  },
  {
    id: uuidv4(),
    image: Nest,
    text: "Nest",
  },
  {
    id: uuidv4(),
    image: Socket,
    text: "Socket",
  },
  {
    id: uuidv4(),
    image: Postgre,
    text: "Postgre",
  },
  {
    id: uuidv4(),
    image: MongoDB,
    text: "MongoDB",
  },
  {
    id: uuidv4(),
    image: Sass,
    text: "Sass",
  },
  {
    id: uuidv4(),
    image: Tailwindcss,
    text: "Tailwindcss",
  },
  {
    id: uuidv4(),
    image: Figma,
    text: "Figma",
  },
  {
    id: uuidv4(),
    image: Cypress,
    text: "Cypress",
  },
  {
    id: uuidv4(),
    image: Storybook,
    text: "Storybook",
  },
  {
    id: uuidv4(),
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
