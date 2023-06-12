import Head from "next/head";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from "react-icons/ai";
import Image from "next/image";
import deved from "/Users/sspma/OneDrive/Desktop/react-portfolio-website/public/dev-ed-wave.png"
import design from "/Users/sspma/OneDrive/Desktop/react-portfolio-website/public/design.png"
import code from "/Users/sspma/OneDrive/Desktop/react-portfolio-website/public/code.png"
import consulting from "/Users/sspma/OneDrive/Desktop/react-portfolio-website/public/consulting.png"
export default function Home() {
  return (

    <main className=" bg-white px-10">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className=" text-xl font-burtons">Developedbyabhi</h1>
          <ul className="flex items-center">
            <li className=" cursor-pointer text-2xl"><BsFillMoonStarsFill/> </li>
            <li><a href="#" className=" bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8">Resume</a></li>
          </ul>
        </nav>

        <div className=" text-center p-10">
          <h2 className=" text-5xl py-2 text-teal-600 font-medium">Abhi Motupalli</h2>
          <h3 className=" text 2xl py-2">Software Engineer</h3>
          <p className=" text-md py-5 leading-8 text-gray-800">Aspiring software engineer. Looking for ways to grow knowledge through industry experience.</p>
        </div>

        <div className=" text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillYoutube />
        </div>

        <div className="">
          <Image src={deved} className=" relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden"></Image>
        </div>
      </section>

      <section>
        <div>
          <h3 className=" text-3xl py-1">Services I offer</h3>
          <p className=" text-md py-5 leading-8 text-gray-800">
            I am a rising junior at the <span className=" text-teal-500">University of Massachussetts Amherst</span>.
          </p>
        </div>
        <div>
          <div className=" text-center shadow-lg rounded-xl">
            <div className="mx-auto">
              <Image src={design} width={100} height={100}/>
            </div>
            <h3 className=" text-lg font-medium pt-8 pb-2">Beatiful Designs</h3>
            <p className=" py-2">Creating elegant suited for you needs</p>
            <h4 className=" py-4 text-teal-500">Design tools I use</h4>
            <p className=" text-gray-500">Photoshop</p>
            <p className=" text-gray-500">Illustrator</p>
            <p className=" text-gray-500">FIgma</p>

          </div>
        </div>
      </section>

    </main>
  );
}
