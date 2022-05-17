import { useEffect } from 'react';
import './Home.css';

const Home = () => {

     const coffeeVid: any = require('../../assets/home/coffee.mp4');

     useEffect(() => {
          const vid: any = document.getElementById('coffeeVid')!;
          vid.playbackRate = 0.75
     }, [])

     return (
          <div id="homeContainer" className='container-fluid'>

               {/* HEADING START */}
               <div id="homeHeading">
                    <div id="videoBox">
                         <h3 id="headingTextHome">We Are Italian, Everything Else is Local</h3>
                         <a href="https://www.clover.com/online-ordering/ella-coffee-houston"><button id="orderNowHome">ORDER NOW</button></a>
                         <video id="coffeeVid" src={coffeeVid} autoPlay={true} muted={true} loop />
                         <button id="orderNowHome">ORDER NOW</button>
                    </div>
               </div>
               {/* HEADING END */}

               {/* MAIN CONTENT START */}
               <div id="homeContent">
                    
               </div>

               {/* MAIN CONTENT END */}
               
          </div>
     )

}

export default Home;