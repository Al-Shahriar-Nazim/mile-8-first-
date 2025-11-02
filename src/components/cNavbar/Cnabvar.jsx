import React, { useState } from "react";
import Link from "./link";
import { Menu, X } from "lucide-react";
const urls = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Contact", path: "/contact" },
  { id: 5, name: "Blog", path: "/blog" },
];

const Cnabvar = () => {
  const [open, setOpen] = useState(false);
  const links = urls.map((route) => <Link route={route}></Link>);

  return (
    <nav className="flex  justify-between mx-10">
      <span className="flex" onClick={() => setOpen(!open)}>
        {open ? (
          <X className="md:hidden"></X>
        ) : (
          <Menu className="md:hidden"></Menu>
        )}
        <ul className={`md:hidden absolute  text-black
         bg-amber-200 duration-1000
            ${open?'top-8':'-top-64'}
            `}>{links}</ul>

        <h3 className="ml-4">My Navbar</h3>
      </span>
      {/* <ul className='flex'>
                <li><a className ="mr-10"  href="/">Home</a></li>
                <li><a  className ="mr-10" href="/about">About</a></li>
                <li><a className ="mr-10" href="/blog">Blog</a></li>
            </ul> */}

      {/* way - 2 */}
      {/* <ul>
                {
                    urls.map(route=><li><a href={route.path}>{route.name}</a></li>)
                }
            </ul> */}

      {/* way-3 external  file */}
      <ul className="md:flex hidden">{links}</ul>
      <button className="btn btn-ghost">Sing-in</button>
    </nav>
  );
};

export default Cnabvar;
