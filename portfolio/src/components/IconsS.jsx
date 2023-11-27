export default function IconsS({ skills }) {
  return (
    <div className="gap-24 flex flex-wrap text-center iconsS-S">
      {skills.map((skill) => {
        return (
          <div className="">
            <img className="lilIcons" src={skill.image.src} alt="" />
            <p>{skill.text}</p>
          </div>
        );
      })}
    </div>
  );
}
