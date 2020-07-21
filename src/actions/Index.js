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

export const deleteRemedy = id => ({
  type: c.DELETE_REMEDY,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const makeApiCall = () => {
  return dispatch => {
    dispatch(requestRemedies);
    return fetch(`http://localhost:5000/api/remedies`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(getRemediesSuccess(jsonifiedResponse.remedies));
          // console.log("i am in success");
          console.log(jsonifiedResponse.remedies);
        })
      .catch((error) => {
        dispatch(getRemediesFailure(error));
      });
  }
}

export const addRemedy = (remedy) => {
  const { remedyName, details, ailment, category, ingredients, id, } = remedy;
  return {
    type: c.ADD_REMEDY,
    name: remedyName,
    details: details,
    ailment: ailment,
    category: category,
    ingredients: ingredients,
    id: id
  }
}