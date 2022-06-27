import React from 'react';
import { Linking, Platform, View } from 'react-native';
import { connect } from 'react-redux';

import MapView, { Marker } from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, Button } from '@Components';
import { Colors } from '@Constants';
import { String, Location } from '@Utils';
import styles from './style';

const RestaurantDetail = props => {
  const { toggleFavorite, restaurantState } = props;
  const { favData } = restaurantState;
  const { item } = props.route.params;
  const latitude = item.position[0];
  const longitude = item.position[1];

  const isFavItem = favData.find(favItem => favItem.id === item.id);

  const onOpenMap = () => {
    const scheme = Platform.select({
      ios: 'maps:0,0?q=',
      android: 'geo:0,0?q=',
    });
    const latLng = `${latitude},${longitude}`;
    const label = item?.title;
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });

    Linking.openURL(url);
  };

  const setFavorite = () => {
    toggleFavorite(item);
  };

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView
          onPress={() => onOpenMap()}
          region={{
            latitude,
            longitude,
            latitudeDelta: Location.getLatitudeDelta,
            longitudeDelta: Location.getLongitudeDelta,
          }}
          style={styles.map}>
          <Marker
            coordinate={{
              latitude,
              longitude,
            }}
            image={{ uri: item?.icon }}
            style={[
              styles.marker,
              {
                width: 100,
                height: 100,
              },
            ]}
          />
        </MapView>
        <Text tiny style={styles.mapInstruction}>
          Press map to show direction
        </Text>
      </View>

      <View style={styles.info}>
        <Text h3>{item?.title}</Text>
        <Text small>{String.reformatVicinity(item?.vicinity)}</Text>
      </View>

      <View style={styles.action}>
        <Button
          icon={
            <Ionicons name="star" size={18} style={isFavItem ? styles.negativeFavBtnColor : styles.favBtnColor} />
          }
          style={styles.favBtn}
          textStyle={isFavItem ? styles.negativeFavBtnColor : styles.favBtnColor}
          color={Colors.tertiary}
          mode={isFavItem ? 'contained' : 'outlined'}
          onPress={setFavorite}>
          Add to favorite
        </Button>
      </View>
    </View>
  );
};

const mapState = state => ({
  restaurantState: state.RestaurantModel,
});
const mapDispatch = dispatch => ({
  toggleFavorite: payload => dispatch.RestaurantModel.toggleFavorite(payload),
});
export default connect(mapState, mapDispatch)(RestaurantDetail);
