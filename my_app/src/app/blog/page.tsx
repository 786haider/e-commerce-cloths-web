"use client";

import Typewriter from "typewriter-effect";

export default function Blog() {
  return (
    <div className="blog bg-gray-300">
      <div>
        <h1 className="flex justify-center text-blue-500 text-4xl md:text-6xl">
          <b>
            <i>
              <Typewriter
                options={{
                  strings: ["Read Our Blog !"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </i>
          </b>
        </h1>
        <h1 className=" flex-wrap text-2xl mt-3 ml-3 md:text-4xl md:mt-5">
            <b><i><u>
            The Rise of E-Commerce in the <br /> Fashion Industry: A New Era for <br /> Clothing Retail :
                </u></i></b>
        <p className="ml-1 mr-1 text-xl md:text-2xl">
        In recent years, e-commerce has revolutionized the way we shop for clothes. With <br />
        the convenience of online shopping, consumers can browse through an extensive <br />
        range of apparel from the comfort of their homes. This shift has not only changed <br />
        consumer behavior but has also transformed the entire fashion retail landscape. In <br />
        this blog, we’ll explore the key elements of e-commerce clothing websites, the <br />
        benefits they offer, and some tips for creating a successful online clothing store. <br />     
       </p>        
                </h1>
                <br />
      <h1 className="text-2xl ml-3 md:text-3xl"><b><i>The E-Commerce Boom</i></b></h1>     
      <p className="ml-3 text-xl md:text-2xl">
      The global pandemic accelerated the growth of e-commerce, with many brick-and- <br />
      mortar stores forced to close their doors temporarily. As a result, consumers turned <br />
      to online shopping, leading to a significant increase in sales for e-commerce <br />
      platforms. According to Statista, global e-commerce sales are expected to surpass <br />
      $6 trillion by 2024, with the fashion industry being one of the largest contributors to <br />
      this growth.
        </p>     
       <br />
       <h1 className="text-2xl ml-3 md:text-3xl"><b><i>Benefits of E-Commerce Clothing Websites
       </i></b></h1>
      
       <ol className="ml-3 text-xl md:text-2xl">
        <li>
       <span className="text-black text-2xl">Wider Reach: </span> E-commerce allows businesses to reach a global audience, <br />
        breaking geographical barriers that traditional retail faces. This opens up new <br />
        markets and customer bases.
        </li>
        <li>
        <span className="text-black text-2xl">  Lower Overhead Costs: </span> Running an online store often requires less overhead <br />
        compared to a physical store. Businesses can save on rent, utilities, and staffing, <br />
        allowing them to offer competitive pricing.  
        </li>
        </ol> 
      </div>
    </div>
  );
}
