import {ADD_ARTICLE, UPDATE_ARTICLE} from '../actions/action-types';
const initialUserState = {
  articles: [],
};

const articleReducer = (state = initialUserState, action) => {
  const {type, payload} = action;
  switch (type) {
    case ADD_ARTICLE: {
      return {
        ...state,
        articles: [...state.articles, payload],
      };
    }
    case UPDATE_ARTICLE: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default articleReducer;
