import "./SideBtn.css"

//This is a component that receive an icon, that could be another jsx element or other thing
//Receives a title which could be a string, and a function to execute one action
const SideBtn = (props) => {
    const {icon, title, action, defaultColor = "rgb(155,172,196)", hoverColor = "rgba(79, 36, 175, 1)", index, selectBtnIndex} = props;
    //TODO: make some js function to resize the font size with the width of the title p
    //TODO: Also make some function to underline when the button is selected
    let color = defaultColor;
    const isSelected = index === selectBtnIndex;
    if (isSelected)
        color = hoverColor;

    return (
        <div className="btn-body" onClick={() => action(index)}>
            <div className="btn-icon btn-element" style={{color}}>{icon}</div>
            <p className="btn-title btn-element" style={{color}}>{title}</p>
        </div>
    );
}
export default SideBtn;