
import hoody from "../../../public/huddy.png";
import trouser from "../../../public/trouser.png";
import hoodie from "../../../public/hoodie.png";
import jactet1 from "../../../public/jacket1.png";
import partyDress from "../../../public/partydreess.png";
import weddingDress from "../../../public/wedding.png";
import fancyDress from "../../../public/fancyDress.png";
import tShirt from "../../../public/t-shirt.png";
import Image from "next/image";
import Link from "next/link";

function Gallary() {
   
  return (
    <div className="flex justify-center items-center flex-wrap bg-gray-300">
      <h1 className="text-4xl md:text-6xl ">
        <u>
          <i>
            <b>
              Our <span className="text-blue-500">Products</span>
            </b>
          </i>
        </u>
      </h1>
      <section className="text-black body-font bg-gray-300 flex justify-center items-center">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">

          <div
      className={`lg:w-1/4 md:w-1/2 p-4 w-full bg-white`}
      style={{ border: "2px solid black", margin: "10px" }}
    >
      <Link 
       href={'/'}
       className="block relative h-48 rounded overflow-hidden"
      >
        <Image src={hoody} alt="gallery image" layout="fill" />
      </Link>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          Hoodie
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          Hoody
        </h2>
        <p className="mt-1">2,000 PKR</p>
      </div>
    </div>
           
            
            <div
              className={`lg:w-1/4 md:w-1/2 p-4 w-full bg-white`}
              style={{ border: "2px solid black", margin: "10px" }}
            >
              <a className="block relative h-48 rounded overflow-hidden">
                <Image src={trouser} alt="gallery image" layout="fill" />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Trouser
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The Trouser
                </h2>
                <p className="mt-1">1,500 PKR</p>
              </div>
            </div>
            <div
              className={`lg:w-1/4 md:w-1/2 p-4 w-full bg-white`}
              style={{ border: "2px solid black", margin: "10px" }}
            >
              <a className="block relative h-48 rounded overflow-hidden">
                <Image src={hoodie} alt="gallery image" layout="fill" />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Hoodie
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The Hoodie
                </h2>
                <p className="mt-1">2,500 PKR</p>
              </div>
            </div>
            <div
              className={`lg:w-1/4 md:w-1/2 p-4 w-full bg-white`}
              style={{ border: "2px solid black", margin: "10px" }}
            >
              <a className="block relative h-48 rounded overflow-hidden">
                <Image src={jactet1} alt="gallery image" layout="fill" />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Jacket
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The Jacket
                </h2>
                <p className="mt-1">3,000 PKR</p>
              </div>
            </div>
            <div
              className={`lg:w-1/4 md:w-1/2 p-4 w-full bg-white`}
              style={{ border: "2px solid black", margin: "10px" }}
            >
              <a className="block relative h-48 rounded overflow-hidden">
                <Image src={tShirt} alt="gallery image" layout="fill" />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Over size
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The T-Shirt
                </h2>
                <p className="mt-1">1,000 PKR</p>
              </div>
            </div>
            <div
              className={`lg:w-1/4 md:w-1/2 p-4 w-full bg-white`}
              style={{ border: "2px solid black", margin: "10px" }}
            >
              <a className="block relative h-48 rounded overflow-hidden">
                <Image src={weddingDress} alt="gallery image" layout="fill" />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Wedding Dress
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The Wedding Dress
                </h2>
                <p className="mt-1">15,000 PKRnpm </p>
              </div>
            </div>
            <div
              className={`lg:w-1/4 md:w-1/2 p-4 w-full bg-white`}
              style={{ border: "2px solid black", margin: "10px" }}
            >
              <a className="block relative h-48 rounded overflow-hidden">
                <Image src={fancyDress} alt="gallery image" layout="fill" />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Fancy
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The Fancy Dress
                </h2>
                <p className="mt-1">1,200 PKR</p>
              </div>
            </div>
            <div
              className={`lg:w-1/4 md:w-1/2 p-4 w-full bg-white`}
              style={{ border: "2px solid black", margin: "10px" }}
            >
              <a className="block relative h-48 rounded overflow-hidden">
                <Image src={partyDress} alt="gallery image" layout="fill" />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Party Dress
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The The Party Dress
                </h2>
                <p className="mt-1">4,000 PKR</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <button
        className="inline-flex text-blue-500 bg-black border-2 border-blue-700 py-2 px-6 hover:bg-blue-500 hover:text-black rounded text-lg"
        style={{ marginBottom: "20%", margin: "10px" }}
      >
        View All Products
      </button>
    </div>
  );
}
export default Gallary;
