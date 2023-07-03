
'use client'
import Head from "next/head";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub} from "react-icons/ai";
import React, { useState } from "react";
import Image from "next/image";

import deved from "../../public/dev-ed-wave.png"
import design from "../../public/design.png"
import code from "../../public/code.png"
import consulting from "../../public/consulting.png"
import abhipic from "../../public/abhipic.jpg"
import umass_logo from "../../public/umass_logo.png"
import advisor from "../../public/advisor.png"

import web1 from "../../public/web1.png"
import web2 from "../../public/web2.png"
import web3 from "../../public/web3.png"
import web4 from "../../public/web4.png"
import web5 from "../../public/web5.png"
import web6 from "../../public/web6.png"
import { Damion } from "next/font/google";

{/* */}

export default function Home() {

  const [darkMode,setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };



  return (
    <div className = {darkMode ? "dark" : ""}>
    <main className=" bg-gray-100 px-10 md:px-20 lg:px-40 dark:bg-gray-900">
      
      {/* Navbar */}
      <section className="min-h-screen ">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className=" text-xl dark:text-white">Abhi's Website</h1>
          <ul className="flex items-center">
            <li><BsFillMoonStarsFill onClick= {toggleDarkMode}  className=" cursor-pointer text-2xl dark:text-white"/> </li>
            <li><a href="#" className=" bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8">Resume</a></li>
          </ul>
        </nav>

        {/* Header info */}
        <div className=" text-center p-10 dark:text-white">


          <h2 className=" text-4xl py-2 text-teal-600 font-medium md:text-6xl sm:text-5xl">      

            <span className={`inline-block dark:text-white hover:text-gold transition-colors duration-300`}> A</span>
            <span className={`inline-block dark:text-white`}> b</span>
            <span className={`inline-block dark:text-white`}> h</span>
            <span className={`inline-block dark:text-white`}> i</span>
            <span>&nbsp;</span> {/* Space */}
            <span className={`inline-block dark:text-white`}>M</span>
            <span className={`inline-block dark:text-white`}>o</span>
            <span className={`inline-block dark:text-white`}>t</span>
            <span className={`inline-block dark:text-white`}>u</span>
            <span className={`inline-block dark:text-white`}>p</span>
            <span className={`inline-block dark:text-white`}>a</span>
            <span className={`inline-block dark:text-white`}>l</span>
            <span className={`inline-block dark:text-white`}>l</span>
            <span className={`inline-block dark:text-white`}>i</span>

          </h2>
          <h3 className=" text 2xl py-2 md:text-3xl">Software Engineer</h3>
          <p className=" text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-300">Aspiring software engineer. Looking for ways to grow knowledge through industry experience.</p>
        </div>

        <div className=" text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <a href="https://www.linkedin.com/in/abhiram-motupalli-347332228/" target="_blank"><AiFillLinkedin className=" dark:text-white"/></a>
          <a href="https://github.com/amotupalli7" target="_blank"><AiFillGithub  className=" dark:text-white"/></a>
        </div>

        <div className=" relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 mt-50 overflow-hidden md:h-96 md:w-96">
          <Image src={abhipic} layout="fill" objectFit="cover"></Image>
        </div>
      </section>
      
      {/* Education Section*/}
      <section>
        <h3 className=" text-3xl py-1 dark:text-white">Education</h3>
        <p className=" text-md py-5 leading-8 text-gray-800 dark:text-gray-300">
              I am a rising junior at the <span className=" text-teal-500"><a href="https://www.cics.umass.edu/" target="_blank">University of Massachussetts Amherst</a></span> and part of the <span className=" text-teal-500"><a href="https://www.umass.edu/honors/" target="_blank">Commonwealth Honors College</a>.</span>
        </p>

        <div className=" text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-gray-800 dark:text-gray-300">
              <Image src={umass_logo} width={150} height={150} className=" m-auto"/>
              <h3 className=" text-lg font-medium pt-8 pb-2">B.S. Computer Science</h3>
              <p className=" py-2">Class of 2025</p>
              <h4 className=" py-4 text-teal-500">Relevant Coursework</h4>
              <div className=" grid grid-cols-2 gap-2  ">
                <p className=" text-gray-500 py-1 dark:text-white">CS453H: Honors Computer Networks</p>
                <p className=" text-gray-500 py-1 dark:text-white">CS250: Intro to Computation</p>
                <p className=" text-gray-500 py-1 dark:text-white">CS240: Reasoning Under Uncertainty</p>
                <p className=" text-gray-500 py-1 dark:text-white">CS230: Computer Systems</p>
                <p className=" text-gray-500 py-1 dark:text-white">CS220: Programming Methodology</p>
                <p className=" text-gray-500 py-1 dark:text-white">MATH 233: Multivariate Calc</p>
                <p className=" text-gray-500 py-1 dark:text-white">MATH 132H: Honors Calc II</p>
                <p className=" text-gray-500 py-1 dark:text-white">MATH 235: Linear Algebra</p>
              </div>

              <h4 className=" py-4 text-teal-500">Upcoming Coursework: Fall 2023</h4>
                <div className=" grid grid-cols-2 gap-2">
                <p className=" text-gray-500 py-1">CS311: Algorithms</p>
                <p className=" text-gray-500 py-1">CS320: Software Engineering</p>
                <p className=" text-gray-500 py-1">CS345: Data Management</p>
                <p className=" text-gray-500 py-1">CS360: Computer & Network Security</p>
                </div>

            </div>
      </section>


      {/* Experience Section*/}
      <section>
        <div>
          <h3 className=" text-3xl py-1 dark:text-white">Experience</h3>
 
        </div>
        
        <div className=" lg:flex gap-10 dark:text-gray-300">

            <div className=" text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-gray-800">
              <Image src={advisor} width={100} height={100} className=" m-auto"/>
              <h3 className=" text-lg font-medium pt-8 pb-2">Advisor360</h3>
              <p className=" py-2">Software Engineer Intern</p>
              <h4 className=" py-4 text-teal-500">June 2023 - Current</h4>
              <p className=" text-gray-500 py-1">Photoshop</p>
              <p className=" text-gray-500 py-1">Illustrator</p>
              <p className=" text-gray-500 py-1">FIgma</p>
            </div>

            <div className=" text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-gray-800">
              <Image src={code} width={100} height={100} className=" m-auto"/>
              <h3 className=" text-lg font-medium pt-8 pb-2">Alexion Pharmaceuticals</h3>
              <p className=" py-2">IT Software Engineer Intern</p>
              <h4 className=" py-4 text-teal-500">May 2022 - August 2022</h4>
              <p className=" text-gray-500 py-1">Photoshop</p>
              <p className=" text-gray-500 py-1">Illustrator</p>
              <p className=" text-gray-500 py-1">FIgma</p>
            </div>

        </div>
      </section>

      <section>
        <div className="dark:text-white">
          <h3 className=" text-3xl py-1">Projects</h3>
          <p className=" text-md py-5 leading-8 text-gray-800 dark:text-gray-300">
            I have had a few prior internship experiences including.
          </p>
        </div>

        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className=" basis-1/3 flex-1"><Image src={web3} className=" rounded-lg object-cover" width={"100%"} height={"80%"} layout="responsive"></Image></div>
          <div className=" basis-1/3 flex-1"><Image src={web4} className=" rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"></Image></div>
          <div className=" basis-1/3 flex-1"><Image src={web2} className=" rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"></Image></div>
          <div className=" basis-1/3 flex-1"><Image src={web5} className=" rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"></Image></div>
          <div className=" basis-1/3 flex-1"><Image src={web1} className=" rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"></Image></div>
          <div className=" basis-1/3 flex-1"><Image src={web6} className=" rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"></Image></div>

        </div>
      </section>

    </main>
    </div>
  );
}
