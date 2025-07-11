import { StyleSheet, Dimensions } from 'react-native';

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
    marginBottom: 16,
  },
  adoptButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  adoptButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
