import React from 'react';
import { Carousel } from "react-responsive-carousel";

import styles from './Testimonials.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const testimonials = [
  {
    name: "Jack F",
    designation: "Ex Blackrock PM",
    review:
      `“Love how Loch integrates portfolio analytics and whale watching into one unified app.”`,
  },
  {
    name: "Yash P",
    designation: "Research, 3poch Crypto Hedge Fund",
    review:
      `“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”`,
  },
  {
    name: "Shiv S",
    designation: "Co-Founder Magik Labs",
    review:
      `“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”`,
  },
];


const Testimonials: React.FC = () => {
  return (
    <div className={styles.carouselContainer}>
      <Carousel
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        centerMode={true}
        centerSlidePercentage={70}
        swipeable
        swipeScrollTolerance={10}
        showThumbs={false}
        emulateTouch={true}
      >
        {testimonials.map(({ name, designation, review }) => {
          return (
            <div key={name} className={styles.carouselCard}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardName}>{name}</h3>
                <p className={styles.cardDesignation}>{designation}</p>
              </div>
              <p className={styles.cardReview}>{review}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Testimonials