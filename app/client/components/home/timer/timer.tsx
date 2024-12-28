// src/components/CountdownTimer.tsx

import { useEffect, useState } from 'react';
import styles from './timer.module.scss';

const startDate = new Date('2024-12-11T00:00:00Z').getTime();
const endDate = new Date('2024-12-28T13:00:00Z').getTime();

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();

    // Avant la date de début
    if (now < startDate) {
      return {
        status: 'startingSoon',
        difference: startDate - now,
      };
    }

    // Pendant la période d'inscription
    if (now >= startDate && now < endDate) {
      return {
        status: 'ongoing',
        difference: endDate - now,
      };
    }

    // Après la date de fin
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
    return <div className={styles.ended}>Registration date</div>;
  }

  const countdown = formatTime(timeLeft.difference);

  return (
    <div id='timerHome' className={styles.timerContainer}>
      <h2 className={styles.title}>
        {timeLeft.status === 'startingSoon' ? '' : 'Registration date'}
      </h2>
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

export default CountdownTimer;
