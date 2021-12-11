import React from 'react';
import './styles.css';

const Task = (props) => {
    const {first, second} = props;
    return <div className="Task-wrapper">
        <div className="Task">
            <div>{first} x {second} =</div>
            <input/>
        </div>
        <button className="Task_button">Отправить</button>
    </div>
};

export default Task;
