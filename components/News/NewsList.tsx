import { FlatList, StyleSheet } from 'react-native';
import { renderNewsListItem } from './NewsListItem';
import { mockedData } from '~/mocks/mockedNewsData';

export interface NewsItemData {
    title: string;
    image: string;
    user: string;
    date: number;
    description: string;
    location: string;
    likes: number;
    comments: number;
    id: string;
}

export const NewsList = () => {
    const data = mockedData();

    return (
        <FlatList
            renderItem={ renderNewsListItem }
            keyExtractor={ (item: NewsItemData) => item.id }
            data={ data }
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
