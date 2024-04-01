import "./index.css";
function Skills({ skillObj }) {
  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.skill}</span>
      <span>{skillObj.level === "beginner" && "😃"}</span>
      <span>{skillObj.level === "intermediate" && "👍"}</span>
      <span>{skillObj.level === "advanced" && "💪"}</span>
    </div>
  );
}

export default Skills;
