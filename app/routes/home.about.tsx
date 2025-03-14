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

          <NavLink className="hover:text-blue-500 duration-200 rounded-full w-8" to={"https://www.linkedin.com/in/jean-claude-niyonzima-125089271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}>
            <img src="/linkedin.svg" alt="" />
          </NavLink>
        </div>
      </nav>
      {/* bio */}
      <div className="p-2 shadow-lg shadow-primary rounded-md bg-black">

        <div className="prose min-w-full">
          <p className="lead">Hey there 🖐</p>

          <p>
            My name is <strong><em ><code className="text-primary ">Jean Claude NIYONZIMA</code></em></strong>.

            <p>
            Software Engineer specializing in Java (Spring Boot), Angular, Python(PyQt) and Flutter
“I turn coffee into code, and code into tools people actually use.”

🛠️ What I Do
Build Scalable Backends: Spring Boot APIs that survive Black Friday traffic (and junior devs).
Design Human-Friendly Frontends: Angular apps so intuitive, even your non-tech clients stop complaining.
Ship Mobile Magic: Flutter apps for field teams who’d rather work than fight buggy software.
🏆 Proudest Moments
Reduced API latency by 40% for a healthcare app (yes, Redis helped—but so did my 3 AM sanity checks).
Modernized 3 legacy Angular apps to v16+. Users didn’t notice… and that’s the compliment.
Built a Flutter app in 10 days for technicians using duct-taped iPads. Now 200+ people use it daily.
🌟 Why Work With Me?
“I break down tech debt like it’s a piñata—except the candy’s actually useful.”
“I ship fast, but I test first (most of the time).”
“I ask ‘Why?’ until your requirements cry uncle.”

💬 Human Stuff
My toxic trait: Refactoring during code reviews. (Sorry.)
Secret superpower: Explaining technical debt to CEOs using car analogies.
Current obsession: AI-generated haikus about Java exceptions.
My mom uses an app I built. Voluntarily.

📩 Let’s Team Up If…
Your codebase needs a therapist (or a fire extinguisher).
You want features that scale, not just deploy.
You think “user-friendly” and “Spring Boot” belong in the same sentence.


            </p>
            </p>

        </div>

        <div>
        </div>





      </div>





    </div>

  );
}
