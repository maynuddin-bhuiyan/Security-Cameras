import { Box } from '@mui/material';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hook/useAuth';



const Navigation = () => {
  const { user, logOut } = useAuth();

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Security</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link as={HashLink} to="/Home#home">Home</Nav.Link>
            <Nav.Link as={HashLink} to="/Home#features">Features</Nav.Link>
            <Nav.Link as={HashLink} to="/review">Add-Review</Nav.Link>
            <Nav.Link as={HashLink} to="/security">Security-Cameras</Nav.Link>

            {
              user?.email ?
                <Box>
                  <Nav.Link as={HashLink} to="/dashboard">

                    Dashboard
                  </Nav.Link>
                  <Button style={{ position: 'absolute', top: '8px', right: '250px'}} onClick={logOut} >Logout</Button>
                </Box>


                :
                <Nav.Link as={HashLink} to="/login">

                  <Button >Login</Button>
                </Nav.Link>
            }







          </Nav>
        </Container>
      </Navbar>

    </>
  );
};

export default Navigation;