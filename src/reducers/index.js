import formVisibleReducer from './formVisibleReducer';
import remediesReducer from './remedies-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterRemediesList: remediesReducer,
  isLoading: isLoading,
  error: error
});

export default rootReducer;