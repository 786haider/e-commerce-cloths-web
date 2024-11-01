"use client";

import Typewriter from "typewriter-effect";

export default function Contact() {
  return (
    <div className="contact text-gray-700">
      <br />
      <h1 className="flex justify-center flex-wrap  text-5xl md:text-6xl text-blue-500">
        <b>
          <i>
            <Typewriter
              options={{
                strings: ["Contact Us"],
                autoStart: true,
                loop: true,
              }}
            />
          </i>
        </b>
      </h1>
      <br />
      <br />

      <div className="flex flex-wrap ml-4 mr-4 md:ml-52 md:mr-52">
        <div className="p-2 w-1/2">
          <div className="relative" style={{border:'1px solid black'}}>
            <label htmlFor="name" className="leading-7 text-sm text-black">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-200 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative" style={{border:'1px solid black'}}>
            <label htmlFor="email" className="leading-7 text-sm text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-200 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative" style={{border:'1px solid black'}}>
            <label htmlFor="message" className="leading-7 text-sm text-black">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-200 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <button
            className="flex justify-center md:ml-20 text-blue-500 bg-black border-2 border-blue-700 px-2 hover:bg-blue-500 hover:text-black rounded text-lg"
            style={{ marginBottom: "20%", margin: "10px" }}
          >
            Send Message
          </button>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
