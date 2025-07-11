import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Pet } from '../../mocks/api/types';
import { styles } from './styles';

type PaymentModalProps = {
  visible: boolean;
  pet: Pet;
  onComplete: () => void;
  onCancel: () => void;
};

const PaymentModal: React.FC<PaymentModalProps> = ({
  visible,
  pet,
  onComplete,
  onCancel,
}) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolder, setCardHolder] = useState('');

  const handlePay = () => {
    if (!cardNumber || !expiry || !cvv || !cardHolder) {
      return;
    }
    onComplete();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onCancel}
    >
      <View style={styles.modalBackdrop}>
        <View style={styles.modalContainer}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            style={styles.keyboardAvoiding}
          >
            <Text style={styles.title}>Payment Details</Text>
            <Text style={styles.description}>Pay $10 to adopt {pet.name}.</Text>
            <View style={styles.formGroup}>
              <Text style={styles.label}>Card Number</Text>
              <TextInput
                style={styles.input}
                placeholder="1234 5678 9012 3456"
                keyboardType="number-pad"
                value={cardNumber}
                onChangeText={setCardNumber}
                maxLength={19}
                placeholderTextColor="#aaa"
              />
            </View>
            <View style={styles.formRow}>
              <View style={[styles.formGroup, { flex: 1, marginRight: 8 }]}>
                <Text style={styles.label}>Expiry</Text>
                <TextInput
                  style={styles.input}
                  placeholder="MM/YY"
                  keyboardType="number-pad"
                  value={expiry}
                  onChangeText={setExpiry}
                  maxLength={5}
                  placeholderTextColor="#aaa"
                />
              </View>
              <View style={[styles.formGroup, { flex: 1, marginLeft: 8 }]}>
                <Text style={styles.label}>CVV</Text>
                <TextInput
                  style={styles.input}
                  placeholder="123"
                  keyboardType="number-pad"
                  value={cvv}
                  onChangeText={setCvv}
                  maxLength={4}
                  secureTextEntry
                  placeholderTextColor="#aaa"
                />
              </View>
            </View>
            <View style={styles.formGroup}>
              <Text style={styles.label}>Cardholder Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Name on card"
                value={cardHolder}
                onChangeText={setCardHolder}
                autoCapitalize="words"
                placeholderTextColor="#aaa"
              />
            </View>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.payButton} onPress={handlePay}>
                <Text style={styles.buttonText}>Pay</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </View>
    </Modal>
  );
};

export default PaymentModal;
