import './App.css';
import {motion} from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
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
<div className=" pacifico py-64 px-64 w-50 text-7xl text-white no-underline hover:underline">Bhavana<br></br>Pillai<br></br><div className=''>
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
      <div className="border-2 border-white rounded-md px-10 py-10 text-center  " data-aos="fade-up"><text className='text-5xl ultra'>About</text> <br></br><br></br><text className='text-3xl ptserif '>Experienced frontend developer skilled in creating user-friendly interfaces with a knack for problem-solving. Fluent in database management, I bring a well-rounded expertise to deliver seamless and visually appealing web solutions.</text>
</div>
</motion.div>
    </div>
    <div className='text-center py-10 text-5xl ultra  bg-black text-white' data-aos="zoom-in-down">Projects</div>
    <div className=" bg-black text-white my-16 ">
    <div className=" relative left-80 mx-10 my-10 px-10 py-4 border-2 border-white text-center text-3xl rounded-md w-2/4" data-aos="fade-up-left" data-aos-delay="400"><text className='py-10 ptserif'>Project 1 - Portfolio</text><img src="pr1.png" alt="project 1" className='border-2 border-white h-80 relative left-30 my-10'></img><p className='ptserif'>I created my personal portfolio website using React to showcase my skills and projects in a dynamic and visually engaging manner. The website features a modern and responsive design, ensuring a seamless user experience across devices.</p></div>
    <div className="relative left-80 mx-10 my-10 px-10 py-4 border-2 border-white text-center text-3xl rounded-md w-2/4 " data-aos="fade-up-right" data-aos-delay="500"> <text className='py-10 ptserif'>Project 2 - Restaurant Home Page</text><img src="proj2.png" alt="project 2" className='py-4'></img><p className='ptserif'> I crafted an engaging and visually appealing interface that captures the essence of the restaurant's ambiance. The use of HTML ensures a well-structured layout, while CSS brings the design to life with vibrant colors, responsive elements.</p></div>
    <div className="relative left-80 mx-10 my-10 px-10 py-4 border-2 border-white text-center text-3xl rounded-md w-2/4" data-aos="fade-up-left"data-aos-delay="600" ><text className='py-10 ptserif'>Project 3 - Currency converter</text><img src="proj3.png" alt="project 3" className='py-4'></img><p className='ptserif'>My currency converter project is a user-friendly tool developed using HTML and CSS. Users can seamlessly convert between US dollar to Indian Ruppee. The project leverages HTML for structure, CSS for styling, and Javascript for dynamic conversion functionality</p></div>
    </div>
    <div className="text-center text-5xl bg-black text-white ultra" data-aos="zoom-in-down" data-aos-delay="1000">Skills</div>
    <div className="flex justify-center bg-black h-96">
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="500">< img src="c++.png" alt="C++" className="rounded-full h-60 px-5 py-10 cursor-pointer filter grayscale hover:grayscale-0 hover:transition-shadow hover:animate-wiggle " ></img></div>
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="600">< img src="python.png" alt="Python" className="rounded-full h-64 px-5 py-14 cursor-pointer filter grayscale hover:grayscale-0 hover:animate-wiggle"></img></div>
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="700">< img src="react.png" alt="React" className=" rounded-3xl h-60 px-5 py-14 cursor-pointer filter grayscale hover:grayscale-0 hover:animate-wiggle"></img></div>
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="800">< img src="html.png" alt="HTML" className=" rounded-3xl h-60 px-5 py-14 cursor-pointer filter grayscale hover:grayscale-0 hover:animate-wiggle"></img></div>
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="900">< img src="css.png" alt="CSS" className=" rounded-3xl h-60 px-5 py-14 cursor-pointer filter grayscale hover:grayscale-0 hover:animate-wiggle"></img></div>
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="1000">< img src="myswl.png" alt="CSS" className=" rounded-3xl h-64 px-4 py-14 cursor-pointer filter grayscale hover:grayscale-0 hover:animate-wiggle"></img></div>
    </div>
 
      <div className='text-white text-center text-3xl '>
        <text className='text-5xl ultra'>Achievements</text>
        <div className='flex justify-between items-center my-5 border-2 mx-44'>
          <img src="hackerank.png" alt="certification" className='h-96'></img>
          <text className='px-40 ptserif' data-aos="fade-up" data-aos-delay="500">Hackerrank Python (Basic) <br/>Assesment</text>
        </div>
        <div className='flex items-center justify-between my-5 w-500px border-2 mx-44'>
        <text className='px-40 ptserif' data-aos="fade-up" data-aos-delay="500"> Software Engineering <br/>Virtual Experience Program</text>
          <img src="softexp.png" alt="certification" className='h-96 '></img>
          
        </div>
        <div className='flex items-center justify-between my-5 w-500px border-2 mx-44'>
         <img src="cybexp.png" alt="certification" className='h-96' ></img>
          <text className='px-40 ptserif' data-aos="fade-up" data-aos-delay="500">Cybersecurity Virtual<br/> Experience Program</text>
        </div>
        <div className='flex items-center justify-between my-5  border-2 mx-44'>
          <text className='px-40 ptserif' data-aos="fade-up" data-aos-delay="500">Codechef Problem <br/>Solving</text>
          <img src="cc.png" alt="certification" className='h-96 '></img>
        </div>
      </div>
    
    
    <footer className=' px-8 h-max bg-black text-white border-y-2'>
      <div className='text-2xl py-2 my-2 border-2 w-40 px-4 ptserif'>Contact Us</div>
      <div className=' py-2 flex justify-start ptserif'>
      <div className=''><a href='https://www.instagram.com/bhahahahavana_?igsh=MjVqeHNxNjFpYXF3'><FaInstagram  /></a></div>
      <div className='px-3'><a href='https://github.com/master-ginger'><FaGithub  /></a></div>
     <div className=''><a href='https://www.linkedin.com/in/bhavana-pillai-34b218246'><FaLinkedin /></a></div> 
     </div>
     <form className='ptserif border-2 border-white my-3 px-6 w-72 h-50 py-2 text-lg'>
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
