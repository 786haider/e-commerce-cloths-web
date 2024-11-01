
import Hero from "./hero/page";
import Reason from "./reason/page";
import Arrival from "./arrival/page";
import Gallary from "./gallary/page";
import Subscribe from "./subscribe/page";
import Reviews from "./reviews/page";
import Address from "./address/page";

export default function Home() {
  return (
    <div>
     <Hero/>
     <br/>
     <Reason/>
     <br/>
     <Arrival/>
     <br/>
     <Gallary/>
     <br/>
     <Subscribe/>
     <br/>
     <Reviews/>
     <br />
     <Address/>
         </div>
  );
}
