import React from 'react';
import './styles.css';
import pic from './img/miracles.png';
import picLabel from './img/label.png';

const getContent = (props) => {
    const {state, count} = props;
    let elem = null;
    switch (state) {
        case 'demo':
            elem = <div className="VisualExample_demo"><img src={picLabel}/><img src={pic}/></div>;
            break;
        case 'solve':
            elem = new Array(count).map((it) => <img src={pic}/>)
            break;
    }
    return elem;
};

const VisualExample = (props) => {
    return <div className="VisualExample">{getContent(props)}</div>
};

export default VisualExample;

