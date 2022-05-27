import { useEffect } from 'react';
import './Home.css';

import map from '../../assets/home/map4home.jpg';

import logo from '../../assets/home/ellacoffeepng.png';

import Footer from '../../components/footer/Footer';

const Home = () => {
     
     // Importing coffee video. Typescript is weird about importing videos. I'm not going
     // to use many more, if any. So this is simpler.
     const coffeeVid: any = require('../../assets/home/coffee.mp4');

     useEffect(() => {
          slowVideo();
     }, [])

     const slowVideo = () => {
          const vid: any = document.getElementById('coffeeVid')!;
          vid.playbackRate = 0.75
     }

     return (
          <div id="homeContainer" className='container-fluid'>

               {/* HEADING START */}
               <div id="homeHeading">
                    <div id="videoBox">
                         {/* <h3 id="headingTextHome">We Are Italian, Everything Else is Local</h3> */}
                         <img src={logo} alt="ella coffee logo" id="ellaCoffeeLogo" />
                         <a href="https://www.clover.com/online-ordering/ella-coffee-houston"><button id="orderNowHome">ORDER NOW</button></a>
                         <video id="coffeeVid" src={coffeeVid} autoPlay={true} muted={true} loop />
                         <button id="orderNowHome">ORDER NOW</button>
                    </div>
               </div>
               {/* HEADING END */}

               {/* MAIN CONTENT START */}
               <div id="homeContent">

                    {/* CREATE ABOUT ME HEADER. SHOULD BE TWO VERTICAL DIVS INSIDE HOME CONTENT.
                         MAKE IT CHANGE TO "LOCATE US" OR SOMETHING WHEN THE MAP IS HOVERED OVER. */}
                         
                    {/* <h1 id="aboutMe">About Us</h1> */}

                    <div id="homeContentHeader">
                         <div id="homeContentTitle">
                              Fresh Coffee In The Heart of Houston
                         </div>

                         <div id="homeContentTextBox">
                              <p id="homeContentText">
                              Ella Coffee is a mobile trailer serving the Houston TX area. Our trailer serves specialty coffee and baked pastries.
                              We make drinks using the best ingredients sourced from local producers. Come visit us today!
                              </p>
                         </div>
                    </div>

                    <div id="homeContentMapBox">
                              <img src={map} id="homeMap"></img>
                    </div>

               </div>
               {/* MAIN CONTENT END */}

               {/* LINK SECTION START */}
               <div id="linkSection">

                    <div id="linkBox">

                         <div id="locationBox">
                              <a><button className='linkButton'>EVENTS</button></a>
                         </div>

                         <div id="eventsBox">
                              <a><button className='linkButton'>LOCATION</button></a>
                         </div>


                    </div>

               </div>
               {/* LINK SECTION END */}

               {/* FOOTER START */}
               <Footer />
               {/* FOOTER END */}
               
          </div>
     )

}

export default Home;