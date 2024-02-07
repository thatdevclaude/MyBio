/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import type { MetaFunction } from "@remix-run/node";
import { NavLink, Outlet } from "@remix-run/react";
import { SiReaddotcv } from "react-icons/si";
import { FaProjectDiagram, FaUserTie } from "react-icons/fa";


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
      icon: <FaUserTie size={20} className="font-bold text-white"/>, text: "Me"
    },
    {
      page: "/home/projects",
      icon: <FaProjectDiagram size={20} className="font-bold text-white"/>, text: "Projects"
    },
    {page: "/home/resume", icon:  <SiReaddotcv size={20} className="font-bold text-white"/>,   text:"Resume"},
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
                <p className="text-white">{nav.text}</p>
              </NavLink>
            </li>
          ))}

        </ul>
      </div>

      <Outlet />

      

    </div>

  );
}
