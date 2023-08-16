import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const session = {};

  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" alt="flexxible" width={115} height={43} />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div>
        {session ? (
          <>
            User Photo <Link href="/create-project">Share work</Link>
          </>
        ) : (
          <>AuthProvider</>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
