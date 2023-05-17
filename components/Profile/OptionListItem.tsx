import { Text, StyleSheet, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Colors } from '~/utils/Colors';
import { ItemData } from './OptionList';

type ItemProps = {
    item: ItemData;
    onPress?: () => void;
};

const OptionListItem = ({ item, onPress }: ItemProps) => {
    const pressHandler = () => {};
    return (
        <Pressable style={styles.container} onPress={pressHandler} android_ripple={{ color: Colors.androidRippleColor}}>
            <MaterialCommunityIcons name={item.icon} size={36} color={Colors.primaryFontColorDark} />
            <Text style={styles.itemText}>{item.title}</Text>
        </Pressable>
    );
};

export const renderOptionListItem = ({ item }: { item: ItemData }) => (
    <OptionListItem item={item} />
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 70,
        paddingHorizontal: 25,
    },
    itemText: {
        fontSize: 22,
        color: Colors.primaryFontColorDark,
        marginLeft: 20,
    }
});
