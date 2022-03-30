import React, { useState } from "react";
import Link from "./../Link/Link";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", link: "/home" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Project", link: "/projects" },
    { id: 3, name: "News", link: "/news" },
    { id: 4, name: "Gallery", link: "/gallery" },
  ];
  return (
    <nav className="bg-green-600">
      <div onClick={() => setOpen(!open)} className="w-6 h-6 md:hidden">
        {open ? <XIcon /> : <MenuIcon />}
      </div>
      <ul
        className={`md:flex  bg-green-600 w-full md:static justify-content-center absolute duration-500 ease-in ${
          open ? 'top-6' : 'top-[-200px]'
        }`}
      >
        {routes.map((route) => (
          <Link id={route.id} route={route} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
