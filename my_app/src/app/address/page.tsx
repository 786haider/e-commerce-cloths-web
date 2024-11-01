

export default function Address() {
  return (
    <div className="bg-gray-300">
      <div className="ml-5 pt-10 pb-10 flex justify-center">
        
        <h1 className="text-blue-900 text-4xl md:text-6xl mt-20 md:mt-40">
          <b>
            <i>
              E{" "}
              <span className="text-blue-600 text-2xl md:text-4xl">
                -Commerce
              </span>
            </i>
          </b>
        </h1>
      </div>
      <div>
        <h1 className="ml-10 md:flex justify-center text-black-900 text-xl md:2xl">
          <u>
            <b>
              <i>Address : </i>
            </b>
          </u>{" "}
          <span className="text-gray-900 ml-4">
            {" "}
            28 White tower,Street Name New York City ,USA{" "}
          </span>
        </h1>
        <h1 className="ml-10 mt-3 md:flex justify-center text-black-900 text-xl md:2xl ">
          <u>
            <b>
              <i>Telephone:</i>
            </b>
          </u>{" "}
          <span className="text-gray-900 ml-1"> +91 987 657 3210 </span>
        </h1>
        <h1 className="ml-10 mt-3 md:flex justify-center text-black-900 text-xl md:2xl ">
          <u>
            <b>
              <i>Email:</i>
            </b>
          </u>{" "}
          <span className="text-gray-900 ml-6">
            {" "}
            haiderhussain536@gmail.com{" "}
          </span>
        </h1>
        <br />
        <h1 className="text-blue-500 text-2xl md:text-4xl flex justify-center">
          <b>
            <i>
              NEWS <span className="text-black">LETTER:</span>
            </i>
          </b>
        </h1>
        <p className="text-black texl-xl md:text-2xl flex justify-center">
          Subscribe by our news letter and get <br />
          update protidin
        </p>
  <br />
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter Your Email"
            className=" rounded-md w-40 h-5 md:w-80 md:h-10"
            style={{ border: "2px solid blue" }}
          ></input>
        </div>
        <br />
        <div className="flex justify-center">      
              <button
          className=" text-blue-500 bg-black border-2 border-blue-700 py-2 px-6 hover:bg-blue-500 hover:text-black rounded text-lg"
          style={{ marginBottom: "20%" }}
        >
          Subscribe
        </button>
        </div>

      </div>
    </div>
  );
}
