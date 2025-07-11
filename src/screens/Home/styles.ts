import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('screen');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width,
        backgroundColor: '#f5f5f5',
    },
    contentContainer: {
        alignItems: 'center',
        paddingVertical: 16,
    },
});
