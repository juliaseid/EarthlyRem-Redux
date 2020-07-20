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
    // console.log(`${process.env.REACT_APP_API_KEY}`);
    return fetch(`https://prime.exchangerate-api.com/v5/${process.env.REACT_APP_API_KEY}/latest/USD`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(getRemediesSuccess(jsonifiedResponse.conversion_rates));
          // console.log("i am in success");
          console.log(jsonifiedResponse.conversion_rates);
        })
      .catch((error) => {
        dispatch(getRemediesFailure(error));
      });

  }
}