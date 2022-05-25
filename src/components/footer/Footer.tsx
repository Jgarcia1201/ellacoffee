import './Footer.css';

import ig from '../../assets/home/Instagram_Glyph_White.png';

const Footer = () => {

     return (
          <footer id='ellaFooter'>
               <div id="footerDisplay">
                    <a className='footerLink' href='https://www.instagram.com'><img id='footerIg' src={ig}></img></a>
                    <p className='footerText'>Ella Coffee</p>
                    <p className='footerText'>2020 All Rights Reserved</p>
               </div>
          </footer>
     )
}

export default Footer;