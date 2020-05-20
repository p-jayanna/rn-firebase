import axios from 'axios';

export const configureApiClient = () => {
  axios.defaults.baseURL = '';
  let isFetchingToken = false;
  let subscribers = [];

  function onTokenReceived(token) {
    subscribers = subscribers.filter(callback => callback(token));
  }

  function addSubscribers(callback) {
    subscribers.push(callback);
  }

  axios.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      const {
        config,
        response: {status = 0},
      } = error;
      const originalRequest = config;
      if (status === 401) {
        if (!isFetchingToken) {
          isFetchingToken = true;

          // call the service to renew the token
          const token = ' '; // token comes from the response
          isFetchingToken = false;
          onTokenReceived(token);
        }

        return new Promise(resolve => {
          addSubscribers(token => {
            originalRequest.header.Authorization = 'Bearer' + token;
            resolve(axios(originalRequest));
          });
        });
      }
      return Promise.reject(error);
    },
  );
};
