"use client";
import Link from "next/link";
import Typewriter from "typewriter-effect";
export default function Login() {
  return (
    <div
      className="flex
        justify-center items-center h-screen bg-[url('/logo3.png')] bg-cover bg-center  w-full  "
    >
      <div></div>
      <div
        className="container w-52 h-80 bg-white bg-opacity-100"
        style={{ border: "2px solid blue" }}
      >
        <h1 className=" flex justify-center text-4xl text-black opacity-100">
          <b>
            <i>
              <Typewriter
                options={{
                  strings: ["Login"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </i>
          </b>
        </h1>
        <br />
        <div
          className="container flex justify-center ml-12 md:ml-12  w-28 h-7 "
          style={{ border: "1px solid black" }}
        >
          <input
            type="text"
            placeholder="Username"
            className="flex justify-center ml-12 md:ml-12  w-28 h-7 mr-12"
          ></input>
        </div>
        <br />
        <div
          className="container flex justify-center ml-12 md:ml-12  w-28 h-7 "
          style={{ border: "1px solid black" }}
        >
          <input
            type="password"
            placeholder="Password"
            className="flex justify-center ml-12 md:ml-12  w-28 h-7 mr-12"
          ></input>
        </div>

        <button
          className="flex justify-center items-center w-16 text-blue-500 bg-black hover:text-black hover:bg-blue-500 hover:border-black ml-16 mt-3"
          style={{ border: "1px solid blue" }}
        >
          Login
        </button>
        <br />
        <Link href={"/"} className="ml-11 hover:text-blue-700">
          Forgot password ?
        </Link>
        <br />
        <Link href={"/signup"} className="text-black ml-5 hover:text-blue-700">
          I don`t have any account
        </Link>
      </div>
    </div>
  );
}
