import React, { useState } from "react";
import "./Employees.scss";
import { Employee } from "../../types/employee";

type EmployeeProps = {
  employees: Employee[];
};

const Employees = ({ employees }: EmployeeProps) => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div className="employee-container">
        <h1 className="employee-container__heading">Ticket Tracker</h1>
        {employees.map((employee: Employee) => (
        <div key={employee.id} className="employee-card">
            <h3 className="employee-card__name">{employee.name}</h3>
            <h3 className="employee-card__role">{employee.role}</h3>
            <div></div>
        </div>
        ))}
    </div>
  );
};

export default Employees;
