import React from 'react';
import Footer from '../../Common/Footer/Footer';
import Courses from '../../Courses/Courses';
import Fqa from '../Fqa/Fqa';

const Pages = () => {
    return (
        <div>
            <br />
            <br />
           <Courses></Courses>
           <Fqa></Fqa>
           <Footer></Footer>
        </div>
    );
};

export default Pages;