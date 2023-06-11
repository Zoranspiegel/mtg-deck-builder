import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CardsScreen } from '../screens/cards/CardsScreen';

const Stack = createNativeStackNavigator();

export const CardsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='cards'
        component={CardsScreen}
        options={{
          title: 'Cards',
          headerTitleStyle: { color: 'white' },
          headerStyle: {
            backgroundColor: 'black'
          }
        }}
      />
    </Stack.Navigator>
  );
};
