import React, {useState, useEffect} from 'react';

import './styles.css';

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return `${mins}`.padStart(2, '0') + ':' + `${secs}`.padStart(2, '0');
};

const getLabel = (isCorrect) => {
    if (isCorrect === true) {
        return <div className="Timer_answer">Совершенно верно!</div>
    } else if (isCorrect === false) {
        return <div className="Timer_answer_wrong">Попробуй ещё раз</div>
    }
    return null;
};

const Timer = ({state, isCorrect}) => {
    const [seconds, setSeconds] = useState(60);
    useEffect(() => {
        const intervalId = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else {
                setSeconds(60);
            }
        }, 1000);

        return () => clearTimeout(intervalId);
    });

    return state === 'solve' ? getLabel(isCorrect) : (
        <div className="Timer">
            <span className="Timer_digits">{formatTime(seconds)}</span>
        </div>
    );
};

export default Timer;
