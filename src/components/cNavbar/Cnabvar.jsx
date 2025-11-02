import React from "react";
import Link from "./link";
const urls = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Contact", path: "/contact" },
  { id: 5, name: "Blog", path: "/blog" },
];

const Cnabvar = () => {
  return (
    <nav>
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
      <ul className="flex">
        {urls.map((route) => (
          <Link route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Cnabvar;
