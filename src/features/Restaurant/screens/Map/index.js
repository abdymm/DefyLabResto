import { Dimensions, View } from 'react-native';
import { connect } from 'react-redux';
import React, { useContext, useState, useCallback } from 'react';
import { RestaurantContext } from '@Restaurant/contexts/RestaurantContext';
import MapView, { Marker } from 'react-native-maps';
import { useFocusEffect } from '@react-navigation/native';

import { Screens } from '@Constants';
import { Location } from '@Utils';
import styles from './style';

const RestaurantMap = props => {
  const [currentCoords, setCurrentCoords] = useState();

  const { restaurant, setRestaurant } = useContext(RestaurantContext);
  const { navigation, restaurantState, fetchRestaurants } = props;
  const { data, isFetching, error } = restaurantState;

  useFocusEffect(
    useCallback(() => {
      getCurrentLocation();
      return () => setRestaurant(null);
    }, []),
  );

  const getCurrentLocation = async () => {
    const position = await Location.getCurrentLocation();
    if (
      currentCoords?.latitude !== position?.coords.latitude ||
      currentCoords?.longitude !== position?.coords.longitude
    ) {
      setCurrentCoords(position?.coords);
    }
  };

  const onMarkerPressed = item => {
    navigation.navigate(Screens.Restaurants.detail.name, { item });
  };

  const coordsLatitude = restaurant
    ? restaurant.position[0]
    : currentCoords
    ? currentCoords.latitude
    : 0;
  const coordsLongitude = restaurant
    ? restaurant.position[1]
    : currentCoords
    ? currentCoords.longitude
    : 0;

  return (
    <View>
      <MapView
        region={{
          latitude: coordsLatitude,
          longitude: coordsLongitude,
          latitudeDelta: restaurant
            ? Location.getZoomedLatitudeDelta
            : Location.getLatitudeDelta,
          longitudeDelta: restaurant
            ? Location.getZoomedLongitudeDelta
            : Location.getLongitudeDelta,
        }}
        style={styles.map}>
        {data?.map((marker, index) => {
          const coordinate = {
            latitude: marker.position[0],
            longitude: marker.position[1],
          };
          return (
            <Marker
              key={index}
              image={{ uri: marker?.icon }}
              coordinate={coordinate}
              style={[
                styles.marker,
                {
                  width: 100,
                  height: 100,
                },
              ]}
              onPress={() => {
                onMarkerPressed(marker);
              }}
            />
          );
        })}
      </MapView>
    </View>
  );
};

const mapState = state => ({
  restaurantState: state.RestaurantModel,
});
const mapDispatch = dispatch => ({
  fetchRestaurants: body => dispatch.RestaurantModel.fetch(body),
});
export default connect(mapState, mapDispatch)(RestaurantMap);
