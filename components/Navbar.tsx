import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AuthProviders from "./AuthProvider";
import { getCurrentUser, authOptions } from "@/lib/session";

const Navbar = async () => {
  const session = await getCurrentUser();
  //const session = authOptions.callbacks?.session;
  console.log({ session });

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
        {session?.user ? (
          <>
            {session?.user?.image && (
              <Image
                src={session.user.image}
                height={40}
                width={40}
                className="rounded-full"
                alt={session.user.name}
              />
            )}
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
