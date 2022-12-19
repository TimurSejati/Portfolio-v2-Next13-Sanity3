import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="flex items-center justify-between px-10 py-5 space-x-2 font-bold">
      <div className="flex items-center space-x-2">
        <Link href="/">
          {/* <Image
            className="rounded-full"
            src="https://links.papareact.com/1m8"
            width={50}
            height={50}
            alt="logo"
          /> */}
          <h1>The TimurDev</h1>
        </Link>
      </div>
      <div>
        <Link
          href="/"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#f7ab0a] flex items-center rounded-full"
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
}

export default Header;
