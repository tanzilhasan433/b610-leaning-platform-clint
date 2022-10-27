import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Home = () => {
 const [data, setData] = useState([])

 useEffect(()=>{
   const res = axios.get('http://localhost:8800/courses')
   console.log(res.data);
   setData(res.data)
 }, [])
    
    return (
        <div className=''>    
           <h2>This is home</h2>
           {data.length}
             <Card style={{ width: '18rem' }}>
                 <Card.Img variant="top" src="holder.js/100px180" />
                   <Card.Body>
                     <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go To</Button>
                   </Card.Body>
             </Card>
        </div>
    );
};

export default Home;