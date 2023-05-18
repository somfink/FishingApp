import { Text, StyleSheet, Pressable } from 'react-native';
import { Colors } from '~/utils/Colors';
import { type NewsItemData } from './HomeList';

interface ItemProps {
    item: NewsItemData;
    onPress?: () => void;
}

const NewsListItem = ({ item, onPress }: ItemProps) => {
    const pressHandler = () => {};
    return (
        <Pressable
            style={ ({ pressed }) => [
                styles.container,
                pressed ? styles.containerPressed : null
            ] }
            onPress={ pressHandler }
            android_ripple={ { color: Colors.androidRippleColor } }
        />
    );
};

export const renderNewsListItem = ({ item }: { item: NewsItemData }) => (
    <NewsListItem item={ item } />
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 70,
        addingHorizontal: 25,
    },
    containerPressed: {
        opacity: 0.7,
    },
    itemText: {
        fontSize: 22,
        color: Colors.primaryFontColorDark,
        marginLeft: 20,
    },
});