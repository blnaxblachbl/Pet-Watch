import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  petsListStyle: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
    backgroundColor: '#eee',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  locationText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 24,
    marginBottom: 12,
    alignSelf: 'flex-start',
  },
  noPetsText: {
    fontSize: 16,
    color: '#888',
    marginTop: 8,
    alignSelf: 'flex-start',
  },
  petsList: {
    width: '100%',
    paddingBottom: 24,
  },
  errorText: {
    color: 'red',
    fontSize: 18,
  },
});

export default styles;
