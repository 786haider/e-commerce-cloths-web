"use client";
import Typewriter from "typewriter-effect";

export default function Signup() {
  return (
    <div className="flex justify-center bg-[url('/logo3.png')] bg-cover bg-center w-full h-full">
      <br />
      <div className="container bg-white w-80 h-96 mt-16">
        <h1 className="flex justify-center text-4xl text-blue-800 ">
          <b>
            <i>
              <Typewriter
                options={{
                  strings: ["Wellcome Back !"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </i>
          </b>
        </h1>
        <br />
        <i>
          <h1 className="flex justify-center text-teal-300 text-4xl">
            Sign-up
          </h1>
        </i>
        <div className="flex justify-center mt-4">
          <input
            className="flex justify-center"
            type="text"
            placeholder="Name"
            style={{ border: "2px solid black" }}
          />
        </div>
        <div className="flex justify-center mt-4">
          <input
            className="flex justify-center"
            type="email"
            placeholder="E-mail"
            style={{ border: "2px solid black" }}
          />
        </div>
        <div className="flex justify-center mt-4">
          <input
            className="flex justify-center"
            type="password"
            placeholder="Enter new password"
            style={{ border: "2px solid black" }}
          />
        </div>
        <div className="flex justify-center mt-4">
          <input
            className="flex justify-center"
            type="password"
            placeholder="Conform password"
            style={{ border: "2px solid black" }}
          />
        </div>
        <div className="flex justify-center mt-4">
          <h1>
            Read terms and conditions <input type="checkbox" />
          </h1>
        </div>
        <div className="flex justify-center mt-4 mb-16">
          <button
            className="border to-blue-500 bg-black text-blue-500 hover:bg-blue-500 hover:text-black"
            style={{ border: "1px solid blue" }}
          >
            Sign-up
          </button>
        </div>
      </div>
    </div>
  );
}
