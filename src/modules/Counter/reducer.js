import { INCREASE_COUNTER, DECREASE_COUNTER, RESET_COUNTER } from './constants';

export const CounterReducer = (state = {
    count: 0
}, action) => {
    switch (action.type) {
        case INCREASE_COUNTER:
            return Object.assign({}, state, {
                count: state.count + 1
            });
        case DECREASE_COUNTER:
            return Object.assign({}, state, {
                count: state.count - 1
            });
        case RESET_COUNTER:
            return Object.assign({}, state, {
                count: 0
            });
        default:
            return state;
    }
};

export default CounterReducer;
