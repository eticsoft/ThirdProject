import { createStore, combineReducers } from 'redux';
import placeReducer from './src/actions/placeReducers';
 
const rootReducer = combineReducers({
  places: placeReducer
});
 
const configureStore = () => {
  return createStore(rootReducer);
}
 
export default configureStore;