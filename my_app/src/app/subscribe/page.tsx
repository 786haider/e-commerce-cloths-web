export default function Subscribe() {
  return (
    <div className="bg-gray-300">
      <div className="bg-gray-300 flex justify-center items-center flex-wrap">
        <h1 className="text-blue-500 text-2xl md:text-6xl"
        style={{marginTop:'20px'}}>
          Subscribe <span className="text-black">To Get Discount Offer!</span>
        </h1>
      </div>
      <br />
      <p className="flex justify-center items-center ml-5 text-lg md:text-2xl">
        Join our mailing list today and enjoy exclusive discount offers straight
        to your inbox!
        <br />
        Be the first to know about special promotions, new arrival, and more.As
        a wellcome <br />
        gift, get 10% off your first order just by subscribing.
      </p>
      <br />
      <div className="flex justify-center items-center rounded-lg  p-2">
        <input
          placeholder="Enter your e-mail here"
          type="email"
          className="bg-gray-200 p-2 w-70 md:w-96 text-blue-700 placeholder-gray-700 border rounded-lg border-blue-500"
        ></input>
      </div>
      <div className="flex justify-center items-center">
        <button
          className="  text-blue-500 bg-black border-2 border-blue-700 py-2 px-6 hover:bg-blue-500 hover:text-black rounded text-lg"
          style={{ marginBottom: "20%" }}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}
