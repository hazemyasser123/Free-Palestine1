import { Link } from "react-router-dom/cjs/react-router-dom";
import Home from "./Home";

const Error = () => {
    return ( 
        <div>
            <h1>OOPS looks like that file doesn't exist</h1>
            
            <h3><Link to = "/"> click here to go to home </Link></h3>
        </div>
     );
}
 
export default Error;