import apiRequest from './_base';
import { ApiCredentials, ApiEndopints } from '@Constants';

const fetch = (coords) => {
  const url = `${ApiEndopints.getPlacesAround}`;
  return apiRequest(`${url}`, 'get', {
    app_code: ApiCredentials.APP_CODE,
    app_id: ApiCredentials.APP_ID,
    at: coords ? `${coords.latitude},${coords.longitude}` : ApiCredentials.DEFAULT_LOCATION,
    cat: ApiCredentials.LOCATION_CATEGORIES.RESTAURANT,
    pretty: true,
    size: 25, //pagination is out of scope
  });
};
export { fetch };
