import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feed } from "../pages/feed";
import {Config} from '../pages/config'
import { Profile, profile} from '../pages/profile'
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

export function TabRoutes(){
    return (
            <Tab.Navigator screenOptions={{tabBarStyle: {backgroundColor: '#61AE68'}, 
            tabBarActiveTintColor: 'white', 
            tabBarInactiveTintColor: 'white'
            }}>
                <Tab.Screen name = "feed" component = {Feed} options={{headerShown: false,
                tabBarLabel: 'Plantas',
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="flower-tulip" size={24} color="white" />
                ),
                TabBarStyle: {
                    color: 'white'
                }
                
                }}/>
                <Tab.Screen name = "profile" component = {Profile} options={{headerShown: false, 
                tabBarLabel: 'Lixo',
                tabBarIcon: () => (
                    <FontAwesome name="book" size={24} color="white" />
                )
                }}/>
                <Tab.Screen name = "config" component = {Config} options={{headerShown: false, 
                tabBarLabel: 'Configurações',
                tabBarIcon: () => (
                    <FontAwesome name="gear" size={24} color="white" />
                )
                }}/>
            </Tab.Navigator>
    )}  
