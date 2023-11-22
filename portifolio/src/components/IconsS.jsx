export default function IconsS({ skills }) {
  return (
    <div className="gap84 iconsS-S">
      {skills.map((skill) => {
        return (
          <div>
            <img className="lilIcons" src={skill.image.src} alt="" />
            <p>{skill.text}</p>
          </div>
        );
      })}
    </div>
  );
}
