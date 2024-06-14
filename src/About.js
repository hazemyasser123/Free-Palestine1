import Footer from "./Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{
    faYoutube,
    faFacebook,
    faLinkedin
}from "@fortawesome/free-brands-svg-icons"
<FontAwesomeIcon icon="fa-brands fa-facebook-f" />

const About = () => {
    return ( 
        <div>
        <div className="container">
            <div className="row">
                <div className="flex">
                    <h2>About us</h2>
                    <h3>Discover the story of palestine</h3>
                    <p>hhhhhhhHelping Hands is a youth-based and youth focusing ‘not for profit organization’, founded by Ms Surbhi Jain in September 2019 with Mr Vishrut Ashthana being the co-founder. They got their initiative registered under societies Registration act in December 2019. Changing the world by merely starting an NGO can sound unrealistic but Ms Surbhi follows the notion of ‘Nothing changes if nothing changes’, and motives the youth to work for the underprivileged section of our society with whatever they can.</p>
                    <div className="social-links">
                        <a href="*" ><FontAwesomeIcon icon={faFacebook}/></a>
                        <a href="*"><FontAwesomeIcon icon={faYoutube}/></a>
                        <a href="*"><FontAwesomeIcon icon={faLinkedin}/></a>
                    </div>
                    <a href="*" className="btn">Learn more news</a>
                </div>
                <div className="flex">
                    <img src= {require('./img/boyimg.jpg')} alt="boyimg"></img>
                </div>
            </div>
            
        </div>
        {/* <Footer/> */}
        </div>
     );
}
 
export default About;