import "./Employee.css";
//This component receives a string with the link of the image and a name of the employee
const Employee = (props) => {
  //TODO: Apply css styles
  const {
    image = "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png",
    name = "usuario",
    surname = "sin nombre",
  } = props;
  //TODO: Check if the width on the css file is correct
  return (
    <div className="Employee-container">
      <div className="Image-container">
        <img src={image} alt="person" className="Employee-image" />
      </div>
      <div className="Employee-name">{name + " " + surname}</div>
    </div>
  );
};
export default Employee;
