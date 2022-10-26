
// import { getAuth } from "firebase/auth";
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Courses from './components/Courses/Courses';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Common/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Fqa from './components/Fqa/Fqa';


// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import app from './firebase/firebase.init';

// const auth = getAuth(app);

function App() {
  // const provider = GoogleAuthProvider();
  return (
    <>
     <Header></Header>
     <Home></Home>

     
     
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="blog" element={<Blog />} />
      <Route path="courses" element={<Courses />} />
      <Route path="about" element={<About />} />
      <Route path="fqa" element={<Fqa />} />

      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      

    </Routes>

    
     
   </>
  );

}

export default App;
