import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../pages/home/index.js';
import {Feed} from '../pages/feed/index.js'
import {Noturno} from '../pages/noturno/index.js'
import {Perfil} from '../pages/perfil/index.js'
import { TabRoutes } from './tab.routes.js';
import { Details } from '../pages/details/index.js';

const Stack = createStackNavigator();

export function StackRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
            <Stack.Screen name='Feed' component={TabRoutes}/>
            <Stack.Screen name='feed' component={Feed}/>
            <Stack.Screen name='noturno' component={Noturno}/>
            <Stack.Screen name='perfil' component={Perfil}/>
            <Stack.Screen name='Detalhes' component={Details}/>
        </Stack.Navigator>
    )
}