import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { ReactElement } from 'react';
import HomeScreen from "../HomeScreen"
import CarretScreen from '../CarretScreen';
import YoutubeScreen from '../YoutubeScreen';
import ChatScreen from '../ChatScreen';

const Stack = createNativeStackNavigator();

const Navigation = (): ReactElement => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='홈'>
            <Stack.Screen name='홈' component={HomeScreen} />
            <Stack.Screen name='당근마켓' component={CarretScreen} />
            <Stack.Screen name='유튜브' component={YoutubeScreen} />
            <Stack.Screen name='채팅' component={ChatScreen} />
        </Stack.Navigator>
    );
};

export default Navigation;