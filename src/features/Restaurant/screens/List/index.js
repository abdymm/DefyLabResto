import React, { useContext, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { Screens } from '@Constants';
import { Location } from '@Utils';

import CardItem from '@Restaurant/components/CardItem';
import { RestaurantContext } from '@Restaurant/contexts/RestaurantContext';
import styles from './style';

const RestaurantList = props => {
  const { setRestaurant } = useContext(RestaurantContext);
  const [coords, setCoords] = useState();
  const { navigation, restaurantState, fetchRestaurants } = props;
  const { data, favData, isFetching, error } = restaurantState;
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocation = async () => {
    const position = await Location.getCurrentLocation();
    setCoords(position?.coords);
  };

  useEffect(() => {
    if (coords) {
      fetchRestaurants(coords);
    }
  }, [fetchRestaurants, coords]);

  useEffect(() => {
    if (data) {
      setIsFirstLoad(false);
      setRestaurants(data);
    }
  }, [data]);
  const onRefresh = () => {
    fetchRestaurants(coords);
  };
  const onItemPress = item => {
    navigation.navigate(Screens.Restaurants.detail.name, { item });
  };
  const onItemPressMap = item => {
    setRestaurant(item);
    navigation.navigate(Screens.Restaurants.map.name);
  };

  return (
    <View style={styles.container}>
      {isFetching && isFirstLoad ? (
        <ActivityIndicator />
      ) : (
        <>
          <FlatList
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            data={restaurants}
            renderItem={({ item }) => {
              const isFavItem = favData.find(favItem => favItem.id === item.id);
              return (
                <CardItem
                  item={item}
                  isFavItem={isFavItem}
                  onPressDetail={() => {
                    onItemPress(item);
                  }}
                  onPressDetailMap={() => {
                    onItemPressMap(item);
                  }}
                />
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </>
      )}
    </View>
  );
};

const mapState = state => ({
  restaurantState: state.RestaurantModel,
});
const mapDispatch = dispatch => ({
  fetchRestaurants: body => dispatch.RestaurantModel.fetch(body),
});
export default connect(mapState, mapDispatch)(RestaurantList);
