import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack } from './HomeStack';
import { IconsNavigation } from '../utils/Icons';
import { DecksStack } from './DecksStack';
import { CardsStack } from './CardsStack';

const Tab = createBottomTabNavigator();

export const AppNavigation = () => {
  return (
    <Tab.Navigator screenOptions={() => ({
      tabBarActiveTintColor: 'green',
      tabBarInactiveTintColor: 'white',
      headerShown: false,
      tabBarHideOnKeyboard: true,
      tabBarStyle: {
        backgroundColor: 'black',
      }
    })}>
      <Tab.Screen
        name='homeTab'
        component={HomeStack}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) =>
            focused ? IconsNavigation.home.active : IconsNavigation.home.inactive,
        }}
      />
      <Tab.Screen
        name='decksTab'
        component={DecksStack}
        options={{
          title: 'Decks',
          tabBarIcon: ({ focused }) =>
            focused ? IconsNavigation.deck.active : IconsNavigation.deck.inactive
        }}
      />
      <Tab.Screen
        name='cardsTab'
        component={CardsStack}
        options={{
          title: 'Cards',
          tabBarIcon: ({ focused }) =>
            focused ? IconsNavigation.cards.active : IconsNavigation.cards.inactive
        }}
      />
    </Tab.Navigator>
  );
};