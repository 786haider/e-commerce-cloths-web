"use client"

import Image from "next/image";
import logo from "../../../public/logo3.png";
import Link from "next/link";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { FaShoppingCart } from "react-icons/fa";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <nav className="bg-white shadow">
      <div className="flex items-center justify-start mx-auto">
        <Image 
          src={logo} 
          alt="logo"
          width={120}
        />
        <h1 className="text-blue-500 text-3xl">
          <b>
            <i>
              <u><span className="text-blue-900 text-5xl">E</span>-Commerce</u>
            </i>
          </b>
        </h1>
        <br></br>
        <div className="hidden md:flex justify-center ml-40 gap-10 text-xl">
          <Link href={"/"}>Home</Link>
          <Link href={"/gallary"}>Product</Link>
          <Link href={"/blog"}>Blog</Link>
          <Link href={"/contact"}>Contact</Link>
          <button> <Link href={"/shop"}><FaShoppingCart title="Shop now" className="text-3xl" /></Link> </button>
          <button
            className="ml-20"
            style={{
              color: "black",
              border: "2px solid blue",
              borderRadius: "20%",
              width: "15%",
              height: "10%",
            }}
          >
            <Link href={"/login"}>Login</Link>
          </button>
          <button
            className=""
            style={{
              color: "black",
              border: "2px solid blue",
              borderRadius: "20%",
              width: "20%",
              height: "10%",
            }}
          >
            <Link href={"/signup"}>Signup</Link>
          </button>
        </div>

        <button
          className="md:hidden"
          onClick={toggleMenu}
          style={{ marginLeft: `40px` }}
        >
          <TiThMenu />
        </button>
      </div>
      <details
        className={`md:hidden ${isOpen ? "block" : "hidden"}`}
        open={isOpen}
        style={{ backgroundColor: `black`, color: `white` }}
      >
        <summary className="cursor-pointer" onClick={toggleMenu}></summary>
        <div className="bg-black text-white flex flex-col gap-2 pl-4 p-2">
          <Link href={"/"}>Home</Link>
          <Link href={"/gallary"}>Product</Link>
          <Link href={"/blog"}>Blog</Link>
          <Link href={"/contact"}>Contact</Link>
          <Link href={"/shop"}>
            Shop Now
            <FaShoppingCart title="Shop now" />
          </Link>
          <Link href={"/login"}>Login</Link>
          <Link href={"/signup"}>Signup</Link>
        </div>
      </details>
    </nav>
  );
}