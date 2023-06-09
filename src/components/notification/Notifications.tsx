import React from "react";
import { BarChart, BellOutlined, Clock } from "../../icons";

import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Notifications.module.css";

const Card1: React.FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <BellOutlined />
        <p className={styles.headerText}>Save</p>
      </div>
      <h3 className={styles.largeTitle}>
        We’ll be sending notifications to you here
      </h3>
      <input
        className={styles.cardInput}
        type="text"
        value="hello@loch.one"
        placeholder="email"
      />
    </div>
  );
};

const Card2: React.FC = () => {
  return (
    <div className={`${styles.card} ${styles.card2}`}>
      <div className={styles.cardHeader}>
        <BarChart />
        <input type="checkbox" readOnly name="" id="" checked />
      </div>
      <h3 className={`${styles.mediumTitle}`}>
        Notify me when any wallets move more than
      </h3>
      <div className={styles.dropdownContainer}>
        <select className={styles.cardDropdown} name="" id="">
          <option value="1000" selected>
            $1,000.00
          </option>
          <option value="2000">$2,000.00</option>
          <option value="3000">$3,000.00</option>
        </select>
        <span className={styles.focus}></span>
      </div>
    </div>
  );
};

const Card3: React.FC = () => {
  return (
    <div className={`${styles.card} ${styles.card3}`}>
      <div className={styles.cardHeader}>
        <Clock />
        <input type="checkbox" readOnly name="" id="" checked />
      </div>
      <h3 className={styles.mediumTitle}>
        Notify me when any wallet dormant for
      </h3>
      <div className={styles.dropdownContainer}>
        <select className={styles.cardDropdown} name="" id="">
          <option value="30" selected>
            {`>30 days`}
          </option>
          <option value="20">{`>20 days`}</option>
          <option value="10">{`>10 days`}</option>
        </select>
      </div>
      <h3 className={styles.mediumTitle}>becomes active</h3>
    </div>
  );
};

const Notifications: React.FC = () => {
  return (
    <Carousel
      showArrows={false}
      showStatus={false}
      showIndicators={false}
      centerMode={true}
      swipeable={false}
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
      interval={1000}
      stopOnHover={true}
      className={styles.carousel}
    >
      <Card1 />
      <Card2 />
      <Card3 />
    </Carousel>
  );
};

export default Notifications;
