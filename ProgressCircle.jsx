//TODO: Change the color for the circles to be different
import React, {useEffect, useRef, useState} from "react";
import "./ProgressCircle.css"

const ProgressCircle = (props) => {
    //Some props
    const {size = 50, progress = 60, strokeWidth = 3, cOneBackground = "rgba(79,36,175,.3)", cTwoStroke = "rgba(79, 36, 175, 1)", icon = ""} = props;

    //Circle stuff
    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;


    //React stuff
    const [offset, setOffset] = useState(0);
    const circleRef = useRef(null);
    useEffect(() => {
        const progressOffset = ((100 - progress) / 100) * circumference;
        setOffset(progressOffset);
        circleRef.current.style = 'transition: stroke-dashoffset 850ms ease-in-out;';

    }, [setOffset, circumference, progress, offset])

    //Styles
    const extraBorder = size * 1.1;
    const progressBarStyle = {
        width: extraBorder,
        height: extraBorder,
        background: "red"
    }

    //The radius of the second circle is multplied by .85 to make it small than the other circle with the stroke
    return (
        <div className="progress-container" style={progressBarStyle}>
            <svg className="svg" width={size} height={size}>
                <circle className="svg-circle-border" stroke={cTwoStroke} cx={center} cy={center} r={radius}
                        strokeWidth={strokeWidth} strokeDasharray={circumference} ref={circleRef}
                        strokeDashoffset={offset} strokeLinecap={"round"}/>
                <circle className="svg-circle-bg" cx={center} cy={center} r={radius * .85} fill={cOneBackground}/>
            </svg>
            <div className="progress-icon">{icon}</div>
        </div>
    );
}

export default ProgressCircle;