import React from 'react';

import './styles.css';

const getActiveClassName = ({first, second}, i, j) => {
    if (i <= second && j <= first) {
        return 'active'
    }

    return '';
};

const MultiplicationTable = (props) => {
    const digits = 9;
    const res = [];
    for (let i = 1; i <= digits; i++) {
        let row = [];
        for (let j = 1; j <= digits; j++) {
            row.push(<td className={getActiveClassName(props, i, j)}>{i * j}</td>)
        }
        res.push(<tr className="MultiplicationTable_row">{row}</tr>);
    }

    return <table className="MultiplicationTable">
        {
            res.map((i) => i)
        }
    </table>
};

export default MultiplicationTable;
