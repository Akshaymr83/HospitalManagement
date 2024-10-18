import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap'; 
import Sidebar from './Sidebar/Sidebar';
import "./nav.css";
import { Link, useNavigate } from 'react-router-dom';
import PlusLogo from '../components/Img/E_CARE2.png';
import Loader from '../components/Login/Loader'; // Import your Loader component

function Nave() {
  const [loading, setLoading] = useState(false); // Add loading state
  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem('user-info'));

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      setLoading(true); // Set loading to true when logout is confirmed
      // Simulate a logout operation, like clearing user data from localStorage
      localStorage.removeItem('user-info');
      
      // Simulate an API call or delay for logout
      setTimeout(() => {
        setLoading(false); // Reset loading state after the simulated delay
        navigate("/"); // Navigate to home or login page after logout
      }, 2000); // Simulate a 2-second delay for logout
    }
  };

  return (
    <div>    
      <Navbar id='navbar' data-bs-theme="dark" className="fixed-top">
        <Sidebar />
        <Container>
          <Navbar.Brand href="#home" className="ecare-logo">
            <img src={PlusLogo} alt="Plus Logo" style={{height:'3rem', paddingRight: '10px', mixBlendMode:'screen', overflow:'hidden'}} />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to='/home' className="link-no-underline">
              <Nav.Link href="#home">Home</Nav.Link>
            </Link>
            <Link to='/ecards' className="link-no-underline">
              <Nav.Link href="#home">Employee</Nav.Link>
            </Link>
            <Link to='/dcards' className="link-no-underline">
              <Nav.Link href="#home">Department</Nav.Link>
            </Link>
            <Link to='/DHcards' className="link-no-underline">
              <Nav.Link href="#home">Department Head</Nav.Link>
            </Link>
            <Button
              onClick={handleLogout}
              style={{ background: 'black', marginLeft: '30rem' }}
            >
              Logout
            </Button>
          </Nav>
        </Container>
      </Navbar>
      {loading && <Loader />} {/* Show the loader when loading is true */}
    </div>
  );
}

export default Nave;
