import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import { increaseCounter, decreaseCounter, resetCounter } from './actions';

export const Counter = ({ count, increaseCounter, decreaseCounter, resetCounter }) => (
    <div className='c-counter'>
        <div className='c-counter__value'>{numeral(count).format('0,0')}</div>
        <div className='c-counter__buttons'>
            <button onClick={increaseCounter}>+</button>
            <button onClick={decreaseCounter}>-</button>
            <button onClick={resetCounter}>Reset</button>
        </div>
    </div>
);

const connected = connect(state => ({
    count: state.CounterReducer.count
}), {
    increaseCounter,
    decreaseCounter,
    resetCounter
})(Counter);

export default connected;