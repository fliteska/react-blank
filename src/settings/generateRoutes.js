import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import { store, history } from './createStore';

/* Import your container components here */
import App from 'containers/App';
import Home from 'containers/Home';

export const generateRoutes = () => {
    ReactDOM.render(
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home} />
                </Route>
            </Router>
        </Provider>,
        document.getElementById('root')
    );
};
