import { Canvas } from "@react-three/fiber";
import RobotInspector from "./RobotInspector.jsx";

export default function RobotScene() {
  return (
    <div className="relative h-full w-full">
      <Canvas
        className="h-full w-full"
        camera={{
          position: [0, 2, 5],
          fov: 40,
        }}
      >
        <ambientLight intensity={1.5} />

        <directionalLight position={[5, 5, 5]} intensity={2} />

        <RobotInspector />
      </Canvas>
    </div>
  );
}
