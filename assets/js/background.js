import * as THREE from './three.min.js'
import * as VANTA from './vanta.net.min.js'

const section = document.getElementsByClassName("animated-background");
const effect = VANTA.NET({
    el: '#my-background',
    color: 0x000000
  })
  
  // Later, when you want to update an animation in progress with new options
  effect.setOptions({
    color: 0xff88cc
  })
  
  // Later, if the container changes size and you want to force Vanta to redraw at the new canvas size
  effect.resize()

// const effect = VANTA.NET({
//   el: section,
//   THREE,
//   mouseControls: true,
//   touchControls: true,
//   gyroControls: false,
//   minHeight: 200.00,
//   minWidth: 200.00,
//   scale: 1.0,
//   scaleMobile: 1.00,
//   // color: 0x0076df,
//   color: 0x5588,
//   backgroundColor: 0x1C1C1D,
//   points: 20.00,
//   maxDistance: 20.00,
//   spacing: 12.00,
//   showDots: false
// });

// effect.setOptions(
//     {backgroundColor: 0x1C1C1D}
//   )

