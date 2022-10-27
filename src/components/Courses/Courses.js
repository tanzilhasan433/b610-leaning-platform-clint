import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Courses.css';

const Courses = () => {
 const [data, setData] = useState([])


   useEffect(()=> {
    axios.get('http://localhost:8800/courses')
    .then((res) => {
     // console.log(res.data) 
     setData(res.data)
    }).catch((err) => {
      console.log(err);
    })
   }, [])



    return (
        <div className='d-flex'>    
           <div className='part'>
           {
            data.map((item) => {
                return(
                    <Card className='m-20' style={{ width: '22rem' }} key={item._id}>
                       <img className='' src={item.img} alt="" srcSet="" />
                       <Card.Body>
                         <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                               {item.des}
                            </Card.Text>
                            
                            <Link to={`${item._id}`} variant="primary">Go To</Link>
                       </Card.Body>
                 </Card>
                )
            })}
           </div>
           <div>
            <h3>This is button pages</h3>
           </div>
        </div>
    );
};

export default Courses;