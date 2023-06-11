import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigation } from './src/routes/AppNavigation';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigation />
        <StatusBar backgroundColor='black' style='auto' translucent={true} />
      </NavigationContainer>
    </Provider>
  );
}