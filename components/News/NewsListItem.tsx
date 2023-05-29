import { Text, StyleSheet, Pressable, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '~/utils/colors';
import { type NewsItemData } from './NewsList';

interface ItemProps {
    item: NewsItemData;
    onPress?: () => void;
}

const NewsListItem = ({ item, onPress }: ItemProps) => {
    return (
        <View style={ styles.tileContainer }>
            <Pressable
                style={ ({ pressed }) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null
                ] }
                onPress={ onPress }
                android_ripple={ { color: Colors.androidRippleColor } }
            >
                <Image
                    source={ { uri: item.image } }
                    style={ styles.tileImage }
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
                                <Ionicons
                                    name="heart"
                                    size={ 20 }
                                    color={ Colors.primaryFontColorDark }
                                />
                                <Text style={ styles.socialsText }>
                                    { item.likes }
                                </Text>
                            </View>
                            <View style={ styles.socialsTextContainer }>
                                <Ionicons
                                    name="chatbubble-ellipses"
                                    size={ 20 }
                                    color={ Colors.primaryFontColorDark }
                                />
                                <Text style={ styles.socialsText }>
                                    { item.comments }
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Pressable>
        </View>
    );
};

export const renderNewsListItem = ({ item }: { item: NewsItemData }) => {
    const pressHandler = () => {};
    return (
        <NewsListItem item={ item } onPress={ pressHandler }/>
    );
};

const styles = StyleSheet.create({
    tileContainer: {
        flex: 1,
        height: 200,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: Colors.lightGrey,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        overflow: 'hidden',
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.7,
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
