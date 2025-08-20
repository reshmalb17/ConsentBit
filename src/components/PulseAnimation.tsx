import React, { useEffect, useState } from 'react';
import { animationIcons } from "../util/optimized-images";
import "../style/styless.css";

const PulseAnimation: React.FC = () => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timings = [0, 200, 400, 700, 1000, 1300];
    let timeouts: NodeJS.Timeout[] = [];

    const startSequence = () => {
      timings.forEach((time, index) => {
        const timeout = setTimeout(() => setStage(index), time);
        timeouts.push(timeout);
      });

      const resetTimeout = setTimeout(() => {
        setStage(0);
        startSequence();
      }, 2000 + timings[timings.length - 1]);
      timeouts.push(resetTimeout);
    };

    startSequence();

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="pulse-wrapper">
      {stage === 0 && <img src={animationIcons.circle} className="pulse-stage stage-circle" />}
      {stage >= 1 && (
        <img src={animationIcons.blob} className={`pulse-stage stage-blob ${stage >= 2 ? 'rotate' : ''}`} />
      )}
      {stage >= 2 && stage < 4 && (
        <img src={animationIcons.dots} className="pulse-stage stage-dots" />
      )}
      {stage === 4 && (
        <img src={animationIcons.dots} className="pulse-stage stage-dots fade-out-dots" />
      )}
      {stage === 5 && (
        <div className="pulse-stage consentbit-logos">
          <img src={animationIcons.logo} alt="ConsentBit Logo" />
        </div>
      )}
    </div>
  );
};

export default PulseAnimation;
