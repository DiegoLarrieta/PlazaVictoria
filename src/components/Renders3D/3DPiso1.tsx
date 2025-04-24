import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useState, useEffect } from "react";

const PisoModel = ({ setLoading }: { setLoading: (loading: boolean) => void }) => {
  const gltf = useGLTF("/renders/Piso11.glb");

  useEffect(() => {
    setLoading(false); // Marca como cargado
  }, [gltf, setLoading]);

  return <primitive object={gltf.scene} scale={1} />;
};

const Piso1Viewer = () => {
  const [loading, setLoading] = useState(true);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    if (!loading) {
      setShowInfo(true);
      const timer = setTimeout(() => setShowInfo(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <div className="w-full h-[600px] relative">
      {/* Mensaje de carga */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
          <p className="text-lg font-semibold">Cargando render 3D...</p>
        </div>
      )}

      {/* Mensaje de ayuda para mover/zoom */}
      {!loading && showInfo && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10 transition-opacity duration-200">
          <p className="text-white text-center text-lg px-4">
          ⬅️ Usa tus dedos o el mouse para mover el modelo y hacer zoom ➡️
          </p>
        </div>
      )}

      {/* Render 3D */}
      <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <PisoModel setLoading={setLoading} />
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
          maxDistance={15}
        />
      </Canvas>
    </div>
  );
};

export default Piso1Viewer;
