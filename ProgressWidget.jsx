import "./ProgressWidget.css";
import ProgressCircle from "./ProgressCircle";

const ProgressWidget = (props) => {
    //Related with the high level design of the component
    const {icon, percentage, activity} = props;

    return <div className="main-body">
        <div className="progress-body">
            <ProgressCircle icon={icon}></ProgressCircle>
        </div>
        <div className="text-body">
            <div>{percentage}</div>
            <div>{activity}</div>
        </div>
    </div>
}
export default ProgressWidget;