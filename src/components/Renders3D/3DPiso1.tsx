import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useState, useEffect } from "react";

const PisoModel = ({ setLoading }: { setLoading: (loading: boolean) => void }) => {
  const gltf = useGLTF("/renders/Piso11.glb");

  useEffect(() => {
    setLoading(false); // Indica que el modelo ha terminado de cargarse
  }, [gltf, setLoading]);

  return <primitive object={gltf.scene} scale={1} />;
};

const Piso1Viewer = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="w-full h-[600px] relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
          <p className="text-lg font-semibold">Cargando render 3D...</p>
        </div>
      )}
      <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <PisoModel setLoading={setLoading} />
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