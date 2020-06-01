import {combineReducers} from 'redux';
import userReducer from './user-reducer';
import deviceReducer from './device-reducer';
import articleReducer from './article-reducer';

const rootReducer = combineReducers({
  user: userReducer,
  device: deviceReducer,
  articles: articleReducer,
});

export default rootReducer;
