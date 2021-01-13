import "./ProgressLine.css";

const ProgressLine = (props) => {
  //TODO: Check if it is necessary to use a effect to make animation
  const {
    progressColor = "rgba(79,36,175,1)",
    backgroundColor = "#e0e0de",
    percentage = 0,
    width = 10,
    stroke = 5,
  } = props;
  //pline is the whole line, and cline is the completed line
  //styles
  const pline = {
    height: stroke,
    width: `${width}%`,
    backgroundColor,
    borderRadius: 50,
  };

  const cline = {
    height: "100%",
    width: `${percentage}%`,
    backgroundColor: progressColor,
    borderRadius: "inherit",
    textAlign: "right",
    transition: "width 1s ease-in-out",
  };

  return (
    <div className="pline" style={pline}>
      <div className="cline" style={cline}></div>
    </div>
  );
};

export default ProgressLine;
