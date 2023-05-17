import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from '~/screens/HomeScreen';
import { Search } from './screens/Search';
import { Profile } from './screens/Profile';
import { Map } from './screens/Map';
import { Colors } from '~/utils/Colors';
import * as NavigationBar from 'expo-navigation-bar';
import { useEffect } from 'react';

const navigationStyles = {
    tabBarActiveTintColor: Colors.primaryFontColorDark,
    tabBarInactiveTintColor: Colors.inactiveTintColor,
    tabBarActiveBackgroundColor: Colors.navBackgroundColorDark,
    tabBarInactiveBackgroundColor: Colors.navBackgroundColorDark,
    headerTintColor: Colors.primaryFontColorDark,
    headerStyle: {
        backgroundColor: Colors.navBackgroundColorDark,
    },
    tabBarStyle: {
        height: 70,
        borderTopWidth: 0,
    },
    tabBarLabelStyle: {
        fontSize: 13,
        paddingBottom: 10,
    },
    tabBarIconStyle: {
        fontSize: 25,
    },
    tabBarItemStyle: {
        paddingTop: 10,
    },
    headerShadowVisible: false,
};

const Tab = createBottomTabNavigator();

export default function App() {
    const visibility = NavigationBar.useVisibility();

    useEffect(() => {
        NavigationBar.setBackgroundColorAsync(Colors.navBackgroundColorDark);
        if (!(visibility === 'visible')) {
            return;
        }
        setTimeout(() => {
            NavigationBar.setBehaviorAsync('overlay-swipe');
            NavigationBar.setVisibilityAsync('hidden');
        }, 1500);
    }, [visibility]);

    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={navigationStyles}>
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarBadge: undefined,
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="home" size={size} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Map"
                    component={Map}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="map" size={size} color={color} />
                        ),
                        headerShown: false,
                    }}
                />
                <Tab.Screen
                    name="Search"
                    component={Search}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="search" size={size} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="person" size={size} color={color} />
                        ),
                        // headerShown: false,
                    }}
                />
            </Tab.Navigator>
            <StatusBar style="light" />
        </NavigationContainer>
    );
}
