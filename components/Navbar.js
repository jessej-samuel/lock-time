import Link from "next/link";
import { useEffect } from "react";

const Navbar = () => {
  return (
    <nav className="backdrop-blur-md bg-primary/75 flex text-primaryText flex-row h-16 items-center justify-between px-4 text-lg shadow-sm shadow-primary sticky top-0 z-50">
      <div className="logo w-fit">
        <h1>Task Organizer</h1>
      </div>
      <div>
        <Link href={"/app"}>
          <a className="rounded-full px-4 py-2 mx-1">🏠</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
