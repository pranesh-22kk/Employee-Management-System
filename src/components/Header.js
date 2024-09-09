import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Employment Management System</h1>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/employees">Employees</Link>
        <Link to="/add-employee">Add Employee</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}

export default Header;
