/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import type { MetaFunction } from "@remix-run/node";
import { NavLink, Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "NIYONZIMA" },
    { name: "description", content: "Jean Claude Niyonzima" },
  ];
};

export default function Home() {

  const navs = [
    {
      page: "/home/about",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, text: "Me"
    },
    {
      page: "/home/projects",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>, text: "Projects"
    },
    // {page: "/Cv", icon:  "Cv", text:"Cv"},
  ]

  return (
    // all page
    <div className="p-0 m-0 h-full w-full ">
      {/* menu */}
      <div className="navbar w-full justify-center ">
        <ul className="menu  menu-horizontal  rounded-box space-x-2 bg-black">

          {navs.map((nav, index) => (
            <li key={index}>

              <NavLink to={nav.page}>
                {nav.icon}
                {nav.text}
              </NavLink>
            </li>
          ))}

        </ul>
      </div>

      <Outlet />

      

    </div>

  );
}
