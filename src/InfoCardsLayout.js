import { useRef, useEffect } from 'react';
import React from 'react';
import styles from './LandingPage.module.css';
import InfoCard from './InfoCard';
// import { gsap } from 'gsap';

// export const InfoCardsTimeline = new gsap.timeline({
//   paused: true,
// });

export default function InfoCardsLayout(props) {
  const cardRef = useRef();
  console.log(cardRef);
  // useEffect(() => {
  //   InfoCardsTimeline.to(
  //     cardRef.current.position,
  //     {
  //       x: -15,
  //       y: 0,
  //       z: 13,
  //     },
  //     'full shot'
  //   );

  //   InfoCardsTimeline.to(
  //     cardRef.current.position,
  //     {
  //       x: -8,
  //       y: 2,
  //       z: 0,
  //     },
  //     'end'
  //   );
  // }, [cardRef]);

  return (
    <>
      <InfoCard
        ref={cardRef}
        left={10}
        width={20}
        top={100}
        header={'K-5'}
        paragraph={`The K5, described as a “fully autonomous” security robot, is part of a push by the mayor for more
          law-enforcement technology, which has raised concerns among privacy advocates.`}
      />

      <InfoCard
        left={10}
        width={20}
        top={200}
        header={''}
        paragraph={`The K5, described as a “fully autonomous” security robot, is part of a push by the mayor for more
          law-enforcement technology, which has raised concerns among privacy advocates.`}
      />

      <InfoCard
        left={70}
        width={20}
        top={250}
        header={''}
        paragraph={`The K5, described as a “fully autonomous” security robot, is part of a push by the mayor for more
          law-enforcement technology, which has raised concerns among privacy advocates.`}
      />
    </>
  );
}
