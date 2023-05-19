import { View, StyleSheet } from 'react-native';
import { NewsList } from '~/components/Home/HomeList';
import { Colors } from '~/utils/colors';

export const Home = () => {
    return (
        <View style={ styles.container }>
            <NewsList />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColorDark,
    },
});
