import React from "react";
import {BellFilled, EyeIcon, LochLogo} from "../../icons";

import cohortImg from '../../assets/cohort.svg';

import styles from "./Home.module.css";
import { Notifications, Testimonails } from "../../components";

export const Home: React.FC = () => {
  const [email, setEmail] = React.useState<string>('')
  const [isValidEmail, setIsValidEmail] = React.useState<boolean>(true);

  const submitHandler = (): void => {
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    if(regex.test(email)){
      window.location.href = 'https://app.loch.one/welcome'
    }else {
      setIsValidEmail(false)
    }
  }

  return (
    <div className={styles.homeContainer}>
      <div className={styles.leftSection}>
        <div className={styles.notifications}>
          <div className={styles.infoCard}>
            <BellFilled />
            <h2 className={styles.infoTitle}>
              Get notified when a highly correlated whale makes a move
            </h2>
            <p className={styles.infoDesc}>
              Find out when a certain whale moves more than any preset amount
              on-chain or when a dormant whale you care about becomes active.
            </p>
          </div>
          <div className={styles.notificationWrapper}>
            <Notifications />
          </div>
        </div>
        <div className={styles.whales}>
          <div className={styles.whalesImgContainer}>
            <img
              className={styles.whaleImg}
              src={cohortImg}
              alt="dashboard showing data what other whales are doing"
            />
          </div>
          <div className={`${styles.infoCard} ${styles.rightAlign}`}>
            <EyeIcon />
            <h2 className={styles.infoTitle}>
              Watch what the whales are doing
            </h2>
            <p className={styles.infoDesc}>
              All whales are not equal. Know exactly what the whales impacting
              YOUR portfolio are doing.
            </p>
          </div>
        </div>
        <div className={styles.testimonials}>
          <div className={styles.testimonialHeader}>
            <h3>Testimonials</h3>
          </div>
          <div className={styles.cardsWrapper}>
            <LochLogo />
            <div className={styles.cardsContainer}>
              <Testimonails />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.emailForm}>
          <h2 className={styles.formHeading}>
            Sign up for <br />
            exclusive access.
          </h2>
          <input
            className={styles.formInput}
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={submitHandler} className={styles.formCta}>Get started</button>
          {!isValidEmail && <p className={styles.errorMessage}>Please enter a valid email</p>}
          <p className={styles.formMessage}>
            You’ll receive an email with an invite link to join.
          </p>
        </div>
      </div>
    </div>
  );
};
