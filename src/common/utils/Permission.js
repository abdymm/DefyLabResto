import { check, request, RESULTS } from 'react-native-permissions';

const Permission = {
  requestPermission: permission => {
    return new Promise((resolve, reject) => {
      check(permission)
        .then(result => {
          if (result !== RESULTS.GRANTED) {
            request(permission).then(result => {
              resolve(result);
            });
          } else {
            resolve(result);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  },
};
export default Permission;
