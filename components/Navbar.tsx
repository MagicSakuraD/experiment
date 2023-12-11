import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <nav className="flexBetween navbar">
        <div>
          <Link href={"/"}>
            <Image src="/logo.svg" alt="Flexibble" width={115} height={43} />
          </Link>
        </div>
      </nav>
      <ul className="xl:flex hidden text-small gap-7"></ul>
    </div>
  );
};

export default Navbar;
