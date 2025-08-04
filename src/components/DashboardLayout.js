import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import LogoutButton from './LogoutButton';

const DashboardLayout = ({ children }) => {
  const { auth } = React.useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand onClick={() => navigate('/')}>Dashboard</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Item className="me-3 text-white">{auth.user?.role.toUpperCase()}</Nav.Item>
            <LogoutButton />
          </Nav>
        </Container>
      </Navbar>
      <Container className="mt-4">
        {children}
      </Container>
    </>
  );
};

export default DashboardLayout;
