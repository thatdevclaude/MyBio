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

          
        
    <div class="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 class="text-3xl font-bold text-center text-blue-600 mb-4">
            Software Engineer Specializing in Java (Spring Boot), Angular, Python (PyQt), and Flutter
        </h1>

        <p class="italic text-center text-gray-500 mb-6">
            "I turn coffee into code, and code into tools people actually use."
        </p>

        <section class="mb-6">
            <h2 class="text-2xl font-semibold text-blue-500 mb-2">🛠️ What I Do</h2>
            <ul class="list-disc list-inside space-y-2">
                <li><b>Build Scalable Backends:</b> Spring Boot APIs that survive Black Friday traffic (and junior devs).</li>
                <li><b>Design Human-Friendly Frontends:</b> Angular apps so intuitive, even your non-tech clients stop complaining.</li>
                <li><b>Ship Mobile Magic:</b> Flutter apps for field teams who’d rather work than fight buggy software.</li>
            </ul>
        </section>

        <section class="mb-6">
            <h2 class="text-2xl font-semibold text-blue-500 mb-2">🏆 Proudest Moments</h2>
            <ul class="list-disc list-inside space-y-2">
                <li>Reduced API latency by 40% for a healthcare app (yes, Redis helped—but so did my 3 AM sanity checks).</li>
                <li>Modernized 3 legacy Angular apps to v16+. Users didn’t notice… and that’s the compliment.</li>
                <li>Built a Flutter app in 10 days for technicians using duct-taped iPads. Now 200+ people use it daily.</li>
            </ul>
        </section>

        <section class="mb-6">
            <h2 class="text-2xl font-semibold text-blue-500 mb-2">🌟 Why Work With Me?</h2>
            <ul class="list-disc list-inside space-y-2">
                <li>"I break down tech debt like it’s a piñata—except the candy’s actually useful."</li>
                <li>"I ship fast, but I test first (most of the time)."</li>
                <li>"I ask ‘Why?’ until your requirements cry uncle."</li>
            </ul>
        </section>

        <section class="mb-6">
            <h2 class="text-2xl font-semibold text-blue-500 mb-2">💬 Human Stuff</h2>
            <ul class="list-disc list-inside space-y-2">
                <li>My toxic trait: Refactoring during code reviews. (Sorry.)</li>
                <li>Secret superpower: Explaining technical debt to CEOs using car analogies.</li>
                <li>Current obsession: AI-generated haikus about Java exceptions.</li>
                <li>My mom uses an app I built. Voluntarily.</li>
            </ul>
        </section>

        <section class="mb-6">
            <h2 class="text-2xl font-semibold text-blue-500 mb-2">📩 Let’s Team Up If…</h2>
            <ul class="list-disc list-inside space-y-2">
                <li>Your codebase needs a therapist (or a fire extinguisher).</li>
                <li>You want features that scale, not just deploy.</li>
                <li>You think “user-friendly” and “Spring Boot” belong in the same sentence.</li>
            </ul>
        </section>
    </div>

       </div>

        <div>
        </div>





      </div>





    </div>

  );
}
