import { Text, StyleSheet, Pressable, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '~/utils/colors';
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
        >
            <View style={ styles.tileContainer }>
                <Image
                    source={ { uri: item.image } }
                    style={ styles.tileImage }
                    blurRadius={ 1 }
                />
                <View style={ styles.backdrop }>
                    <View style={ styles.tileInfoContainer }>
                        <View>
                            <Text style={ styles.userText }>{ item.user }</Text>
                            <Text style={ styles.locationText }>
                                { item.location }
                            </Text>
                        </View>
                        <View>
                            <View style={ styles.socialsTextContainer }>
                                <Ionicons name="heart" size={ 20 } color={ Colors.primaryFontColorDark } />
                                <Text style={ styles.socialsText }>{ item.likes }</Text>
                            </View>
                            <View style={ styles.socialsTextContainer }>
                                <Ionicons name="chatbubble-ellipses" size={ 20 } color={ Colors.primaryFontColorDark } />
                                <Text style={ styles.socialsText }>{ item.comments }</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </Pressable>
    );
};

export const renderNewsListItem = ({ item }: { item: NewsItemData }) => (
    <NewsListItem item={ item } />
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 200,
        marginHorizontal: 20,
        marginVertical: 10,
        overflow: 'hidden',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: Colors.lightGrey,
    },
    containerPressed: {
        opacity: 0.7,
    },
    tileContainer: {
        width: '100%',
        height: '100%',
    },
    tileImage: {
        objectFit: 'cover',
        height: '100%',
        width: '100%',
    },
    backdrop: {
        position: 'absolute',
        backgroundColor: Colors.backdropColor,
        justifyContent: 'flex-end',
        zIndex: 10,
        height: '100%',
        width: '100%',
    },
    tileInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },
    userText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.primaryFontColorDark,
    },
    locationText: {
        fontSize: 14,
        color: Colors.primaryFontColorDark,
    },
    socialsTextContainer: {
        flexDirection: 'row',
    },
    socialsText: {
        color: Colors.primaryFontColorDark,
        fontSize: 16,
        marginLeft: 5,
    },
});
