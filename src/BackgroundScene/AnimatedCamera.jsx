import { useRef, useEffect } from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import { gsap } from 'gsap';

export const CameraTimeline = new gsap.timeline({
  paused: true,
});

function AnimatedCamera(props) {
  const cameraRef = useRef();

  useEffect(() => {
    CameraTimeline.to(
      cameraRef.current.position,
      {
        x: -15,
        y: 0,
        z: 13,
      },
      'full shot'
    );

    CameraTimeline.to(
      cameraRef.current.rotation,
      {
        x: 0,
        y: -0.8,
        z: 0,
      },
      'full shot'
    );

    CameraTimeline.to(
      cameraRef.current.position,
      {
        x: -8,
        y: 2,
        z: 0,
      },
      'end'
    );

    CameraTimeline.to(
      cameraRef.current.rotation,
      {
        x: 0,
        y: -1.5,
        z: 0,
      },
      'end'
    );
  }, [cameraRef]);

  return <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 4, 6]} rotation={[0, 0, 0]} />;
}

export default AnimatedCamera;