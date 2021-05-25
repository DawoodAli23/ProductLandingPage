// import { useHelper } from "@react-three/drei";
import React, { useRef } from "react"
// import * as THREE from 'three'
function Lights(props) {
    const light = useRef()
    // useHelper(light, THREE.DirectionalLightHelper)
    return <directionalLight ref={light} intensity={1} position={props.position} 
    shadow-mapSize-width={64} shadow-mapSize-height={64} color="yellow" />

}

export default Lights;
