import React from "react";
import video from '../assets/video.mp4';
import MovingText from "react-moving-text";


function Hero() {
    return (
        <div className="bgContainer">
            <div className="overlay"></div>
            <video src={video} autoPlay loop muted />
         
            <div className="container"> 
                    <MovingText  className="heading"
                        type="typewriter"
                        duration="1600ms"
                        delay="0s"
                        direction="normal"
                        timing="ease"
                        iteration="infinite"
                        fillMode="none"
                        dataText={[
                        'GLASS',
                        'RECYCLING',
                        'DEPENDS',
                        'ON',
                        'YOU'
                        ]} />   
            </div>    
        </div>
        

        
    );
}


export default Hero;