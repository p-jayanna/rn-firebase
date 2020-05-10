import {USER, USER_AUTH} from '../actions/action-types';
const initialUserState = {
  user: {},
  auth: {isAuthenticated: false},
};

const userReducer = (state = initialUserState, action) => {
  const {type, payload} = action;
  switch (type) {
    case USER: {
      return {
        ...state,
        user: {
          ...payload,
        },
      };
    }
    case USER_AUTH: {
      return {
        ...state,
        auth: {
          ...payload,
        },
      };
    }
    default:
      return state;
  }
};

export default userReducer;
