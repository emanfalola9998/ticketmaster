import { Employee } from "../../types/employee";
import { Link, useParams } from "react-router-dom";
import "./Profile.scss";

type ProfileProps = {
    employees: Employee[];
};

const Profile = ({ employees }: ProfileProps) => {
    const { id } = useParams<{ id: string }>();

    if (!id || isNaN(parseInt(id))) {
        return <div>User not found</div>;
    }
    const profile = employees.find((employee) => employee.id === parseInt(id));

    if (!profile) {
        return <div>User not found</div>;
    }

return (
    <div>
    <nav className="profile__nav">
    <a className="profile__nav-link" href="#">
        {" "}
        <Link to="/ticketmaster">Home</Link>
        </a>
        <a className="profile__nav-link" href="#">
        {" "}
        <Link to="/ticketmaster/employees">Employees</Link>
        </a>

    </nav>

    <div className="profile">
        {profile.id}
        <h1>Name: {profile.name}</h1>
        <h2>Role: {profile.role}</h2>
        <p>Experience: {profile.profile.experience}</p>
        <p>Department: {profile.profile.department}</p>
        <p>Tech Stack: {profile.profile.techstack}</p>
        <img src={profile.profile.profilePicture} alt="profile-pic" />
    </div>
    </div>
);
};

export default Profile;
