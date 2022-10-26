// import { getAuth } from 'firebase/auth';
// import React from 'react';
// import app from '../../firebase/firebase.init';


// const auth = getAuth(app);

// const Login = () => {

//     return (
//         <div className='App'>
//             <form>
//                 <input type="email" name="" id=" " placeholder='Email' />
//                 <br />
//                 <input type="email" name="" id=" " placeholder='Password' />
//             </form>
//         </div>
//     );
// };

// export default Login;

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Login;