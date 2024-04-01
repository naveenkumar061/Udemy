import Photo from "./Photo";
import Info from "./Info";
import SkillList from "./SkillList";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Photo />
      <div className="data">
        <Info />
        <SkillList />
      </div>
    </div>
  );
}

export default App;
