import { TbTruckDelivery } from "react-icons/tb";
import { FaShippingFast } from "react-icons/fa";
import { MdGppGood } from "react-icons/md";

export default function Reason() {
  return (
    <div>
      <h1 className="text-4xl md:text-6xl flex justify-center items-center flex-wrap ">
        <b>
          <i>
            <u>
              Why <span className="text-blue-500">Shop</span> With Us
            </u>
          </i>
        </b>
      </h1>
      <br />
      <div className="flex justify-center items-center flex-wrap ">
        <div className="m-4 p-6 border rounded shadow-lg bg-blue-950">
          <h2 className="text-3xl md:text-4xl text-white">
            <TbTruckDelivery className="text-blue-500" />
            Fast Delivery
          </h2>
          <p className="text-white">
            Your order will placed within <br />
            one day .
          </p>
        </div>
        <div className="m-4 p-6 border rounded shadow-lg  bg-blue-950">
          <h2 className="text-3xl md:text-4xl text-white">
            <FaShippingFast className="text-blue-500" />
            Free Shiping
          </h2>
          <p className="text-white">
            We don`t charge any delivery
            <br />
            charges .
          </p>
        </div>
        <div className="m-4 p-6 border rounded shadow-lg  bg-blue-950">
          <h2 className="text-3xl md:text-4xl text-white">
            <MdGppGood className="text-blue-500" />
            Best Quality
          </h2>
          <p className="text-white">
            At our shop you will find best <br /> quality of everything.
          </p>
        </div>
      </div>
    </div>
  );
}
