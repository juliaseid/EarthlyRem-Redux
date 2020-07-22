// import * as c from './ActionTypes';
// import React, { useState, useEffect } from 'react';

// export const requestRemedies = () => ({
//   type: c.REQUEST_REMEDIES
// });

// export const getRemediesSuccess = (remedies) => ({
//   type: c.GET_REMEDIES_SUCCESS,
//   remedies
// });

// export const getRemediesFailure = (error) => ({
//   type: c.GET_REMEDIES_FAILURE,
//   error
// });

// export const deleteRemedy = id => ({
//   type: c.DELETE_REMEDY,
//   id
// });

// export const toggleForm = () => ({
//   type: c.TOGGLE_FORM
// });


// export const [isLoading, setIsLoading] = useState(false);
// export const [error, setError] = useState(null);


// export const makeApiCall = () => {
//   return dispatch => {
//     //dispatch(requestRemedies);
//     setIsLoading(true);
//     return fetch(`http://localhost:5000/api/remedies`)
//       .then(response => response.json())
//       .then(
//         (jsonifiedResponse) => {
//           setIsLoading(false);
//           //dispatch(getRemediesSuccess(jsonifiedResponse.remedies));
//           console.log(jsonifiedResponse.remedies);
//         })
//       .catch((error) => {
//         setError(error);
//         //dispatch(getRemediesFailure(error));
//       });
//   }
// }

export const addRemedy = (remedy) => {
  const { remedyName, details, ailment, category, ingredients, id, } = remedy;
  return {
    type: 'ADD_REMEDY',
    name: remedyName,
    details: details,
    ailment: ailment,
    category: category,
    ingredients: ingredients,
    id: id
  }
}
