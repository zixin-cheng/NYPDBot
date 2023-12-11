// import { useRef, useEffect } from 'react';
import React from 'react';
// import styles from './LandingPage.module.css';
import InfoCard from './InfoCard';
// import { AnimationTimeline } from './BackgroundScene/AnimationTimeline';

export default function InfoCardsLayout(props) {
  // const cardRef = useRef();

  // const { fadeInKey, fadeOutKey } = props;

  // useEffect(() => {
  //   AnimationTimeline.to(
  //     cardRef.current.style,
  //     {
  //       opacity: 1,
  //     },
  //     fadeInKey
  //   );
  //   AnimationTimeline.to(
  //     cardRef.current.style,
  //     {
  //       opacity: 0,
  //     },
  //     fadeOutKey
  //   );
  // }, [cardRef]);

  //<Label fadeInKey={"fullshot"} fadeOutKey={"torso"} >

  return (
    <>
      <InfoCard
        left={10}
        width={20}
        top={30}
        header={'K-5'}
        paragraph={`The K5, described as a “fully autonomous” security robot, is part of a push by the mayor for more
          law-enforcement technology, which has raised concerns among privacy advocates.`}
        startKey={'5'}
        fadeInKey={'6'}
        fadeOutKey={'7'}
        endKey={'8'}
      />

      {/* <InfoCard
        left={10}
        width={20}
        top={70}
        header={''}
        paragraph={`The K5, described as a “fully autonomous” security robot, is part of a push by the mayor for more
          law-enforcement technology, which has raised concerns among privacy advocates.`}
        startKey={'fullshot'}
        fadeInKey={'side view'}
        fadeOutKey={'closeup'}
      /> */}

      <InfoCard
        left={70}
        width={20}
        top={50}
        header={''}
        paragraph={`The K5, described as a “fully autonomous” security robot, is part of a push by the mayor for more
          law-enforcement technology, which has raised concerns among privacy advocates.`}
        startKey={'9'}
        fadeInKey={'10'}
        fadeOutKey={'11'}
        endKey={'12'}
      />
    </>
  );
}
