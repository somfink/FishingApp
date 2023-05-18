import { FlatList, StyleSheet } from 'react-native';
import { type ComponentProps } from 'react';
import { type MaterialCommunityIcons } from '@expo/vector-icons';
import { renderOptionListItem } from './OptionListItem';

type MaterialIconName = ComponentProps<typeof MaterialCommunityIcons>['name'];

export interface OptionsItemData {
    id: string;
    title: string;
    icon: MaterialIconName;
}

const OPTIONS_LIST_DATA: OptionsItemData[] = [
    {
        id: 'personal',
        title: 'Personal Account',
        icon: 'account-wrench',
    },
    {
        id: 'trophies',
        title: 'Trophies',
        icon: 'trophy',
    },
    {
        id: 'settings',
        title: 'Settings',
        icon: 'account-cog',
    },
    {
        id: 'support',
        title: 'Support',
        icon: 'alpha-s-circle',
    }
];

export const OptionList = () => {
    return (
        <FlatList
            data={ OPTIONS_LIST_DATA }
            renderItem={ renderOptionListItem }
            keyExtractor={ item => item.id }
            style={ styles.list }
        />
    );
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingTop: 10,
    },
});
