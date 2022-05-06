import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/stockProducts">Stock</Nav.Link>
                        <Nav.Link as={Link} to="/manageProducts">Manage-Products</Nav.Link>
                        <Nav.Link as={Link} to="/myProducts">My Products</Nav.Link>
                        {!user ? <Nav.Link as={Link} to="/login">Login</Nav.Link> :
                            <span onClick={() => signOut(auth)} className='d-flex align-items-center justify-content-center text-white'>Logout</span>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;