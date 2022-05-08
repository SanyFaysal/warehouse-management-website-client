import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import CustomLink from '../CustomLink/CustomLink';
const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" sticky='top' variant="dark">
            <Container>
                <Navbar.Brand as={CustomLink} to="/home">
                    <img src="https://i.ibb.co/G0BDBTS/images-removebg-preview.png" style={{ width: '80px' }} alt="" />
                    <span className='text-danger'>Gadgets World</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={CustomLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={CustomLink} to="/stockProducts">Stock</Nav.Link>
                        <Nav.Link as={CustomLink} to="/manageProducts">Manage-Products</Nav.Link>
                        <Nav.Link as={CustomLink} to="/myProducts">My Products</Nav.Link>
                        <Nav.Link as={CustomLink} to="/blog">Blog</Nav.Link>
                        {!user ? <Nav.Link as={CustomLink} to="/login">Login</Nav.Link> :
                            <span onClick={() => signOut(auth)} className='d-flex align-items-center justify-content-center text-white'>Logout</span>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;