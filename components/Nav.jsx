"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const isUserLoggedIn = false;
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  // console.log({ providers });

  useEffect(() => {
    const setupProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    }
    setupProviders();
  }, []);
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          width={40}
          height={40}
          alt="Promptia Logo"
          className="object-contain"
        />
        <p className="logo_text">Promptia</p>
      </Link>
      {/* {alert(providers)} */}
      {/* { Desktop View } */}
      <div className="sm:flex hidden">
        {session?.user ?
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">Create Post</Link>
            <button type="button" className="outline_btn" onClick={signOut}>
              Signout
            </button>
            <Link href="/profile">
              <Image
                src={session?.user?.image}
                width={30}
                height={30}
                className="rounded-full"
                alt="Profile"
              >
              </Image>
            </Link>
          </div>
          :
          <>
            {providers && Object.values(providers).map((provider) =>
            (
              <button
                type="button"
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className="black_btn"
              >
                Sign In
              </button>
            )
            )}
          </>
        }
      </div>

      {/* Mobile Version */}
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <>
            {session.user.name}
            <Image
              src={session?.user?.image}
              width={30}
              height={30}
              className="rounded-full"
              alt="Profile"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />
            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign out
                </button>
              </div>
            )}
          </>
        ) : (
          <>
            {providers && Object.values(providers).map((provider) =>
            (
              <button
                type="button"
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className="black_btn"
              >
                Sign In
              </button>
            )
            )}
          </>
        )
        }
      </div>
    </nav>
  )
}

export default Nav;