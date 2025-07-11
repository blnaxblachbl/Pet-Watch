import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Pet } from '../../mocks/api/types';
import { styles } from './styles';

type PetCardProps = {
  pet: Pet;
};

const PetCard: React.FC<PetCardProps> = ({ pet }) => (
  <View style={styles.card}>
    <Image
      source={pet.image}
      style={styles.petImage}
      resizeMode="cover"
    />
    <View style={styles.cardContent}>
      <Text style={styles.petName}>{pet.name}</Text>
      <Text style={styles.petAge}>Age: {pet.age}</Text>
      <Text style={styles.petDescription}>
        {pet.description}
      </Text>
      <TouchableOpacity style={styles.adoptButton}>
        <Text style={styles.adoptButtonText}>Adopt</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default PetCard;
