'use client'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub,AiOutlineMenu,AiOutlineClose,AiOutlineMail} from "react-icons/ai";
import { HiCube } from "react-icons/hi";
import React, { useState } from "react";
import Image from "next/image";

import umass_logo from "../../public/umass_logo.png"
import advisor from "../../public/advisor.png"
import alexion from "../../public/alexion.png"

import MoodMix1 from "../../public/MoodMix1.PNG"

import SnapSudoku from "../../public/SnapSudoku.png"
import Clue from "../../public/clue.jpg"
import Stocks from "../../public/stocks.jpg"
import Website from "../../public/website.png"

// import { MapContainer, TileLayer, Marker,Popup } from 'react-leaflet-universal';
// import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
// import 'leaflet-defaulticon-compatibility';


export default function Home() {

  const [darkMode,setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };


  let Links =[
    {name:"About",link:"#about"},
    {name:"Experience",link:"#experience"},
    {name:"Projects",link:"#projects"},
    {name:"Contact",link:"#contact"},
  ];
  let [open,setOpen]=useState(false);

  const coordinates = [41.7658, -72.6734];

  return (

    <div className = {darkMode ? "dark" : ""}>
      <main className=" bg-gray-100 px-10 md:px-20 lg:px-40 dark:bg-gray-900">
      
      <section className=" min-h-screen ">

        {/* Navbar*/}

        <nav className="py-10 mb-12 flex justify-between ">
          <div className='w-full fixed top-0 left-0 bg-gray-200 mb-12'>
            <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
              <div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
                <span className='text-3xl text-teal-600 mr-1 pt pr-2'>
                  <a href="#top">
                    <HiCube/>
                  </a>
                </span>
                  <a href="#top">
                    Abhi
                  </a>
              </div>
          
            {/* Hamburger nav dynamic */}

            <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-black '>
              {open ? <AiOutlineClose className="pb-1" /> : <AiOutlineMenu className="pb-1" />}

            </div>
              <ul className={`max-w-full bg-gray-200 md:flex md:items-center md:pb-0 pb-12 absolute md:static  
              md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all ${open ? 'top-15 ':'top-[-490px]'}`}>
                {
                  Links.map((link)=>(
                    <li key={link.name} className='md:ml-8 lg:text-xl sm:text-sm md:my-0 my-7 '>
                      <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500' onClick={()=>setOpen(!open)}>{link.name}</a>
                    </li>
                  ))
                }
                <li><BsFillMoonStarsFill onClick= {toggleDarkMode}  className=" cursor-pointer lg:text-2xl sm:text-lg lg:ml-16 sm:ml-4 text-black  "/> </li>
              </ul>
            </div>
          </div>
        </nav>
      

        {/* Header info */}
        <div className=" text-center p-10 dark:text-white">

          <h2 className="text-4xl py-2 text-teal-600 font-medium md:text-6xl sm:text-5xl dark:text-yellow-400">Hello!</h2>
          <h2 className=" text-4xl py-2 text-teal-600 font-medium md:text-6xl sm:text-5xl dark:text-yellow-400"> 
            <span>I&apos;m </span>
            <span className={`inline-block dark:text-yellow-400`}> A</span>
            <span className={`inline-block dark:text-yellow-400`}>b</span>
            <span className={`inline-block dark:text-yellow-400`}> h</span>
            <span className={`inline-block dark:text-yellow-400`}> i</span>
            <span className={`inline-block dark:text-yellow-400`}> r</span>
            <span className={`inline-block dark:text-yellow-400`}> a</span>
            <span className={`inline-block dark:text-yellow-400`}> m</span>
            <span></span> {/* Space */}
            <span className={`inline-block dark:text-yellow-400`}>M</span>
            <span className={`inline-block dark:text-yellow-400`}>o</span>
            <span className={`inline-block dark:text-yellow-400`}>t</span>
            <span className={`inline-block dark:text-yellow-400`}>u</span>
            <span className={`inline-block dark:text-yellow-400`}>p</span>
            <span className={`inline-block dark:text-yellow-400`}>a</span>
            <span className={`inline-block dark:text-yellow-400`}>l</span>
            <span className={`inline-block dark:text-yellow-400`}>l</span>
            <span className={`inline-block dark:text-yellow-400`}>i</span>

          </h2>
          <h3 className=" text 2xl py-2 md:text-3xl text-teal-600 dark:text-yellow-400">Software Engineer </h3>
          <p className=" text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-300">CS student and aspiring software engineer. Looking for ways to grow knowledge through industry experience.</p>
        </div>

        <div className=" text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <a href="https://www.linkedin.com/in/abhiram-motupalli-347332228/" target="_blank"><AiFillLinkedin className=" dark:text-white"/></a>
          <a href="https://github.com/amotupalli7" target="_blank"><AiFillGithub  className=" dark:text-white"/></a>
        </div>

      </section>

      
      {/* About Section*/}

      <section id = "about">
        <h3 className=" text-3xl py-1 text-teal-600 dark:text-yellow-400">About Me</h3>
          <p className=" text-md py-5 leading-8 text-gray-500 dark:text-white">
                I am a rising junior at the  
          <span className=" text-teal-500 dark:text-yellow-400 hover:underline hover:underline-offset-8"><a href="https://www.cics.umass.edu/" target="_blank"> University of Massachussetts Amherst</a></span> and member of 
          <span className=" text-teal-500 dark:text-yellow-400 hover:underline hover:underline-offset-8"><a href="https://www.umass.edu/honors/" target="_blank"> Commonwealth Honors College</a>.</span>
        </p>

        <div className=" text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-gray-800 dark:text-gray-300">
          <Image src={umass_logo} width={150} height={150} className=" m-auto"/>
          <h3 className=" text-lg font-medium pt-8 pb-2">B.S. Computer Science | 2025</h3>
          <h4 className=" py-4 text-teal-500 dark:text-yellow-400">Coursework</h4>
          <div className=" grid grid-cols-2 gap-2  ">
            <p className=" text-gray-500 py-1 dark:text-white">Honors Computer Networks</p>
            <p className=" text-gray-500 py-1 dark:text-white">Computer System Principles</p>
            <p className=" text-gray-500 py-1 dark:text-white">Programming Methodologies</p>
            <p className=" text-gray-500 py-1 dark:text-white">Data Structures</p>
            <p className=" text-gray-500 py-1 dark:text-white">Algorithms</p>
            <p className=" text-gray-500 py-1 dark:text-white">Software Engineering</p>
            <p className=" text-gray-500 py-1 dark:text-white">Data Management</p>
            <p className=" text-gray-500 py-1 dark:text-white">Computer & Network Security</p>
          </div>
        </div>
      </section>


      {/* Experience Section*/}

      <section id = "experience">

        <div>
          <h3 className=" text-3xl py-1 text-teal-600 dark:text-yellow-400">Experience</h3>
        </div>
        <div className=" lg:flex gap-10 dark:text-gray-300">
            <div className=" text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-gray-800">
              <Image src={advisor} width={200} height={200} className=" m-auto"/>
              <h3 className=" text-lg font-medium pt-8 pb-2 text-teal-600 dark:text-yellow-400">Advisor360</h3>
              <p className=" py-2 text-teal-600 dark:text-yellow-400">Software Engineer Intern</p>
              <h4 className=" py-4 text-teal-500 dark:text-yellow-400">June 2023 - Current</h4>
              <ul className=" list-none text-gray-500 py-1 dark:text-white px-10"> 
                <li className="  py-4">.NET | C# | SQL | Jenkins | Jira | Git | CI/CD </li>        
              </ul>
            </div>

            <div className=" text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-gray-800">
              <Image src={alexion} width={200} height={200} className=" m-auto"/>
              <h3 className=" text-lg font-medium pt-8 pb-2 text-teal-600 dark:text-yellow-400">Alexion (AstraZeneca Rare Disease)</h3>
              <p className=" py-2 text-teal-600 dark:text-yellow-400">IT Software Engineer Intern</p>
              <h4 className=" py-4 text-teal-500 dark:text-yellow-400">June 2022 - August 2022</h4>
              <ul className=" list-none text-gray-500 py-1 dark:text-white px-10">
                <li className=" py-4"> Python | Docker | Databases | REST API&apos;s | Agile </li>        
              </ul>
            </div>

        </div>
      </section>


      {/* Projects Section*/}
      
      <section id = "projects">
        <div className=" dark:text-white">
          <h3 className=" text-3xl py-1 text-teal-600 dark:text-yellow-400">Projects</h3>
        </div>

        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className=" basis-1/3 flex-1 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800 dark:text-gray-300">
            <h2 className=" text-2xl font-medium pb-5 text-teal-600 dark:text-yellow-400">Snap Sudoku</h2>
            <p className=" text-sm text-left pb-5 text-gray-500 dark:text-white">Participated in HackUMass IX creating a Sudoku solver app, ended up winning best use of AWS.</p>
            <a href="https://fuseumass.github.io/HackUMass-IX-Projects/34.html" target="_blank">
              <Image src={SnapSudoku}className=" rounded-lg object-cover" width={"100%"} height={"100%"}></Image>
            </a>
          </div>


          <div className=" basis-1/3 flex-1 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800 dark:text-gray-300">
            <h2 className=" text-2xl font-medium pb-5 text-teal-600 dark:text-yellow-400">MoodMix</h2>
            <p className=" text-sm text-left pb-5 text-gray-500 dark:text-white">Collaborated with friends to develop a captivating mobile app that curates a personalized playlist and movie based on someones mood.</p>
            <a href="https://dashboard.hackher413.com/projects/9" target="_blank">
            <Image src={MoodMix1} className=" rounded-lg object-contain " width={"100%"} height={"100%"} style={{ maxWidth: '100%', maxHeight: '100%' }}></Image>
            </a>
          </div>

          <div className=" basis-1/3 flex-1 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800 dark:text-gray-300">
            <h2 className=" text-2xl font-medium pb-5 text-teal-600 dark:text-yellow-400">Quantitative Trading Tools</h2>
            <p className=" text-sm text-left pb-2 text-gray-500 dark:text-white">Innovated various quantitative tools to assist personal trading. This code is proprietary to me but you can reach out to me for more details.</p>
            <a href="https://polygon.io/" target="_blank">
              <Image src={Stocks}className=" rounded-lg object-cover" width={"100%"} height={"100%"}></Image>
            </a>
          </div>

          <div className=" basis-1/3 flex-1 text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-800 dark:text-gray-300">
            <h2 className=" text-2xl font-medium pb-5 text-teal-600 dark:text-yellow-400">Clue Game</h2>
            <p className=" text-sm text-left pb-5 text-gray-500 dark:text-white">Developed a text based clue game in the C programming language as part of my systems class.</p>
            <a href="https://github.com/amotupalli7/Clue" target="_blank">
              <Image src={Clue}className=" rounded-lg object-cover mx-auto" width={"100%"} height={"100%"}></Image>
            </a>
          </div>

          <div className=" basis-1/3 flex-1 text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-800 dark:text-gray-300">
            <h2 className=" text-2xl font-medium pb-5 text-teal-600 dark:text-yellow-400">Portfolio Website</h2>
            <p className=" text-sm pb-5 text-gray-500 dark:text-white">Designed this web and mobile compatible porfolio website using React, Next.js and Node.js.</p>
            <a href="https://github.com/amotupalli7/portfolio" target="_blank">
              <Image src={Website}className=" rounded-lg object-cover lg:mx-auto" width={"100%"} height={"100%"}></Image>
            </a>
          </div>

        </div>

        
      </section>


    {/* Contact Section*/}
    <section id = "contact">
      
        <h3 className=" text-3xl py-1 text-teal-600 dark:text-yellow-400">Contact Me</h3>

        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1 text-left shadow-lg p-10 rounded-xl dark:bg-gray-800 dark:text-gray-300">
        <p className="text-gray-500 dark:text-white text-lg pb-5">I am currently interested in any internships or co-op opportunities that will enhance my education and
          allow me to provide value. I am currently located in the Hartford County region in Connecticut but am open to working anywhere!
        </p>
        <p className="text-gray-500 dark:text-white text-lg">Feel free to reach out to me by email or through my LinkedIn below.</p>

        <div className="flex flex-col items-center mt-5 sm:mt-0 sm:flex-row sm:items-center text-gray-500 dark:text-white">
          <a href="mailto:sspmam@gmail.com" className="whitespace-nowrap">
            <AiOutlineMail className="lg:text-5xl my-2 mx-2 sm:text-xl sm:mx-0 sm:px-0" />
          </a>
          <a href="mailto:sspmam@gmail.com" className="whitespace-nowrap text-gray-500 dark:text-white">sspmam@gmail.com</a>

          <div className="flex items-center mt-5 sm:mt-0 sm:ml-10 text-gray-500 dark:text-white">
            <a href="https://www.linkedin.com/in/abhiram-motupalli-347332228/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin className="lg:text-5xl sm:text-xl sm:mx-0" />
            </a>
            <a href="https://www.linkedin.com/in/abhiram-motupalli-347332228/" target="_blank" rel="noopener noreferrer" className="text-md">
              LinkedIn
            </a> {/* Replace with your actual LinkedIn profile URL */}
          </div>
        </div>
</div>


        {/* Map Section*/}

          {/* <div className=" basis-1/3 flex-1 text-center shadow-lg p-10 rounded-xl  dark:bg-gray-800 dark:text-gray-300">
            <div style={{ height: '400px', width: '100%' }}>
              <MapContainer
                center={coordinates}
                zoom={13}
                style={{ height: '100%', width: '100%' }}
              >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
              />
              <Marker position = {coordinates}>
              <Popup autoOpen>
                This is my school!
              </Popup>
              </Marker>
          </MapContainer>
        </div>
          </div> */}
        </div>
    </section>

    </main>
    </div>
  );
}
