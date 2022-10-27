import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Details = () => {
    const [data, setData] = useState({})
    const { id } = useParams();
    // console.log(id);

    //   let filterItem = [];
    //     axios.get('http://localhost:8800/courses')
    //     .then((res) => {
    //      console.log(res.data) 
    //      res.data?.forEach((item) => {
    //         if(item._id === id){
    //           filterItem.push(item)
    //           console.log(item);
    //         }
    //       })
    //      console.log(filterItem);
    //     //  setData(filterItem)

    //     }).catch((err) => {
    //       console.log(err);
    //     })


    // console.log(filterItem);


        useEffect(()=> {
            axios.get(`http://localhost:8800/courses/${id}`)
            .then((res) => {
             console.log(res.data)
             setData(res.data)
            }).catch((err) => {
              console.log(err);
            })
        }, [id])

        
        // const found = res.find(appoint => appoint.id === parseInt(id));
        // console.log(found);
    

    return (
        <div className='d-flex'>
            <Card className='m-20' style={{ width: '500px' }} key={data._id}>
                       <img className='' src={data.img} alt="" srcSet="" />
                       <Card.Body>
                         <Card.Title>{data.title}</Card.Title>
                            <Card.Text>
                               {data.details}
                            </Card.Text>
                            
                       </Card.Body>
                 </Card>
            <div className=''>
                <h1>Suggested Course</h1>
                <button> C</button>
                <button> C++</button>
                <button> Java</button>
                <button> Python</button>
                <button> C#</button>

            </div>
        </div>
    );
};

export default Details;