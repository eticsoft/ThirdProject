import { YER_EKLE } from '../actions/place';
 
const initialState = {
  placeName: '',
  places: []
};
 
const placeReducer = (state = initialState, action) => {
  switch(action.type) {
    case YER_EKLE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random(),
          value: action.payload
        })
      };
    default:
      return state;
  }
}
 
export default placeReducer;