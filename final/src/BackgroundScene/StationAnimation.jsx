import { useRef, useEffect, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import useScrollProgress from './useScrollProgress';
import { AnimationTimeline } from './AnimationTimeline';
import AnimatedLabel from './AnimatedLabel';

export default function StationAnimation(props) {
  const { modelUrl } = props;
  const modelRef = useRef();
  const group = useRef();
  const progress = useScrollProgress();
  const { scene, animations, materials } = useGLTF(modelUrl);

  // Use state to keep track of whether initial opacity is set
  const [initialOpacitySet, setInitialOpacitySet] = useState(false);

  for (const key in materials) {
    if (materials.hasOwnProperty(key) && typeof materials[key] === 'object' && materials[key] !== null) {
      materials[key].transparent = true;

      // Check if initialOpacity is not set, then set it to 0
      if (!initialOpacitySet) {
        materials[key].opacity = 0;
      }
    }
  }

  useEffect(() => {
    // If initialOpacity is not set, set it to true and apply animations
    if (!initialOpacitySet) {
      setInitialOpacitySet(true);

      AnimationTimeline.to(
        Object.values(materials),
        {
          opacity: 1,
        },
        'map1'
      );
    }
  }, [materials, initialOpacitySet]);

  const { actions } = useAnimations(animations, scene);
  const firstAnimationClip = Object.values(actions)[0];

  useEffect(() => {
    firstAnimationClip.time = firstAnimationClip.getClip().duration * progress * 9;
  }, [progress, actions]);

  // Set the animation to play based on scroll position
  useEffect(() => {
    // We set the animation to play and pause it
    firstAnimationClip.reset().play().paused = true;
  }, [actions]);

  // console.log(materials.BlueLine.opacity);
  return (
    <group dispose={null}>
      <primitive
        ref={modelRef}
        position={[-150, 80, 0]}
        rotation={[1, 3.1, 0]}
        scale={[0.8, 0.8, 0.8]}
        object={scene}
      />

      <AnimatedLabel fadeInKey={'map3'} fadeOutKey={'map5'} position={[-180, 55, 0]}>
        K5
      </AnimatedLabel>
      <AnimatedLabel fadeInKey={'map3'} fadeOutKey={'map5'} position={[85, -105, 0]}>
        Victim
      </AnimatedLabel>
    </group>
  );
}
