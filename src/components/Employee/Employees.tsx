import React, { useState } from "react";
import "./Employees.scss";
import { Employee } from "../../types/employee";

type EmployeeProps = {
  employees: Employee[];
};

const Employees = ({ employees }: EmployeeProps) => {
  // State for counter values, initialized with 0 for each employee
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
    <div className="employee-container">
      <h1 className="employee-container__heading">Ticket Tracker</h1>
      {employees.map((employee: Employee, index: number) => (
        <div key={employee.id} className="employee-card">
          <h3 className="employee-card__name">{employee.name}</h3>
          <h3 className="employee-card__role">{employee.role}</h3>
          <div className="employee-card__counter">
            <h3 className="employee-card__counter-heading">Counter</h3>
            {counters[index]}
            <button onClick={() => handleDecrement(index)}>-</button>
            <button onClick={() => handleIncrement(index)}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Employees;
