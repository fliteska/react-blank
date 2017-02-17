import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

/* Import your app's reducers here */
import CounterReducer from 'modules/Counter/reducer';

export const rootReducer = combineReducers({
    CounterReducer,
    routing: routerReducer
});

export default rootReducer;
