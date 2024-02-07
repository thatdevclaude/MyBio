/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import type { MetaFunction } from "@remix-run/node";
import { NavLink } from "@remix-run/react";
import { FaXTwitter } from "react-icons/fa6";


export const meta: MetaFunction = () => {
  return [
    { title: "NIYONZIMA" },
    { name: "description", content: "Jean Claude Niyonzima" },
  ];
};

export default function About() {



  return (
    <div className="flex flex-col space-y-5 justify-center items-center w-full h-full p-5 m-1 ">
      {/* profile photo */}


      <div className="avatar mb-10">
        <div className=" w-36 rounded-full min-w-fit ring ring-sky-400 shadow-lg shadow-sky-500">

          <div className=" min-w-fit">
            <img src="/claude.png" />
          </div>
        </div>
      </div>

      {/* links */}
      <nav>
        <div className="grid grid-flow-col gap-4 bg-black p-2 rounded-lg items-center">
          <NavLink  to={"https://twitter.com/NiJeanClaude"}>
            {/* <img src="/twiter.svg" alt="" className=""/> */}
            <FaXTwitter size={25}/>

          </NavLink>
          <NavLink className="hover:text-red-500 duration-200 rounded-full w-8" to={""}
          
          onClick={(e) => {
              window.location.href = "mailto:jeanclaude96niyo@gmail.com";
              e.preventDefault();
          }}
          >
            
            <img src="/gmail.svg" alt=""/>
          </NavLink>
          <NavLink className="hover:text-blue-500 duration-200 rounded-full w-8" to={"https://wa.me/250782292816"}>
            <img src="/whatsapp.svg" alt="" />
          </NavLink>

          <NavLink className="hover:text-blue-500 duration-200 rounded-full w-8" to={""}>
            <img src="/linkedin.svg" alt="" />
          </NavLink>
        </div>
      </nav>
      {/* bio */}
      <div className="p-2 shadow-lg shadow-primary rounded-md bg-black">

        <div className="prose min-w-full">
          <p className="lead">Hey there!</p>

          <p>
            My name is <strong><em ><code className="text-primary ">Jean Claude NIYONZIMA</code></em></strong> I am <em><code>28 years old</code> </em> born and raised in Rwanda <code>🇷🇼</code>.
            <p>I am a passionate tech aficionado with a childhood deeply influenced by the hums of military machinery. Growing up in the dynamic world of military technology, courtesy of my father's role as a skilled technician, I found myself captivated by the allure of innovation.</p>

            <p>From an early age, I couldn't resist the temptation to tinker with gadgets and dismantle anything that came my way. My curious mind naturally led me to the world of Science, where I laid the groundwork for my journey. High school was my playground for mastering the trio of brilliance - Physics, Chemistry, and Mathematics. I embraced these subjects not just as academic pursuits but as the building blocks of my tech-fueled dreams.</p>

            <p>University life beckoned, and I answered the call by diving headfirst into the realm of Computer Science. Here, the lines of code became my poetic verses, and algorithms transformed into my artistic expressions. Studying Computer Science was not just an academic pursuit; it was a continuation of a lifelong love affair with technology.</p>

            <p>As I navigated the fascinating landscapes of programming languages and digital architectures, I couldn't help but reflect on the invaluable lessons learned from my father's military background. Precision, discipline, and a knack for problem-solving were not just academic virtues but the very essence of my upbringing.</p>

            <p>Fast forward to today, and I find myself at the intersection of passion and profession, blending the inquisitive spirit of my childhood with the structured knowledge gained through formal education. Whether I'm coding up a storm or unraveling the intricacies of cutting-edge tech, I'm living the dream that started in the workshop of my military-technician father.</p>
          </p>

        </div>

        <div>
        </div>





      </div>





    </div>

  );
}
