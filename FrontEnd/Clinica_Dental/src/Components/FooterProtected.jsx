import React from 'react'
import '../Styles/FooterProtected.css'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import nombre from '../Img/nombre.jpg'


function FooterProtected() {
  return (

    <div className='footer-protegido'>
      <div className="footer-Social-Media">
          <h3 className="footer-social-title">Redes Sociales</h3>
          <div className="footer-social-Media-icons">
            <a href="https://www.instagram.com/kalmadentalcr/#" target="_blank" rel="noopener noreferrer" className="footer-social-Media-icon instagram">
             <FaInstagram size="3em" />
            </a>
            
            <a href="https://www.facebook.com/profile.php?id=100092274373155&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="footer-social-Media-icon facebook">
              <CiFacebook size="3em"/>
            </a>
            
          </div>
        </div>
    </div>
  )
}

export default FooterProtected