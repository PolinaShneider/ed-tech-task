import React from 'react';
import './styles.css';
import Task from "../Task";
import Timer from "../Timer";
import VisualExample from "../VisualExample";

const Demo = () => {
    return <div>
        <div className="Demo">
            <Task first={1} second={7}/>
            <Timer/>
        </div>
        <VisualExample state="demo" count={2}/>
    </div>
};

export default Demo;
