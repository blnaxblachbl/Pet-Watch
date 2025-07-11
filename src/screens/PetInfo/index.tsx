import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { usePetById } from '../../hooks/usePetById';

type PetInfoRouteProp = RouteProp<{ params: { petId: number } }, 'params'>;

const PetInfoScreen: React.FC = () => {
  const route = useRoute<PetInfoRouteProp>();
  const { petId } = route.params;
  const { data: pet, loading } = usePetById(petId);

  return (
    <ScrollView
      style={styles.container}
      refreshControl={<RefreshControl refreshing={loading} />}
    >
      {pet && (
        <>
          <Image
            source={pet.image}
            style={styles.petImage}
            resizeMode="cover"
          />
          <View style={styles.contentContainer}>
            <Text style={styles.petName}>{pet.name}</Text>
            <Text style={styles.petAge}>Age: {pet.age}</Text>
            <Text style={styles.petDescription}>{pet.description}</Text>
          </View>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: Dimensions.get('window').width,
  },
  contentContainer: {
    padding: 24,
  },
  petImage: {
    width: '100%',
    height: 200,
  },
  petName: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  petAge: {
    fontSize: 18,
    marginBottom: 8,
  },
  petDescription: {
    fontSize: 16,
    color: '#555',
  },
});

export default PetInfoScreen;
