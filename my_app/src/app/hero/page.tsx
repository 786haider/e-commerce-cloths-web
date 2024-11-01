"use client";

import Image from "next/image";
import heroImage from "../../../public/hero3.png";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <div className="hero">
      <section className="bg-gray-300 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div className="text-6xl text-blue-500">
              <Typewriter
                options={{
                  strings: ["Sale 20% Off"],
                  autoStart: true,
                  loop: true,
                }}
              />

              <h1 className="text-5xl text-black">On Everything</h1>
              <br />
            </div>

            <p className="mb-8 text-black text-lg">
              Shop your favoruite products now and enjoy 20% off on everything
              in our store!
              <br /> Whether you are updating your wardrobe,upgrading your
              homes, or looking for the perfect gifts,now`s the time to grab
              amazing deals. Hurry, don`t miss out on this limited time offer !
            </p>
            <div className="flex justify-center">
              <button
                className=" flex justify-center rounded text-lg bg-black hover:bg-white"
                style={{
                  color: "blue",
                  border: "2px solid blue",
                  borderRadius: "20%",
                  width: "80px",
                  marginLeft: "80px",
                }}
              >
                BUY
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image src={heroImage} alt="image" width={500} />
          </div>
        </div>
      </section>
    </div>
  );
}
