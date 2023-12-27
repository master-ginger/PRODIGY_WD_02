import './App.css';
import {motion} from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import * as React from 'react';
import spdf from "./assets/bpr.pdf"



function App() {
  useEffect(()=>
  {
    AOS.init({duration:1000})
  },[]);

 
    return (
    <div className='bg-black w-screen'>
      {/*flex section*/} 
      <div className='flex bg-black text-white ' >
        {/*name section*/} 
        <div>
        <div className='flex justify-end my-5'>
        
 
        </div>
<motion.div 
    animate={{scale:0.95}}
    initial={{scale:0}}
     >
<div className="py-64 px-64 w-50 text-7xl text-white no-underline hover:underline">BHAVANA <br></br>PILLAI<br></br><div className=''>
  <div className='text-2xl py-10 px-1 underline'><a href={spdf}>Resume</a></div></div></div>
</motion.div>
        </div>
        
        {/*name end*/} 

        {/*img section*/} 
        <div className='bg-white w-screen'>
          
          <div data-aos="flip-left" 
     data-aos-easing="ease-out-cubic" data-aos-delay="1000">
      <img src="photo.jpg" alt="blah" className=" rounded-full h-80 w-80  mx-36 my-48"></img>
      </div>
        </div>
        {/*img end*/} 
      </div>{/*flex end*/} 

      
    <div className="px-96 py-10 bg-black text-white ">
    <motion.div 
    animate={{scale:0.95}}
    initial={{scale:0}}
     >
      <div className="border-2 border-white rounded-md px-10 py-10 text-center text-3xl " data-aos="fade-up">About <br></br><br></br>Experienced frontend developer skilled in creating user-friendly interfaces with a knack for problem-solving. Fluent in database management, I bring a well-rounded expertise to deliver seamless and visually appealing web solutions.
</div>
</motion.div>
    </div>
    <div className='text-center py-10 text-4xl  bg-black text-white' data-aos="zoom-in-down">Projects</div>
    <div className=" bg-black text-white my-16 ">
    <div className=" relative left-80 mx-10 my-10 px-10 py-4 border-2 border-white text-center text-3xl rounded-md w-2/4" data-aos="fade-up-left" data-aos-delay="400"><text className='py-10'>Project 1 - Portfolio</text><img src="pr1.png" alt="project 1" className='border-2 border-white h-80 relative left-30 my-10'></img><p>I created my personal portfolio website using React to showcase my skills and projects in a dynamic and visually engaging manner. The website features a modern and responsive design, ensuring a seamless user experience across devices.</p></div>
    <div className="relative left-80 mx-10 my-10 px-10 py-4 border-2 border-white text-center text-3xl rounded-md w-2/4 " data-aos="fade-up-right" data-aos-delay="500"> <text className='py-10'>Project 2 - Restaurant Home Page</text><img src="proj2.png" alt="project 2" className='py-4'></img><p> I crafted an engaging and visually appealing interface that captures the essence of the restaurant's ambiance. The use of HTML ensures a well-structured layout, while CSS brings the design to life with vibrant colors, responsive elements.</p></div>
    <div className="relative left-80 mx-10 my-10 px-10 py-4 border-2 border-white text-center text-3xl rounded-md w-2/4" data-aos="fade-up-left"data-aos-delay="600" ><text className='py-10'>Project 3 - Currency converter</text><img src="proj3.png" alt="project 3" className='py-4'></img><p>My currency converter project is a user-friendly tool developed using HTML and CSS. Users can seamlessly convert between US dollar to Indian Ruppee. The project leverages HTML for structure, CSS for styling, and Javascript for dynamic conversion functionality</p></div>
    </div>
    <div className="text-center text-3xl bg-black text-white" data-aos="zoom-in-down" data-aos-delay="1000">Skills</div>
    <div className="flex justify-center bg-black h-96">
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="500">< img src="c++.png" alt="C++" className="rounded-full h-60 px-5 py-10 cursor-pointer filter grayscale hover:grayscale-0 hover:transition-shadow hover:animate-wiggle " ></img></div>
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="600">< img src="python.png" alt="Python" className="rounded-full h-64 px-5 py-14 cursor-pointer filter grayscale hover:grayscale-0 hover:animate-wiggle"></img></div>
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="700">< img src="react.png" alt="React" className=" rounded-3xl h-60 px-5 py-14 cursor-pointer filter grayscale hover:grayscale-0 hover:animate-wiggle"></img></div>
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="800">< img src="html.png" alt="HTML" className=" rounded-3xl h-60 px-5 py-14 cursor-pointer filter grayscale hover:grayscale-0 hover:animate-wiggle"></img></div>
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="900">< img src="css.png" alt="CSS" className=" rounded-3xl h-60 px-5 py-14 cursor-pointer filter grayscale hover:grayscale-0 hover:animate-wiggle"></img></div>
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="1000">< img src="myswl.png" alt="CSS" className=" rounded-3xl h-64 px-4 py-14 cursor-pointer filter grayscale hover:grayscale-0 hover:animate-wiggle"></img></div>
    </div>
 
   
    
    
    <footer className=' px-8 h-96 bg-black text-white border-y-2'>
      <div className='text-2xl '>Contact Us</div>
      <div className=' py-2 flex justify-start'>
      <div className=''><FaInstagram  /></div>
      <div className='px-3'><FaWhatsapp /></div>
     <div className=''><FaLinkedin/></div> 
     </div>
     <form className='border-2 border-white my-3 px-6 w-72 h-50 py-2 text-lg'>
      <p>Lets Connect</p>
      <p>Name:  <input type='text' className='text-black'></input></p><br></br>
      <p>Email-Id:  <input type='text' className='text-black w-56'></input></p>
      <p>About yourself: <input type='text' className='text-black w-56 h-10'></input></p>
      <button className='bg-white text-black my-3 rounded-lg border-2 border-cyan-700 p-1 shadow-white  shadow-md '>Connect</button>
     </form>
    </footer>

    </div>
  );
}

export default App;
