import RestaurantListScreen from '@Restaurant/screens/List';
import RestaurantDetailScreen from '@Restaurant/screens/Detail';
import RestaurantMapScreen from '@Restaurant/screens/Map';
const screens = {
  Restaurants: {
    list: {name: 'RestaurantList', component: RestaurantListScreen},
    detail: {name: 'RestaurantDetail', component: RestaurantDetailScreen},
    map: {name: 'RestaurantMap', component: RestaurantMapScreen},
  },
};
export default screens;
