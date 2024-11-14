import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../constants/colors';

import HomeScreen from '../screens/HomeScreen';
import CharacterListScreen from '../screens/CharacterListScreen';
import CharacterDetailScreen from '../screens/CharacterDetailScreen';
import EventScreen from '../screens/EventScreen';
import EventDetailScreen from '../screens/EventDetailScreen';
import RedeemCodeScreen from '../screens/RedeemCodeScreen';
import AboutScreen from '../screens/AboutScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const CharacterStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="CharacterList" 
      component={CharacterListScreen}
      options={{ title: 'Characters' }}
    />
    <Stack.Screen 
      name="CharacterDetail" 
      component={CharacterDetailScreen}
      options={({ route }) => ({ title: route.params?.name || 'Character Detail' })}
    />
  </Stack.Navigator>
);

const HomeStack = () => (
    <Stack.Navigator>
      <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="RedeemCode" 
        component={RedeemCodeScreen}
        options={{ title: 'Redeem Code' }}
      />
    </Stack.Navigator>
  );
  

const EventStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="EventList" 
      component={EventScreen}
      options={{ title: 'Events' }}
    />
    <Stack.Screen 
      name="EventDetail" 
      component={EventDetailScreen}
      options={{ title: 'Event Detail' }}
    />
  </Stack.Navigator>
);

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Characters') {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === 'Events') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'About') {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.black,
        tabBarStyle: {
          backgroundColor: COLORS.white,
          borderTopWidth: 1,
          borderTopColor: COLORS.accent,
        }
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
      <Tab.Screen name="Characters" component={CharacterStack} options={{ headerShown: false }} />
      <Tab.Screen name="Events" component={EventStack} options={{ headerShown: false }} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;