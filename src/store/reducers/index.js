import {combineReducers} from 'redux';
import userReducer from './user-reducer';
import deviceReducer from './device-reducer';

const rootReducer = combineReducers({
  user: userReducer,
  device: deviceReducer,
});

export default rootReducer;
