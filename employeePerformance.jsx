import "./employeePerformance.css";
import Employee from "./Employee";
import ProgressLine from "./ProgressLine";

//This is the component that contains employee information and their performance
const employeePerformance = (props) => {
  //TODO: Check if the props are correct and check if the aspect ratio behaves as expected
  //Related with the infromation
  const { name, surname, percentage, qty } = props;
  //Related with the style
  const { color } = props;
  //styles
  return (
    <div className="ep-container">
      <Employee name={name} surname={surname} width={20} />
      <ProgressLine percentage={percentage} width={20} progressColor={color} />
      <div
        className="percentage-container"
        style={{ color, fontWeight: "bold" }}
      >
        {percentage}%
      </div>
      <div className="qyt-container" style={{ color: "rgb(155,172,196)" }}>
        {qty}
      </div>
    </div>
  );
};
export default employeePerformance;
