import React, { useRef, useState, MouseEvent } from 'react';
import { Canvas } from 'react-three-fiber';

// function Box(props: any) {
//   const Mesh = useRef();

//   // const [hovered, setHover] = useState(false);
//   const [active, setActive] = useState(false);

//   // useFrame(() => (Mesh.current.rotation.x = Mesh.current.rotation.y += 0.01));

//   return (
//     <Mesh
//       {...props}
//       ref={Mesh}
//       scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
//       onClick={(_e: MouseEvent) => setActive(!active)}
//       onPointerOver={(_e: MouseEvent) => setHover(true)} // fix type
//       onPointerOut={(_e: MouseEvent) => setHover(false)} // fix type
//     />
//   )
// };

export const ThreeSample = () => (
  <Canvas>
    <pointLight position={[10, 10, 10]} />
    <mesh>
      <sphereBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" color="hotpink" />
    </mesh>
  </Canvas>
);
