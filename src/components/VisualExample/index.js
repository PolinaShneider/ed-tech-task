import React from 'react';
import './styles.css';
import pic from './img/miracles.png';
import picLabel from './img/label.png';
import MultiplicationTable from "../MultiplicationTable";

const Content = (props) => {
    const {state} = props;
    return (
        <div className={[state === 'solve' ? "show" : '', "VisualExample_demo_answer"].join(' ')}>
            <img width={600} src={pic}/>
        </div>
    )
};

const VisualExample = (props) => {
    return <div className="VisualExample">
        <div className="VisualExample_holder">
            <div className="VisualExample_pics">
                {Content(props)}
                <div className="VisualExample_demo">
                    {props.state === 'demo' ? <img src={picLabel}/> : <img style={{opacity: 0}} src={picLabel}/>}
                    <img src={pic}/>
                </div>
            </div>
            <MultiplicationTable {...props}/>
        </div>
    </div>
};

export default VisualExample;

