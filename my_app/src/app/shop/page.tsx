import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
// import bg from '../../../public/logo3.png'

export default function Shop() {
  return (
    <div className="shop flex justify-center bg-gray-300">
      <div>
        <h1
          className="flex justify-center text-5xl md:text-7xl mr-2"
          style={{
            fontFamily: "Arial, sans-serif",
            fontWeight: "bold",
            color: "#333",
          }}
        >
          <i>Shop</i>
          <span className="text-blue-500 ml-1 mr-1">
            <FaShoppingCart />
          </span>
          Now
        </h1>
        <div
          className="container flex justify-center bg-white w-60 h-60 md:w-80 md:h-80 ml-auto mr-auto mt-32 md:mt-16"
          style={{
            border: "2px solid blue",
            borderRadius: "10px",
            position: "relative",
          }}
        >
          <Link href={"/gallary"}>
            <span
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#aaa",
              }}
            >
              Drag your product here
            </span>
          </Link>
        </div>
        <br />

        <input
          placeholder="Product Name"
          type="text"
          className="ml-1 md:ml-12 w-30 h-9 md:w-40"
          style={{ border: "2px solid blue", borderRadius: "5px" }}
        />
        <br />
        <br />
        <input
          placeholder="Price"
          type="number"
          className="ml-1 md:ml-12 w-30 h-9 md:w-40"
          style={{ border: "2px solid blue", borderRadius: "5px" }}
        />
        <br />
        <br />
        <button
          className=" ml-1 md:ml-12 text-blue-500 bg-black border-2 border-blue-700 py-2 px-6 hover:bg-blue-500 hover:text-black rounded text-lg"
          style={{ marginBottom: "30%" }}
        >
          Submit Order
        </button>
      </div>
    </div>
  );
}
