import {FCM_TOKEN, DEVICE_DATA} from '../actions/action-types';
const initialUserState = {
  fcmToken: '',
  deviceData: {},
};

const deviceReducer = (state = initialUserState, action) => {
  const {type, payload} = action;
  switch (type) {
    case FCM_TOKEN: {
      return {
        ...state,
        fcmToken: payload,
      };
    }
    case DEVICE_DATA: {
      return {
        ...state,
        deviceData: {
          ...payload,
        },
      };
    }
    default:
      return state;
  }
};

export default deviceReducer;
