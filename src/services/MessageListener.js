import messaging from '@react-native-firebase/messaging';
import {store} from '../store';
import {FCM_TOKEN} from '../store/actions/action-types';
import {ToastAndroid} from 'react-native';

class MessageListener {
  static getFcmToken() {
    const {device} = store.getState();
    console.log(device);
    messaging()
      .getToken()
      .then(token => {
        store.dispatch({type: FCM_TOKEN, payload: token});
      })
      .catch(err => console.error(err));
  }

  static listenToMessages() {
    messaging().onMessage(async remoteMessage => {
      ToastAndroid.show(JSON.stringify(remoteMessage), ToastAndroid.LONG);
    });
  }
}

export default MessageListener;
