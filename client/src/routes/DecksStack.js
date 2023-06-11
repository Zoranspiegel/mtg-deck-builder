import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DecksScreen } from '../screens/decks/DecksScreen';

const Stack = createNativeStackNavigator();

export const DecksStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='decks'
        component={DecksScreen}
        options={{
          title: 'Decks',
          headerTitleStyle: { color: 'white' },
          headerStyle: {
            backgroundColor: 'black'
          }
        }}
      />
    </Stack.Navigator>
  );
};
