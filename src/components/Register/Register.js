import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import initializationApp from '../../utilities/firebase/firebase.init';


// const auth = getAuth(initializationApp);
// console.log(auth);

const Register = () => {

    const handleRegister  = event => {
        // event.preventDefault();
        // const email = event.target.email.value;
        // const password = event.target.password.value;
        // console.log(email,password);
        // createUserWithEmailAndPassword(auth, email, password)
        // .then(result =>{
        //     const user = result.user;
        //     console.log(user);
        // })
        // .catch(error => {
        //     console.log('error', error);
        // })
            
    }

    return (
        <div>
            <h2 className='text-center'>Please Register</h2>
            <br />
              <Form onSubmit={handleRegister} className='container w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="name" />
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Register
                </Button>
             </Form>
        </div>
    );
};

export default Register;