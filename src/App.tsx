import { BrowserRouter, Routes, Route } from 'react-router-dom';
import team from "./data/team";
import './App.css';
import Employees from './components/Employee/Employees';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home employees={team} />}></Route>
        <Route path="employees" element={<Employees employees={team} />} />
        <Route path="profile/:id" element={<Profile employees={team} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
