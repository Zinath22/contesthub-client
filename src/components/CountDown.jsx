
import React, { useState, useEffect } from 'react';
import moment from 'moment';

const CountDown = ({ deadline }) => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function calculateTimeRemaining() {
    const now = moment();
    const targetDate = moment(deadline);
    const duration = moment.duration(targetDate.diff(now));

    return {
      days: duration.days(),
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds(),
    };
  }

  return (
    <div>

      <p>
        {timeRemaining.days} DD, {timeRemaining.hours} HH, {timeRemaining.minutes} MM, {timeRemaining.seconds} SS
      </p>
    </div>
  );
};

export default CountDown;
