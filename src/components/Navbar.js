import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav, Badge } from 'react-bootstrap';

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
  fontWeight: '600',
  padding: '0.5rem 1rem',
  borderRadius: '0.5rem',
  marginLeft: '1rem',
};

const activeLinkStyle = {
  fontWeight: 'bold',
  boxShadow: '0 0 8px rgba(255,255,255,0.7)',
};

const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand={false} className="shadow">
      <Container>
        <Navbar.Brand href="/">🎓 Student Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto d-flex align-items-center">
            <NavLink
              to="/"
              style={({ isActive }) =>
                isActive
                  ? { ...linkStyle, ...activeLinkStyle, backgroundColor: '#007bff' } // Blue
                  : linkStyle
              }
            >
              Home <Badge bg="primary" pill>1</Badge>
            </NavLink>

            <NavLink
              to="/courses"
              style={({ isActive }) =>
                isActive
                  ? { ...linkStyle, ...activeLinkStyle, backgroundColor: '#28a745' } // Green
                  : linkStyle
              }
            >
              Courses <Badge bg="success" pill>0</Badge>
            </NavLink>

            <NavLink
              to="/profile"
              style={({ isActive }) =>
                isActive
                  ? { ...linkStyle, ...activeLinkStyle, backgroundColor: '#ffc107', color: 'black' } // Yellow
                  : { ...linkStyle, color: 'black' }
              }
            >
              Profile <Badge bg="warning" pill text="dark">!</Badge>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
