import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Model from './model/Model';
import { OrbitControls,Environment } from '@react-three/drei';
// import { Container,Navbar,Row } from 'react-bootstrap';
import './App.css'
// import Floor from './model/floor';
import Lights from './model/Light';
function App() {
  
  return (
    <div className="parent">
      <div className="child1">
        AN IMMERSIVE EXPERINCE
      </div>
      <div className="child2">
        
        <Canvas orthographic camera={{ zoom: 3, position: [0, 30, 80] }}>
          {/* <pointLight position={[10, -50, 10]} intensity={1} color={"#ffff00"} /> */}
          {/* <pointLight position={[-10, -50, 0]} intensity={1} color={"#3333ff"}/>
          <pointLight position={[0, -50, 0]} intensity={1} color={"#66ff66"}/> */}
          <Suspense fallback={null}>
            <Environment files="hdri.hdr" />
            <Model/>
            {/* <Floor/> */}
          </Suspense>
          <Lights position={[40, 60, 0]}/>
          <Lights position={[-40, 60, 0]}/>
          <Lights position={[-40, -60, 0]}/>
          <OrbitControls enablePan={false} maxZoom={4} minZoom={3}/>
        </Canvas> 
      </div>
      <div className="child3">
        <p>
          "High-Poly Office Chair <a style={{color:"white"}} href="https://skfb.ly/6RRNu" target="_blank">https://skfb.ly/6RRNu</a> by kilicarslan is licensed under Creative Commons Attribution"
        </p>
      </div>
    </div>
  );
}

export default App;


// "High-Poly Office Chair" (https://skfb.ly/6RRNu) by kilicarslan is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
{/* <Canvas>
          <ambientLight intensity={0.5}/>
          <Suspense fallback={null}>
            <Model/>
          </Suspense>
          <OrbitControls/>
        </Canvas> */}