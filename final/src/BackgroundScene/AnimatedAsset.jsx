import { useRef, useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import AnimatedLabel from './AnimatedLabel';
import { AnimationTimeline } from './AnimationTimeline';
import RingHighlight from './RingHighlight';

function AnimatedAsset(props) {
  const modelRef = useRef();
  const group = useRef();
  const { position, scale } = props;
  const gltf = useLoader(GLTFLoader, '/k5_nypdrobot.glb');

  useEffect(() => {
    // Rotation Animation
    AnimationTimeline.to(
      group.current.rotation,
      {
        y: 0.5,
      },
      'intro2'
    );

    AnimationTimeline.to(
      group.current.rotation,
      {
        y: 1,
      },
      'intro3'
    );

    AnimationTimeline.to(
      group.current.rotation,
      {
        y: 1.5,
      },
      'intro4'
    );

    AnimationTimeline.to(
      group.current.rotation,
      {
        y: 2,
      },
      'intro5'
    );

    AnimationTimeline.to(
      group.current.rotation,
      {
        y: 2.5,
      },
      'intro6'
    );
    AnimationTimeline.to(
      group.current.rotation,
      {
        y: 3,
      },
      'intro7'
    );
    AnimationTimeline.to(
      group.current.rotation,
      {
        y: 3.5,
      },
      'intro8'
    );
    AnimationTimeline.to(
      group.current.rotation,
      {
        y: 4,
      },
      'intro9'
    );
    AnimationTimeline.to(
      group.current.rotation,
      {
        y: 4.5,
      },
      'height'
    );
    AnimationTimeline.to(
      group.current.rotation,
      {
        y: 5,
      },
      'height1'
    );
    AnimationTimeline.to(
      group.current.rotation,
      {
        y: 6.3,
      },
      'height2'
    );

    AnimationTimeline.to(
      group.current.rotation,
      {
        y: 6.3,
      },
      'specs4'
    );

    AnimationTimeline.to(
      group.current.rotation,
      {
        y: 3.14,
      },
      'button'
    );
    AnimationTimeline.to(
      group.current.rotation,
      {
        y: 3.14,
      },
      'button4'
    );
    AnimationTimeline.to(
      group.current.rotation,
      {
        y: 2.5,
      },
      'camera'
    );
    AnimationTimeline.to(
      group.current.rotation,
      {
        y: 2,
      },
      'camera1'
    );
    AnimationTimeline.to(
      group.current.rotation,
      {
        y: 1.5,
      },
      'camera2'
    );
    AnimationTimeline.to(
      group.current.rotation,
      {
        y: 1,
      },
      'camera3'
    );
    AnimationTimeline.to(
      group.current.rotation,
      {
        y: 0.5,
      },
      'camera4'
    );
    AnimationTimeline.to(
      group.current.rotation,
      {
        y: 0,
      },
      'spec5'
    );

    // Position Animation
    AnimationTimeline.to(
      group.current.position,
      {
        x: 0,
        y: 0,
        z: 0,
      },
      'spec8'
    );
    AnimationTimeline.to(
      group.current.position,
      {
        x: -126,
        y: 52,
        z: 13,
      },
      'map'
    );
  }, [group]);

  return (
    <group ref={group} dispose={null}>
      <primitive
        ref={modelRef}
        position={position ? position : [0, -5, 0]}
        scale={scale ? scale : [3, 3, 3]}
        rotation={[0, 3.14, 0]}
        object={gltf.scene}
        alpha={0}
      ></primitive>

      {/* Text Labels */}
      <AnimatedLabel fadeInKey={'button1'} fadeOutKey={'button3'} position={[0, 3.85, 0]}>
        Button
      </AnimatedLabel>
      <AnimatedLabel fadeInKey={'button4'} fadeOutKey={'spec5'} position={[0.43, 4.2, -1.3]}>
        Camera
      </AnimatedLabel>
      <AnimatedLabel fadeInKey={'button4'} fadeOutKey={'spec5'} position={[-0.8, 4, -0.48]}>
        Camera
      </AnimatedLabel>

      {/* Camera Highlights */}
      <RingHighlight
        fadeInKey={'button4'}
        fadeOutKey={'spec5'}
        position={[0, 3.89, 0.9]}
        scale={[2, 2, 1]}
        rotation={[0, 0, 0]}
      />
      <RingHighlight
        fadeInKey={'button4'}
        fadeOutKey={'spec5'}
        position={[-1, 3.8, 0]}
        scale={[2, 2, 1]}
        rotation={[0, 1.5, 0]}
      />
      <RingHighlight
        fadeInKey={'button4'}
        fadeOutKey={'spec5'}
        position={[0, 3.86, -0.9]}
        scale={[2, 2, 1]}
        rotation={[0, 0, 0]}
      />
    </group>
  );
}

export default AnimatedAsset;
