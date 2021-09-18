import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, orbitControls } from '@react-three/drei';
import './App.css';

function Box() {
  return (
    <mesh scale={2}>
      <boxBufferGeometry args={[1, 1, 1]} attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  )
}
function App() {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Box />
    </Canvas>
  );
}

export default App;
