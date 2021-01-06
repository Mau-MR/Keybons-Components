import "./Employee.css";
//This component receives a string with the link of the image and a name of the employee
const Employee = (props) => {
  //TODO: Apply css styles
  const { image, name, surname } = props;
  return (
    <div className="Employee-container">
      <div className="Employee-name">{name + " " + surname}</div>
      <img src={image} alt="person" className="employee-image" />
    </div>
  );
};
export default Employee;
