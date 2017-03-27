import {combineReducers} from 'redux';
import images from './imageReducer';
import videos from './videoReducer';

//Combining all reducers to a single reducer function
const rootReducer = combineReducers({
  images,
  videos
});

export default rootReducer;
