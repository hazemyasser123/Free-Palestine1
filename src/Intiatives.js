import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productData, responsive } from "./data";

const Initiative = () => {
    // const product = productData.map((item) => (
    //     <Product
    //       name={item.name}
    //       url={item.imageurl}
    //       price={item.price}
    //       description={item.description}
    //     />
    //   ));
    return ( 
        <div className="init-container"> 
        <h2>Recent Intiatives to help palestine</h2>
        <Carousel showDots={true} responsive={responsive} className="init-parent">
        <div className="init">
        <img src= {require('./img/unrw.jpg')} alt="2012"></img>
        <p> The World Food Programme WFP provides food assistance to vulnerable Palestinians World Food Programme. They also work on long-term solutions to improve food security.</p>
        </div>
        <div className="init">
        <img src= {require('./img/roar.jpg')} alt="2012"></img>
         <p> Young Palestinians themselves have taken initiative to provide emergency aid during times of conflict. This includes providing food, tents, and other necessities  Young people set up initiatives to help Gaza displaced.</p>
        </div >
        <div className="init">
        <img src= {require('./img/donate.jpg')} alt="2012"></img>
         <p>Donating to reputable charities like the Palestine Children's Relief Fund (PCRF) is another way to support food and shelter programs in Palestine How To Help Palestine. These organizations provide various forms of assistance, including food and shelter, to those in need LIKE US.</p>
        </div>
        
      </Carousel>
        </div>
     );
}
 
export default Initiative;