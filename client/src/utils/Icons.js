import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

export const IconsNavigation = {
  home: {
    active: <Entypo name="home" size={24} color="green" />,
    inactive: <Entypo name="home" size={24} color="white" />,
  },
  deck: {
    active: <MaterialCommunityIcons name="book-multiple" size={24} color="green" />,
    inactive: <MaterialCommunityIcons name="book-multiple-outline" size={24} color="white" />
  },
  cards: {
    active: <MaterialCommunityIcons name="cards" size={24} color="green" />,
    inactive: <MaterialCommunityIcons name="cards-outline" size={24} color="white" />
  }
}