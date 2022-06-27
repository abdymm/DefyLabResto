import { Dimensions, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { PERMISSIONS } from 'react-native-permissions';
import Permission from './Permission';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const LATITUDE_DELTA_ZOOMED = 0.0005;
const LONGITUDE_DELTA_ZOOMED = LATITUDE_DELTA_ZOOMED * ASPECT_RATIO;

const Location = {
  getLatitudeDelta: LATITUDE_DELTA,
  getLongitudeDelta: LONGITUDE_DELTA,
  getZoomedLatitudeDelta: LATITUDE_DELTA_ZOOMED,
  getZoomedLongitudeDelta: LONGITUDE_DELTA_ZOOMED,
  getCurrentLocation: async () => {
    const permissionResult = await Permission.requestPermission(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    );
    if (permissionResult === 'granted') {
      return new Promise((resolve, reject) => {
        Geolocation.getCurrentPosition(
          position => {
            resolve(position);
          },
          error => {
            reject(error);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
        );
      });
    } else {
      alert('Allow location permission first please');
    }
  },
};
export default Location;
