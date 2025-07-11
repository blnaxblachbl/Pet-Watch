import React from 'react';
import { View, FlatList, RefreshControl } from 'react-native';
import { styles } from './styles';
import PetCard from '../../components/PetCard';
import { usePetsList } from '../../hooks/usePetsList';

const HomeScreen = () => {
  const { data, loading } = usePetsList();

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <PetCard pet={item} />}
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={loading} />}
      />
    </View>
  );
};

export default HomeScreen;
