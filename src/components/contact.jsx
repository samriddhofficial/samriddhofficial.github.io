import React from "react";
import Conitem from "./smallercomponents/conitem";
function Contact() {
  return (
    <div className="Contact" id="Contact">
      <h1>Contact Me</h1>
      <Conitem
        name="instagram"
        link="https://www.instagram.com/samriddhdiwan"
        source="https://www.transparentpng.com/download/logo-instagram/YfpFOL-logo-instagram-free-transparent.png"
      />
      <Conitem
        name="facebook"
        link="https://www.facebook.com/profile.php?id=100010540893868"
        source="https://www.transparentpng.com/download/facebook-logo-png/background-facebook-logo-5.png"
      />
      <Conitem
        name="linkedin"
        link="https://www.linkedin.com/in/samriddh-diwan-2ab383251/"
        source="https://www.transparentpng.com/download/linkedin/linkedin-linkedin-button-social-media-icon-png-pictures-7.png"
      />
      <Conitem
        name="whatsapp"
        link="https://wa.me/8826709701"
        source="https://www.transparentpng.com/download/whatsapp/zffspR-whatsapp-transparent-picture.png"
      />
    </div>
  );
}

export default Contact;
