/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import type { MetaFunction } from "@remix-run/node";
import { NavLink } from "@remix-run/react";


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
          <img src="/Passport_photo-Claude.png" />
        </div>
      </div>
    </div>

    {/* links */}
    <nav>
          <div className="grid grid-flow-col gap-4 bg-black p-2 rounded-lg">
            <NavLink className="hover:text-sky-500 duration-200 rounded-full" to={""}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></NavLink>
            <NavLink className="hover:text-red-500 duration-200 rounded-full" to={""}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></NavLink>
            <NavLink className="hover:text-blue-500 duration-200 rounded-full" to={""}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></NavLink>
          </div>
        </nav>
    {/* bio */}
    <div className="p-2 shadow-lg shadow-primary rounded-md bg-black">

      <div className="prose min-w-full">
        <p className="lead">Hey there!  </p>

        <p>
          My name is <strong><em ><code className="text-primary ">Jean Claude NIYONZIMA</code></em></strong> I am <em><code>28 years old</code> </em> born and raised in Rwanda <code>🇷🇼</code>
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
