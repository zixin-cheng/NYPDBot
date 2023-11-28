import { useRef, useEffect } from 'react';
import { PerspectiveCamera } from '@react-three/drei';

import { AnimationTimeline } from './AnimationTimeline';

function AnimatedCamera() {
  const cameraRef = useRef();

  useEffect(() => {
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 0,
        z: 12,
      },
      'fullshot'
    );

    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 0.1,
        z: 12,
      },
      'fullshot1'
    );

    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0.1,
        y: 0.1,
        z: 12,
      },
      'fullshot2'
    );

    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 0,
        z: 10,
      },
      'side view'
    );

    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 0.1,
        z: 10,
      },
      'closeup'
    );
  }, [cameraRef]);

  return <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 4, 6]} rotation={[0, 0, 0]} />;
}

export default AnimatedCamera;
