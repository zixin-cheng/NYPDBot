import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

import AnimatedCamera from './AnimatedCamera';
import styles from '../LandingPage.module.css';
import AnimatedAsset from './AnimatedAsset';
import RingHighlight from './RingHighlight';
import StationAnimation from './StationAnimation';

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

        {/* Objects 📦 */}
        <Suspense fallback={null}>
          <AnimatedAsset />
          <StationAnimation modelUrl="/station_animation2.glb" />
          {/* <AnimatedLabel /> */}

          <RingHighlight
            fadeInKey={'button1'}
            fadeOutKey={'button3'}
            position={[0.01, 3.66, 1.1]}
            scale={[1, 1, 1]}
            rotation={[0, 0, 0]}
          />
          {/* <RingHighlight fadeInKey={'button4'} fadeOutKey={'camera1'} position={[0, 3.8, 1.4]} scale={[2, 2, 1]} /> */}

          <meshStandardMaterial roughness={0.3} metalness={0.6} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Scene;
