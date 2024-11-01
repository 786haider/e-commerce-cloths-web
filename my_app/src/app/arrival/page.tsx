
import heroPage from "../../../public/hero4.png";
import Image from "next/image";
export default function Arrival() {
  return (
    <div className="bg-gray-300">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image src={heroPage} alt="image" />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col items-center text-center">
            <div className=" text-4xl md:text-6xl text-black ">
             
         <h1><b><i># New <span className="text-blue-700">Arrivals</span></i></b></h1>
              <br />
            </div>
            <p className="mb-8 leading-relaxed text-black text-2xl">
              Stay ahead of the trends with our new arrivals ! From the freshest
              styles to the hottest new products, explore what`s new in our
              collection. Whether you`re looking for something
              stylish,functional, or unique ,we`ve got the latest just for
              you.Be the first to shop these exciting new additions before
              they`re gone!
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-blue-500 bg-black border-2 border-blue-700 py-2 px-6 hover:bg-blue-500 hover:text-black rounded text-lg">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
