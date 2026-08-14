import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from "three";

export default function RobotInspector() {
  const [robot, setRobot] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const initialRotation = useRef({
    head: null,
    neck: null,
    chest: null,
    eye: null,
  });
  const headRef = useRef(null);
  const neckRef = useRef(null);
  const chestRef = useRef(null);
  const eyeRef = useRef(null);

  useEffect(() => {
    if (!robot) return;

    robot.scale.setScalar(6);
    robot.position.set(0, -1, 0);
  }, [robot]);

  useEffect(() => {
    const loader = new GLTFLoader();

    loader.load(
      "/models/scene.gltf",
      (gltf) => {
        console.log("Robot loaded");

        gltf.scene.traverse((object) => {
          console.log("Name:", object.name, "| Type:", object.type);
        });

        setRobot(gltf.scene);
      },
      undefined,
      (error) => {
        console.error("Failed to load robot:", error);
      },
    );
  }, []);

  useEffect(() => {
    if (!robot) return;

    headRef.current = robot.getObjectByName("Head");
    neckRef.current = robot.getObjectByName("Neck");
    chestRef.current = robot.getObjectByName("Chest");
    eyeRef.current = robot.getObjectByName("Head_Eyes_0");

    if (headRef.current) {
      initialRotation.current.head = {
        x: headRef.current.rotation.x,
        y: headRef.current.rotation.y,
        z: headRef.current.rotation.z,
      };
    }
    if (eyeRef.current) {
      initialRotation.current.eye = {
        x: eyeRef.current.rotation.x,
        y: eyeRef.current.rotation.y,
        z: eyeRef.current.rotation.z,
      };
    }

    if (neckRef.current) {
      initialRotation.current.neck = {
        x: neckRef.current.rotation.x,
        y: neckRef.current.rotation.y,
        z: neckRef.current.rotation.z,
      };
    }

    if (chestRef.current) {
      initialRotation.current.chest = {
        x: chestRef.current.rotation.x,
        y: chestRef.current.rotation.y,
        z: chestRef.current.rotation.z,
      };
    }
  }, [robot]);

  useFrame((state) => {
    if (!robot) return;

    const { x, y } = state.pointer;

    if (eyeRef.current && initialRotation.current.eye) {
      const initial = initialRotation.current.eye;

      const targetY = initial.y - x * 0.25;

      const targetX = initial.x - y * 0.12;

      eyeRef.current.rotation.y = THREE.MathUtils.lerp(
        eyeRef.current.rotation.y,
        targetY,
        0.1,
      );

      eyeRef.current.rotation.x = THREE.MathUtils.lerp(
        eyeRef.current.rotation.x,
        targetX,
        0.1,
      );
    }

    if (headRef.current && initialRotation.current.head) {
      const initial = initialRotation.current.head;

      const targetY = initial.y - x * 0.2;
      const targetX = initial.x - y * 0.1;

      headRef.current.rotation.y = THREE.MathUtils.lerp(
        headRef.current.rotation.y,
        targetY,
        0.06,
      );

      headRef.current.rotation.x = THREE.MathUtils.lerp(
        headRef.current.rotation.x,
        targetX,
        0.06,
      );
    }
  });

  if (!robot) return null;

  return <primitive object={robot} />;
}
