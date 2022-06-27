import React, { useMemo, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import AppContainer from '@Navigations';
import store from './src/common/stores';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RestaurantContext } from './src/features/Restaurant/contexts/RestaurantContext';

const App = () => {
  const [restaurant, setRestaurant] = useState(null);
  const value = useMemo(
    () => ({ restaurant, setRestaurant }),
    [restaurant, setRestaurant],
  );
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <RestaurantContext.Provider value={value}>
          <AppContainer />
        </RestaurantContext.Provider>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
  },
});

export default App;
