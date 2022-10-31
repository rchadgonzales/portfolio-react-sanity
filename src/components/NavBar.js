import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-red-700">
      <div className="container mx-auto flex ml-10 justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-red-200 text-4xl font-bold cursive tracking-widest"
          >
            Richard
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-red-300"
            activeClassName="text-red-100 bg-red-800"
          >
            Blog Post
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-red-300"
            activeClassName="text-red-100 bg-red-800"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-red-300"
            activeClassName="text-red-100 bg-red-800"
          >
            About
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6 mr-10">
          <SocialIcon
            url="https://twitter.com"
            className="mr-4 pr-12"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://youtube.com"
            className="mr-4 pr-12"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://linkedin.com"
            className="mr-10 pr-12"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
