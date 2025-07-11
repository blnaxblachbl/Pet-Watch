import React, { useMemo, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Pet } from '../../mocks/api/types';
import { styles } from './styles';
import { useCurrentUserContext } from '../../context/CurrentUserContext';
import PaymentModal from '../PaymentModal';

type PetCardProps = {
  pet: Pet;
};

const PetCard: React.FC<PetCardProps> = ({ pet }) => {
  const { user, setUser } = useCurrentUserContext();
  const [showPayment, setShowPayment] = useState(false);

  const alreadyAdopted = useMemo(
    () => user?.pets?.some((p: Pet) => p.id === pet.id),
    [user?.pets],
  );

  const handleAdopt = () => {
    if (!user) return;
    if (alreadyAdopted) return;
    setShowPayment(true);
  };

  const handlePaymentComplete = () => {
    if (!user) return;
    setUser({
      ...user,
      pets: [...(user.pets || []), pet],
    });
    setShowPayment(false);
  };

  const handlePaymentCancel = () => {
    setShowPayment(false);
  };

  return (
    <View style={styles.card}>
      <Image source={pet.image} style={styles.petImage} resizeMode="cover" />
      <View style={styles.cardContent}>
        <Text style={styles.petName}>{pet.name}</Text>
        <Text style={styles.petAge}>Age: {pet.age}</Text>
        <Text style={styles.petDescription}>{pet.description}</Text>
        <TouchableOpacity
          style={[
            styles.adoptButton,
            alreadyAdopted && { backgroundColor: '#aaa' },
          ]}
          onPress={handleAdopt}
          disabled={alreadyAdopted}
        >
          <Text style={styles.adoptButtonText}>
            {alreadyAdopted ? 'Adopted' : 'Adopt'}
          </Text>
        </TouchableOpacity>
      </View>
      <PaymentModal
        visible={showPayment}
        pet={pet}
        onComplete={handlePaymentComplete}
        onCancel={handlePaymentCancel}
      />
    </View>
  );
};

export default PetCard;
