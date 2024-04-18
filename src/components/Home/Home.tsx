import { Employee } from "../../types/employee";
import { Link } from "react-router-dom";

type EmployeesProps = {
  employees: Employee[];
};

const Home = ({ employees }: EmployeesProps) => {
  return (
    <div>
      <nav className="home__nav">
        <a className="home__nav-link" href="#">
          {" "}
          <Link to="/ticketmaster/employees">Employees</Link>
        </a>

      </nav>

      {employees.map((employee) => (
        <p key={employee.id}>
          <Link to={`/ticketmaster/profile/${employee.id}`}>
            {employee.id} {employee.name}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default Home;
