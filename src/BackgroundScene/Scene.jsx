import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

import AnimatedCamera from './AnimatedCamera';
import styles from '../ProjectCard/ProjectCard.module.css';
import AnimatedAsset from './AnimatedAsset';

function Scene() {
  return (
    <div className={styles.canvas_wrapper}>
      <Canvas>
        {/* Camera 🎥 */}
        <AnimatedCamera />

        {/* Lights 💡 */}
        <ambientLight intensity={1} />
        {/* <pointLight position={[4, 4, 2]} intensity={4} /> */}
        <directionalLight color="white" position={[0, 0, 5]} />

        {/* We can create a background color as a child element of the canvas we just have to attach it */}
        <color args={['white']} attach="background" />

        {/* Objects 📦 */}
        <Suspense fallback={null}>
          <AnimatedAsset
            // modelUrl={'/k5_nypdrobot.glb'}
            modelUrl={'https://cdn.glitch.global/c030b272-a13c-4e68-a7c8-43f0704031d1/k5_nypdrobot.glb?v=1698351816561'}
          />

          <meshStandardMaterial roughness={0.3} metalness={0.6} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Scene;
