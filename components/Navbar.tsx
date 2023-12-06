import React from "react";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="pt-8 flex w-full justify-between">
      <div className="border-b-">
        <Link href="/">
          <h1 className="text-4xl">Next Link</h1>
        </Link>
      </div>
      <div className="text-2xl space-x-3">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/ninjas">Next Listing</Link>
      </div>
    </nav>
  );
};

export default Navbar;
