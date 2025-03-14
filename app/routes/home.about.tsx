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

          
            <p><strong><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">Software Engineer</span></strong><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">&nbsp;specializing in&nbsp;</span><strong><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">Java (Spring Boot)</span></strong><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">,&nbsp;</span><strong><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">Angular</span></strong><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">,&nbsp;</span><strong><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">Python(PyQt)&nbsp;</span></strong><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">and&nbsp;</span><strong><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">Flutter</span></strong><strong><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;"><br></span></strong><em><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">&ldquo;I turn coffee into code, and code into tools people</span></em><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">&nbsp;actually&nbsp;</span><em><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">use.&rdquo;</span></em></p>
<p><br></p>
<hr>
<p><br></p>
<h4><span style="color:#333333;font-size:11.0pt;font-family:Georgia,serif;">🛠️&nbsp;</span><strong><span style="color:#333333;font-size:11.0pt;font-family:Georgia,serif;">What I Do</span></strong></h4>
<ul>
    <li style="list-style-type:disc;color:#333333;font-size:10.5pt;font-family:Georgia,serif;">
        <p><strong><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">Build Scalable Backends</span></strong><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">: Spring Boot APIs that survive Black Friday traffic (and junior devs).</span></p>
    </li>
    <li style="list-style-type:disc;color:#333333;font-size:10.5pt;font-family:Georgia,serif;">
        <p><strong><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">Design Human-Friendly Frontends</span></strong><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">: Angular apps so intuitive, even your&nbsp;</span><em><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">non-tech</span></em><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">&nbsp;clients stop complaining.</span></p>
    </li>
    <li style="list-style-type:disc;color:#333333;font-size:10.5pt;font-family:Georgia,serif;">
        <p><strong><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">Ship Mobile Magic</span></strong><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">: Flutter apps for field teams who&rsquo;d rather&nbsp;</span><em><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">work</span></em><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">&nbsp;than fight buggy software.</span></p>
    </li>
</ul>
<h4><span style="color:#333333;font-size:11.0pt;font-family:Georgia,serif;">🏆&nbsp;</span><strong><span style="color:#333333;font-size:11.0pt;font-family:Georgia,serif;">Proudest Moments</span></strong></h4>
<ul>
    <li style="list-style-type:disc;color:#333333;font-size:10.5pt;font-family:Georgia,serif;">
        <p><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">Reduced API latency&nbsp;</span><strong><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">by 40%</span></strong><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">&nbsp;for a healthcare app (yes, Redis helped&mdash;but so did my 3 AM sanity checks).</span></p>
    </li>
    <li style="list-style-type:disc;color:#333333;font-size:10.5pt;font-family:Georgia,serif;">
        <p><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">Modernized&nbsp;</span><strong><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">3 legacy Angular apps</span></strong><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">&nbsp;to v16+. Users didn&rsquo;t notice&hellip;&nbsp;</span><em><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">and that&rsquo;s the compliment</span></em><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">.</span></p>
    </li>
    <li style="list-style-type:disc;color:#333333;font-size:10.5pt;font-family:Georgia,serif;">
        <p><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">Built a Flutter app in&nbsp;</span><strong><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">10 days</span></strong><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">&nbsp;for technicians using duct-taped iPads. Now 200+ people use it daily.</span></p>
    </li>
</ul>
<h4><span style="color:#333333;font-size:11.0pt;font-family:Georgia,serif;">🌟&nbsp;</span><strong><span style="color:#333333;font-size:11.0pt;font-family:Georgia,serif;">Why Work With Me?</span></strong></h4>
<ul>
    <li style="list-style-type:disc;color:#333333;font-size:10.5pt;font-family:Georgia,serif;">
        <p><strong><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">&ldquo;I break down tech debt like it&rsquo;s a pi&ntilde;ata</span></strong><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">&mdash;except the candy&rsquo;s actually useful.&rdquo;</span></p>
    </li>
    <li style="list-style-type:disc;color:#333333;font-size:10.5pt;font-family:Georgia,serif;">
        <p><strong><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">&ldquo;I ship fast, but I test first</span></strong><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">&nbsp;(most of the time).&rdquo;</span></p>
    </li>
    <li style="list-style-type:disc;color:#333333;font-size:10.5pt;font-family:Georgia,serif;">
        <p><strong><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">&ldquo;I ask &lsquo;Why?&rsquo;</span></strong><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">&nbsp;until your requirements cry uncle.&rdquo;</span></p>
    </li>
</ul>
<p><br></p>
<hr>
<p><br></p>
<h3><span style="color:#333333;font-size:13.0pt;font-family:Georgia,serif;">💬&nbsp;</span><strong><span style="color:#333333;font-size:13.0pt;font-family:Georgia,serif;">Human Stuff</span></strong></h3>
<ul>
    <li style="list-style-type:disc;color:#333333;font-size:10.5pt;font-family:Georgia,serif;">
        <p><strong><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">My toxic trait</span></strong><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">: Refactoring&nbsp;</span><em><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">during</span></em><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">&nbsp;code reviews. (Sorry.)</span></p>
    </li>
    <li style="list-style-type:disc;color:#333333;font-size:10.5pt;font-family:Georgia,serif;">
        <p><strong><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">Secret superpower</span></strong><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">: Explaining technical debt to CEOs using&nbsp;</span><em><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">car analogies</span></em><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">.</span></p>
    </li>
    <li style="list-style-type:disc;color:#333333;font-size:10.5pt;font-family:Georgia,serif;">
        <p><strong><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">Current obsession</span></strong><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">: AI-generated haikus about Java exceptions.</span></p>
    </li>
    <li style="list-style-type:disc;color:#333333;font-size:10.5pt;font-family:Georgia,serif;">
        <p><strong><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">My mom uses an app I built</span></strong><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">.&nbsp;</span><em><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">Voluntarily</span></em><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">.</span></p>
    </li>
</ul>
<p><br></p>
<hr>
<p><br></p>
<h4><span style="color:#333333;font-size:11.0pt;font-family:Georgia,serif;">📩&nbsp;</span><strong><span style="color:#333333;font-size:11.0pt;font-family:Georgia,serif;">Let&rsquo;s Team Up If&hellip;</span></strong></h4>
<ul>
    <li style="list-style-type:disc;color:#333333;font-size:10.5pt;font-family:Georgia,serif;">
        <p><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">Your codebase needs a&nbsp;</span><strong><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">therapist</span></strong><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">&nbsp;(or a fire extinguisher).</span></p>
    </li>
    <li style="list-style-type:disc;color:#333333;font-size:10.5pt;font-family:Georgia,serif;">
        <p><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">You want features that&nbsp;</span><strong><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">scale</span></strong><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">, not just&nbsp;</span><em><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">deploy</span></em><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">.</span></p>
    </li>
    <li style="list-style-type:disc;color:#333333;font-size:10.5pt;font-family:Georgia,serif;">
        <p><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">You think &ldquo;user-friendly&rdquo; and &ldquo;Spring Boot&rdquo;&nbsp;</span><em><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">belong in the same sentence</span></em><span style="color:#333333;font-size:10.5pt;font-family:Georgia,serif;">.</span></p>
    </li>
</ul>
<p><br></p>
<p><br></p>
            </p>


        div>

        <div>
        </div>





      </div>





    </div>

  );
}
