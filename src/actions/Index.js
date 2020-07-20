import * as c from './ActionTypes';

export const requestRemedies = () => ({
  type: c.REQUEST_REMEDIES
});

export const getRemediesSuccess = (remedies) => ({
  type: c.GET_REMEDIES_SUCCESS,
  remedies
});

export const getRemediesFailure = (error) => ({
  type: c.GET_REMEDIES_FAILURE,
  error
});

export const makeApiCall = () => {
  return dispatch => {
    dispatch(requestRemedies);
    return fetch(`https://prime.exchangerate-api.com/v5/${process.env.API_KEY}/latest/USD`)
      .then(response => response.json())
      .then(
        (jsonifiedResonse) => {
          dispatch(getRemediesSuccess(jsonifiedResonse.results));
          console.log(jsonifiedResonse.results);
        })
      .catch((error) => {
        dispatch(getRemediesFailure(error));
      });

  }
}