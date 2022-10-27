import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

const Header = () => {
   
    return (
        <div className='header'>
            {/* <Link to='/home'>Home</Link>
            <Link to='/courses'>Courses</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/about'>About</Link> */}

     <Navbar bg="primary" variant="warning">
        <Container>
          <Link to="/" className='text-white' href="">Computer Science</Link>
          <Nav className="me-auto">
            <Link  className='text-white' to='/'>Home</Link>
            <Link className='text-white' to='/courses'>Courses</Link>
            <Link className='text-white' to='/blog'>Blog</Link>
            <Link className='text-white' to='/about'>About</Link>
            <Link className='text-white' to='/fqa'>FQA</Link>
          </Nav>
          <Link to="/login" className='btn btn-secondary'> Login </Link>
          <Link to="/register" className='btn btn-secondary'> Register </Link>
        </Container>
      </Navbar>

            
        </div>
    );
};

export default Header;