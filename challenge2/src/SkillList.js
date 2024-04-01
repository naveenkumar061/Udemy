import Skills from "./Skills";
import "./index.css";
const skills = [
  {
    skill: "Java",
    level: "intermediate",
    color: "#C3DCAF",
  },
  {
    skill: "HTML CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
];
// const skills = [];
function SkillList() {
  return (
    <div className="skill-list">
      {skills.length > 0 ? (
        skills.map((skill) => <Skills skillObj={skill} />)
      ) : (
        <p>Please add Skills</p>
      )}
    </div>
  );
}

export default SkillList;
