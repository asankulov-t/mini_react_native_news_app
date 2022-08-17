import React from 'react';
import TestPage from "./TestPage";
import {NavigationContainer, useRoute} from "@react-navigation/native";

import Home from "./Home/Home";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack=createNativeStackNavigator()

export const Navig = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'Home'}>
                <Stack.Screen name={'Home'} component={Home} options={{title:'HOME'}}/>
                <Stack.Screen name={'Test'} component={TestPage}           options={{title:'Read'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

