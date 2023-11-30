export default function IconsS({ skills }) {
  return (
    <div className="w-screen ml-[-100px]">
      <div
        className="flex gap-16 text-center iconsS-S running whitespace-nowrap"
        style={{
          animation: "namehere 25s ease-out infinite",
          animationPlayState: "running",
        }}
      >
        <div className="flex gap-16">
          {skills.map((skill) => {
            return (
              <div>
                <div>
                  <img className="lilIcons" src={skill.image.src} alt="" />
                  <p>{skill.text}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex gap-16">
          {skills.map((skill) => {
            return (
              <div>
                <div>
                  <img className="lilIcons" src={skill.image.src} alt="" />
                  <p>{skill.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
