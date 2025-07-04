import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { parseDate } from "../MarathonDetails/MarathonDetail";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const responsiveTimer = () => {
  const windowWidth = window.innerWidth;
  if (windowWidth >= 768) {
    return {
      isPlaying: true,
      size: 120,
      strokeWidth: 6
    }
  } else if (windowWidth >= 480 && windowWidth <= 768) {
    return {
      isPlaying: true,
      size: 60,
      strokeWidth: 1
    }
  } else if (windowWidth < 480) {
    return {
      isPlaying: true,
      size: 40,
      strokeWidth: 1
    }
  }
}

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

export default function TimeLeft({endDate}) {
  const [timerProps, setTimerProps] = useState(responsiveTimer());

  useEffect(() => {
    const handleResize = () => {
      setTimerProps(responsiveTimer());
    }

    window.addEventListener('resize', handleResize);
  }, [])

  const stratTime = dayjs().unix(); // use UNIX timestamp in seconds
  const endTime = parseDate(endDate).unix(); // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  return (
    <div className="flex items-center gap-4 absolute inset-x-0 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-fit bg-black p-4 rounded-full opacity-90">
      <CountdownCircleTimer
        {...timerProps}
        colors="#7E2E84"
        duration={daysDuration}
        initialRemainingTime={remainingTime}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color, }}>
            {renderTime("days", getTimeDays(daysDuration - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors="#D14081"
        duration={daySeconds}
        initialRemainingTime={remainingTime % daySeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > hourSeconds
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("hours", getTimeHours(daySeconds - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors="#EF798A"
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors="#218380"
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > 0
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("seconds", getTimeSeconds(elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
    </div>
  );
}
