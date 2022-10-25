import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="backdrop-blur-md bg-yellow-500 flex flex-row h-8">
      <div className="logo">
        <h1>WebDev News</h1>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/webdev">
        <a>WebDev List</a>
      </Link>
    </nav>
  );
};

export default Navbar;
