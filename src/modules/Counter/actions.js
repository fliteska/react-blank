import { INCREASE_COUNTER, DECREASE_COUNTER, RESET_COUNTER } from './constants';

export const increaseCounter = () => ({
    type: INCREASE_COUNTER
});

export const decreaseCounter = () => ({
    type: DECREASE_COUNTER
});

export const resetCounter = () => ({
    type: RESET_COUNTER
});
