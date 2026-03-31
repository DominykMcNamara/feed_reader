function NavBar({ links }: { links: string[] }) {
  return (
    <nav className="w-full h-16 flex items-center justify-center">
      <ul className="flex gap-8">
        {links.map((link, index) => (
          <a
            href="#"
            className={`hover:text-primary hover:underline hover:cursor-pointer active:text-primary active:underline`}
          >
            <li key={index}>{link}</li>
          </a>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
