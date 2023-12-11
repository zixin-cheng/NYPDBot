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
      '1'
    );

    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 0,
        z: 12,
      },
      '2'
    );

    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 0,
        z: 12,
      },
      '3'
    );

    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 0,
        z: 12,
      },
      '4'
    );

    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0.5,
        y: 1,
        z: 15,
      },
      '5'
    );

    // AnimationTimeline.to(
    //   cameraRef.current.position,
    //   {
    //     x: 0.5,
    //     y: 1,
    //     z: 15,
    //   },
    //   '6'
    // );

    // AnimationTimeline.to(
    //   cameraRef.current.position,
    //   {
    //     x: 0.5,
    //     y: 1,
    //     z: 15,
    //   },
    //   '7'
    // );

    // AnimationTimeline.to(
    //   cameraRef.current.position,
    //   {
    //     x: 0.5,
    //     y: 1,
    //     z: 15,
    //   },
    //   '8'
    // );
    // AnimationTimeline.to(
    //   cameraRef.current.position,
    //   {
    //     x: 0.5,
    //     y: 1,
    //     z: 15,
    //   },
    //   '9'
    // );
    // AnimationTimeline.to(
    //   cameraRef.current.position,
    //   {
    //     x: 0.5,
    //     y: 1,
    //     z: 15,
    //   },
    //   '10'
    // );

    // AnimationTimeline.to(
    //   cameraRef.current.position,
    //   {
    //     x: 0.5,
    //     y: 1,
    //     z: 15,
    //   },
    //   '11'
    // );
    // AnimationTimeline.to(
    //   cameraRef.current.position,
    //   {
    //     x: 0.5,
    //     y: 1,
    //     z: 15,
    //   },
    //   '12'
    // );
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0.5,
        y: 1,
        z: 15,
      },
      '13'
    );

    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0.5,
        y: 1,
        z: 10,
      },
      '14'
    );
  }, [cameraRef]);

  return <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 4, 6]} rotation={[0, 0, 0]} />;
}

export default AnimatedCamera;
