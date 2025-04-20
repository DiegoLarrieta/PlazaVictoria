import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

// Carga del modelo 3D
const PisoModel = () => {
  const gltf = useGLTF("/renders/Piso11.glb");
  return <primitive object={gltf.scene} scale={1} />;
};

// Fallback mientras se carga el modelo
const LoadingFallback = () => (
  <div className="flex justify-center items-center h-full text-center text-sm text-gray-600 animate-pulse">
    Cargando renders 3D...
  </div>
);

// Visor principal
const Piso1Viewer = () => {
  return (
    <div className="w-full h-[600px] bg-white rounded shadow overflow-hidden">
      <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        <Suspense fallback={<LoadingFallback />}>
          <PisoModel />
        </Suspense>

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  );
};

export default Piso1Viewer;
