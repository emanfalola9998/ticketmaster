import { Employee } from '../../types/employee';
import { Link } from 'react-router-dom';

type EmployeesProps = {
    employees: Employee[];
}

const Home = ({ employees }: EmployeesProps) => {

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/ticketmaster/employees">Employees</Link>
          </li>
          <li>
            <Link to="/ticketmaster/profile">Profile</Link>
          </li>
        </ul>
      </nav>
      {employees.map(employee => 
        <p key={employee.id}>
          <Link to={`/ticketmaster/profile/${employee.id}`}>{employee.id} {employee.name}</Link>
        </p>
      )}
    </div>
  )
}

export default Home;
