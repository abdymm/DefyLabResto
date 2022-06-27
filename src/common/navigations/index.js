import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Screens from '../../common/constants/Screens';
import colors from '../constants/Colors';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={Screens.Restaurants.list.name}
      barStyle={{ backgroundColor: colors.secondary }}>
      <Tab.Screen
        name={Screens.Restaurants.list.name}
        component={Screens.Restaurants.list.component}
        options={{
          tabBarLabel: 'List',
          tabBarIcon: ({ color }) => (
            <Ionicons name="list-circle-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={Screens.Restaurants.map.name}
        component={Screens.Restaurants.map.component}
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({ color }) => (
            <Ionicons name="map-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Screens.Restaurants.list.name}
          component={TabNavigator}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name={Screens.Restaurants.detail.name}
          component={Screens.Restaurants.detail.component}
          options={{ title: 'Detail' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppContainer;
