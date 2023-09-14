import React, { useEffect, useRef } from 'react'; 
import { ImagePanorama, Viewer, CONTROLS, Infospot } from 'panolens';    
import pano from "./3D.jpg";



const North360 = () => {
    const containerRef = useRef(null);
  const panorama = useRef(null) 
  const viewer = useRef(null)
  const infospot = useRef(null)         
  const controls = useRef(null)   

  useEffect(() => {
    if (panorama.current || viewer.current) {
      return;
    }

    controls.current = CONTROLS;

    panorama.current = new ImagePanorama(pano);

    infospot.current = new Infospot(350);
    infospot.current.position.set(1000, -1000, -2000);
    infospot.current.addHoverText('Simple Info Text');
    panorama.current.add(infospot.current);

    viewer.current = new Viewer({ container: containerRef.current });
    viewer.current.add(panorama.current);
    // viewer.current.enableControl(controls.current.DEVICEORIENTATION);
    // viewer.current.enableControl(1);
  }, [pano]);


  return (
    <>
    <h1>North holland 360 erbil projects</h1>
    <div >
      <div ref={containerRef} id='panoCont' style={{position: 'absolute', top: 0, left: 0  , right:0, bottom: 0 , zIndex: 10000000}} ></div>     
    </div>  
    </>
  );
};

export default North360;