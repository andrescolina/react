import React from 'react'
import './videoOneIndex.scss';

import Ipad from '../../assets/img/landing/Ipad.png';
import Celular2 from '../../assets/img/landing/Celular2.png';
import Play from '../../assets/img/landing/Play.png';

// import video1 from '../../assets/videos/video1.mp4'; 


export const VideoOneIndex = () => {

    // let showHide = styles.show;

    const handleClick = () =>{
        //dar play al video
        document.getElementById("videoPC").play();
       //ocultar el botón de play
        document.getElementById("showHide").style.display="none";
    }

    return (
        <>
            <p><img className="Ipad" src={Ipad}/></p>
            <p><img className="Celular" src={Celular2}/>  </p>
            <video 
                className="videoPC"
                id="videoPC" 
                src="../../assets/videos/video1.mp4">
                Tu navegador no admite el elemento <code>video</code>.
            </video>
            <button 
                className="btnVideo" 
                onClick={handleClick}> 
                <img id="showHide" 
                src={Play}/>
                </button>
        </>
    )
}

export default VideoOneIndex