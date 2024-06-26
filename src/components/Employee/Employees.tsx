import  { useState } from "react";
import "./Employees.scss";
import { Employee } from "../../types/employee";
import { Link } from "react-router-dom";


type EmployeeProps = {
  employees: Employee[];
};

const Employees = ({ employees }: EmployeeProps) => {
  const [counters, setCounters] = useState<number[]>(Array(employees.length).fill(0));

  const handleIncrement = (index: number) => {
    const updatedCounters = [...counters];
    updatedCounters[index] += 1;
    setCounters(updatedCounters);
  };

  const handleDecrement = (index: number) => {
    const updatedCounters = [...counters];
    if (updatedCounters[index] > 0) {
      updatedCounters[index] -= 1;
    }
    setCounters(updatedCounters);
  };

  return (
    <div className="employee">
      <nav className="employee__nav">
            <a className="employee__nav-link" href="#"> <Link to="/ticketmaster">Home</Link></a>
      </nav>

      <h1 className="employee__heading">Ticket Tracker</h1>
      <div className="employee__content">
      {employees.map((employee: Employee, index: number) => (
        <div key={employee.id} className="employee__content-card">
        <p className="employee__content-card__name">
        <Link to={`/ticketmaster/profile/${employee.id}`}>{employee.id} {employee.name}</Link>
        </p>          <h3 className="employee__content-card__role">{employee.role}</h3>
          <div className="employee__content-card__counter">
            <h3 className="employee__content-card__counter-heading">Counter</h3>
            {counters[index]}
            <div className="employee__content-card__counter-buttons">
            <button className="employee__content-card__counter-button" onClick={() => handleDecrement(index)}>-</button>
            <button className="employee__content-card__counter-button" onClick={() => handleIncrement(index)}>+</button>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Employees;




