import fetch from 'isomorphic-fetch';

export const basicRequest = () => {
    return dispatch => {
        return fetch(`PATH_TO_API`, {})
            .then(response => response.json());
    }
};
