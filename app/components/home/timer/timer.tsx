"use client";

// src/components/CountdownTimer.tsx

import { useEffect, useState } from 'react';
import styles from './timer.module.scss';

// Date de début fixée dans le code en UTC
const startDate = Date.UTC(2024, 11, 31, 0, 0, 0); // 2024-12-31T00:00:00Z
const endDate = startDate + (24 + 37) * 60 * 60 * 1000; // Ajout de 35 heures en millisecondes

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();

    // Pendant la période du compte à rebours
    if (now < endDate) {
      return {
        status: 'ongoing',
        difference: endDate - now,
      };
    }

    // Après la fin du compte à rebours
    return {
      status: 'ended',
      difference: 0,
    };
  }

  function formatTime(difference: number) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft.status === 'ended') {
    return <div className={styles.ended}>The countdown has ended!</div>;
  }

  const countdown = formatTime(timeLeft.difference);

  return (
    <div id="timerHome" className={styles.timerContainer}>
      <h2 className={styles.title}>FCLUB MATRIX</h2>
      <div className={styles.timer}>
        <div className={styles.timeBox}>
          <span className={styles.number}>{countdown.days}</span>
          <span className={styles.label}>Days</span>
        </div>
        <div className={styles.timeBox}>
          <span className={styles.number}>{countdown.hours}</span>
          <span className={styles.label}>Hours</span>
        </div>
        <div className={styles.timeBox}>
          <span className={styles.number}>{countdown.minutes}</span>
          <span className={styles.label}>Minutes</span>
        </div>
        <div className={styles.timeBox}>
          <span className={styles.number}>{countdown.seconds}</span>
          <span className={styles.label}>Seconds</span>
        </div>
      </div>
    </div>
  );
};
