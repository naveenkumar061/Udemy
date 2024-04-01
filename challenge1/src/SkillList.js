import Skills from "./Skills";
import "./index.css";
function SkillList() {
  return (
    <div className="skill-list">
      <Skills skill="Java" color="green" />
      <Skills skill="HTML CSS" color="orangered" />
      <Skills skill="JavaScript" color="yellow" />
      <Skills skill="React" color="#123456" />
      <Skills skill="Git and Github" color="orange" />
    </div>
  );
}

export default SkillList;
