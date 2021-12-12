import React from 'react';

const Intervals = () => {
    return (
        <div>
            <h1>Интервалы повторения</h1>
            <div>
                {
                    ['5 секунд', '25 секунд', '2 минуты', '10 минут', '1 час', '5 часов', '1 день', '5 дней', '25 дней']
                        .map((it) => `через ${it}`)
                        .join('  ⏰  ')
                }
            </div>
        </div>
    )
};

export default Intervals;
