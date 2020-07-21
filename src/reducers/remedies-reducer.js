import * as c from './../actions/ActionTypes';

let initialState = {
  isLoading: false,
  remedies: [],
  error: null
}

export default (state = initialState, action) => {
  const { name, details, ailment, category, ingredients, id } = action;
  switch (action.type) {
    case c.REQUEST_REMEDIES:
      return Object.assign({}, state, {
        isLoading: true
      });
    case c.GET_REMEDIES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        remedies: action.remedies
      });

    case c.GET_REMEDIES_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });

    case c.ADD_REMEDY:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          details: details,
          ailment: ailment,
          category: category,
          ingredients: ingredients,
          id: id
        }
      });

    // case c.DELETE_REMEDY:
    //   const newState = { ...state };
    //   delete newState[id];
    //   return newState;

    default:
      return state;
  }
};
