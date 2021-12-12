import React from 'react';
import './styles.css';
import pic from './img/miracles.png';
import picLabel from './img/label.png';

const Content = (props) => {
    const {state} = props;
    return (
        <div className={[state === 'solve' ? "show" : '', "VisualExample_demo_answer"].join(' ')}>
            <img src={pic}/>
        </div>
    )
};

const VisualExample = (props) => {
    return <div className="VisualExample">
        <div>
            {Content(props)}
            <div className="VisualExample_demo">
                {props.state === 'demo' ? <img src={picLabel}/> : <img style={{opacity: 0}} src={picLabel}/>}
                <img src={pic}/>
            </div>
        </div>
    </div>
};

export default VisualExample;

