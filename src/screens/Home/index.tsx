import React from 'react';
import { View, FlatList } from 'react-native';
import { styles } from './styles';
import { pets } from '../../mocks/api/pets/data';
import PetCard from '../../components/PetCard';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={pets}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <PetCard pet={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;
