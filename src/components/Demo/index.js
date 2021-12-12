import React, {useState} from 'react';
import './styles.css';
import Task from "../Task";
import Timer from "../Timer";
import VisualExample from "../VisualExample";
import MultiplicationTable from "../MultiplicationTable";

const Demo = () => {
    const [demoState, setDemoState] = useState('demo');
    const [isCorrect, setCorrect] = useState(null);
    const checkAnswer = (result) => {
        setDemoState('solve');
        setCorrect(result)
    };
    const props = {
        first: 7,
        second: 2,
        checkAnswer,
        state: demoState,
        isCorrect
    };
    return <div>
        <div className="Demo">
            <Task {...props} />
            <Timer state={demoState} isCorrect={isCorrect}/>
        </div>
        <VisualExample count={props.second} {...props}/>
    </div>
};

export default Demo;
