import { FlatList, StyleSheet } from 'react-native';

export type NewsItemData = {
    title: string;
    image: string;
    user: string;
    date: string;
    description: string;
    location: string;
    likes: number;
    comments: number;
};

// export const NewsList = () => {
//     return (
//         <FlatList
//             data={OPTION_LIST_DATA}
//             renderItem={renderOptionListItem}
//             keyExtractor={item => item.id}
//             style={styles.list}
//         />
//     );
// };

const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingTop: 10,
    },
});
