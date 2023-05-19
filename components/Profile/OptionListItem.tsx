import { Text, StyleSheet, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '~/utils/colors';
import { type OptionsItemData } from './OptionList';

interface ItemProps {
    item: OptionsItemData;
    onPress?: () => void;
}

const OptionListItem = ({ item, onPress }: ItemProps) => {
    const pressHandler = () => {};
    return (
        <Pressable
            style={({ pressed }) => [
                styles.container,
                pressed ? styles.containerPressed : null,
            ]}
            onPress={pressHandler}
            android_ripple={{ color: Colors.androidRippleColor }}
        >
            <MaterialCommunityIcons
                name={item.icon}
                size={36}
                color={Colors.primaryFontColorDark}
            />
            <Text style={styles.itemText}>{item.title}</Text>
        </Pressable>
    );
};

export const renderOptionListItem = ({ item }: { item: OptionsItemData }) => (
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
    containerPressed: {
        opacity: 0.7,
    },
    itemText: {
        fontSize: 22,
        color: Colors.primaryFontColorDark,
        marginLeft: 20,
    },
});
