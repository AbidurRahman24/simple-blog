import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbarheader = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Travel</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link><Link to={'/'}>Home</Link></Nav.Link>
                        <Nav.Link><Link to={'/addBlog'}>Add Blog</Link></Nav.Link>
                        <Nav.Link><Link to={'/contact'}>Contact US</Link></Nav.Link>
                        <Nav.Link >Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar></>
    );
};

export default Navbarheader;