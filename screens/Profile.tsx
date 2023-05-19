import { useState } from 'react';
import { View, Text, StyleSheet, Image, Switch, Platform } from 'react-native';
import { Colors } from '~/utils/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { OptionList } from '~/components/Profile/OptionList';

export const Profile = () => {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        setIsEnabled(prevState => !prevState);
    };

    return (
        <View style={ styles.container }>
            <View style={ styles.userContainer }>
                <View style={ styles.headerContainer }>
                    <View style={ styles.imageContainer }>
                        <Image
                            source={ require('~/assets/images/user-image.jpg') }
                            style={ styles.image }
                        />
                    </View>
                    <View style={ styles.userInfoContainer }>
                        <Text style={ styles.username }>Username</Text>
                        <Text style={ styles.email }>email</Text>
                    </View>
                </View>
                <View style={ styles.infoContainer }>
                    <View style={ styles.info }>
                        <Text style={ styles.infoHeading }>Placed Spots:</Text>
                        <Text style={ styles.infoText }>50</Text>
                    </View>
                    <View style={ styles.info }>
                        <Text style={ styles.infoHeading }>Ranking:</Text>
                        <Text style={ styles.infoText }>#30</Text>
                    </View>
                </View>
                <View style={ styles.themePicker }>
                    <View style={ styles.themeSwitch }>
                        <Switch
                            trackColor={ { false: '#767577', true: '#81b0ff' } }
                            thumbColor={ isEnabled ? '#525252' : '#f4f3f4' }
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={ toggleSwitch }
                            value={ isEnabled }
                        />
                        { /* // ADD MARGIN TO ICON ON IOS */ }
                        <MaterialCommunityIcons
                            name="theme-light-dark"
                            size={ 24 }
                            color={ Colors.primaryFontColorDark }
                            style={ styles.switchIcon }
                        />
                    </View>
                </View>
            </View>
            <View style={ styles.userOptions }>
                <OptionList />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColorDark,
    },
    userContainer: {
        flex: 3,
        justifyContent: 'center',
        paddingHorizontal: 25,
        backgroundColor: Colors.navBackgroundColorDark,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
    },
    headerContainer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        flex: 1,
    },
    image: {
        width: 110,
        height: 110,
        borderRadius: 55,
        borderWidth: 2,
        borderColor: 'white',
    },
    userInfoContainer: {
        flex: 2,
    },
    username: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
        color: Colors.primaryFontColorDark,
    },
    email: {
        fontSize: 14,
        marginLeft: 20,
        color: Colors.secondaryFontColorDark,
    },
    infoContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: Colors.darkGrey,
    },
    info: {
        flex: 1,
        alignItems: 'center',
        marginTop: 10,
    },
    infoHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.primaryFontColorDark,
    },
    infoText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.secondaryFontColorDark,
    },
    themePicker: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    themeSwitch: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    switchIcon: {
        marginLeft: Platform.OS === 'ios' ? 10 : 0,
    },
    userOptions: {
        flex: 4,
    },
});
