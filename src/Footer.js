import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{
    faYoutube,
    faFacebook,
    faLinkedin
}from "@fortawesome/free-brands-svg-icons"
<FontAwesomeIcon icon="fa-brands fa-facebook-f" />


const Footer = () => {
    return ( 
        
        <div className="footercontainer">
            <div className="sociallinks">
                <a href="*" ><FontAwesomeIcon icon={faFacebook}/></a>
                <a href="*"><FontAwesomeIcon icon={faYoutube}/></a>
                <a href="*"><FontAwesomeIcon icon={faLinkedin}/></a>
            </div>
        </div>
     );
}
 
export default Footer;