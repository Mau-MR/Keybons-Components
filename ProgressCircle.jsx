import React, { useEffect, useRef, useState } from "react";
import "./ProgressCircle.css";

//Element that receives a size, progress, stroke and the colors of the elements
const ProgressCircle = (props) => {
  //Some props and its defaults
  const {
    size = 50,
    percentage = 1,
    strokeWidth = 2.5,
    cOneBackground = "rgba(79,36,175,.3)",
    cTwoStroke = "rgba(79, 36, 175, 1)",
    icon = "",
  } = props;

  //Circle stuff
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  //React stuff
  const [offset, setOffset] = useState(0);
  const circleRef = useRef(null);
  useEffect(() => {
    const progressOffset = ((100 - percentage) / 100) * circumference;
    setOffset(progressOffset);
    circleRef.current.style =
      "transition: stroke-dashoffset 850ms ease-in-out;";
  }, [setOffset, circumference, percentage, offset]);

  //Styles
  const extraBorder = size * 1.1;
  const progressBarStyle = {
    width: extraBorder,
    height: extraBorder,
  };

  //The radius of the second circle is multplied by .85 to make it smaller than the other circle with the stroke
  return (
    <div className="progress-container" style={progressBarStyle}>
      <svg className="svg" width={size} height={size}>
        <circle
          className="svg-circle-border"
          stroke={cTwoStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          ref={circleRef}
          strokeDashoffset={offset}
          strokeLinecap={"round"}
        />
        <circle
          className="svg-circle-bg"
          cx={center}
          cy={center}
          r={radius * 0.85}
          fill={cOneBackground}
        />
      </svg>
      <div className="progress-icon">
        {React.cloneElement(icon, { style: { color: cTwoStroke } })}
      </div>
    </div>
  );
};

export default ProgressCircle;

