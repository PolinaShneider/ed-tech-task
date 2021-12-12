import React, {useState} from 'react';
import './styles.css';

const Task = (props) => {
    const {first, second, checkAnswer, isCorrect, reset} = props;
    const [answer, setAnswer] = useState('');
    const check = () => {
        if (answer === '') return
        checkAnswer(+answer === first * second);
    };
    const getInputClass = () => {
        if (answer === '' || isCorrect === null) return '';
        return isCorrect ? "Task_input_correct" : "Task_input_wrong";
    };
    return <div className="Task-wrapper">
        <div className="Task">
            <div>{first} x {second} =</div>
            <input
                className={getInputClass()}
                value={answer}
                onChange={e => setAnswer(e.target.value)}
                onFocus={() => {
                    reset()
                    setAnswer('')
                }}
            />
        </div>
        <button className="Task_button" onClick={check}>Отправить</button>
    </div>
};

export default Task;
