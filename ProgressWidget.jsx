import "./ProgressWidget.css";
import ProgressCircle from "./ProgressCircle";

//Receives as props on icon material icon, on percentage an int, on activity an string
//on color props receives an string with the format of rgba(r,g,b,a)
const ProgressWidget = (props) => {
  //Related with the text, icons and data displayed
  const { icon, percentage = 0, activity = "" } = props;
  //Related with the style
  const { color = "rgba(79, 36, 175, 1)" } = props;
  return (
    <div className="main-body">
      <div className="progress-body">
        <ProgressCircle icon={icon} percentage={percentage}></ProgressCircle>
      </div>
      <div className="text-body">
        <div style={{ color, fontSize: "1.2rem", fontWeight: "bold" }}>
          {percentage}%
        </div>
        <div style={{ color: "rgba(155,172,196)" }}>{activity}</div>
      </div>
    </div>
  );
};
export default ProgressWidget;

