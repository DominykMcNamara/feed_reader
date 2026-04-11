import { useState } from "react";
import Logo from "./Logo";

function NavBar({ links }: { links: string[] }) {
  const [signedIn] = useState(false);
  return (
    <nav className="w-full h-16 flex items-center px-8 justify-between">
      <Logo />
      {signedIn ? (
        <ul className="flex gap-8">
          {links.map((link, index) => (
            <a
              href="#"
              className="hover:text-primary hover:underline hover:cursor-pointer active:text-primary active:underline"
            >
              <li key={index}>{link}</li>
            </a>
          ))}
        </ul>
      ) : (
        <a className="button">Sign In</a>
      )}
    </nav>
  );
}

export default NavBar;
