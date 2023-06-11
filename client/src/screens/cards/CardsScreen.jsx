import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { styles } from './CardsScreen.styles';

export const CardsScreen = () => {
  const cards = useSelector((state) => state.cards);

  useEffect(() => {
    console.log('CARDS: ', cards.length);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ color: 'white' }}>CARDS</Text>
    </View>
  );
};
