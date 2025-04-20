import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const PisoModel = () => {
    const gltf = useGLTF("/renders/Piso11.glb");


  return <primitive object={gltf.scene} scale={1} />;
};

const Piso1Viewer = () => {
  return (
    <div className="w-full h-[600px]">
      <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <PisoModel />

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          maxPolarAngle={Math.PI / 2} // No permite ver desde abajo
          minPolarAngle={Math.PI / 4} // Puedes ajustar esto según el ángulo que quieras permitir
        />
      </Canvas>
    </div>
  );
};

export default Piso1Viewer;
