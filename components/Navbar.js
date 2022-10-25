import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="backdrop-blur-md bg-primary flex text-primaryText flex-row h-16 items-center justify-between px-4 text-lg shadow-sm shadow-primary">
      <div className="logo w-fit">
        <h1>WebDev News</h1>
      </div>
      <div>
        <Link href={"/app"}>
          <a className="rounded-full px-4 py-2 mx-1">
            🏠
          </a>
        </Link>
        <Link href={"/app/edit"}>
          <a className="rounded-full bg-secondary px-4 py-2 mx-1">
            ➕ Add
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
