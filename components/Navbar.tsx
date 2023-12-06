import React from "react";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav>
      <div className="logo">
        <h1>Next Link</h1>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/ninjas">Next Listing</Link>
    </nav>
  );
};

export default Navbar;
