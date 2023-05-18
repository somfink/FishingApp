import { View, Text, StyleSheet, Image } from 'react-native';
import { Colors } from '~/utils/Colors';

export const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.tileContainer}>
                <Image source={require('~/assets/images/fish.jpg')} style={styles.tileImage} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColorDark,
    },
    tileContainer: {
        height: 200,
        margin: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: Colors.lightGrey,
        overflow: 'hidden',
    },
    tileImage: {
        objectFit: "cover",
        height: 200,
        width: '100%',
        
    },
});