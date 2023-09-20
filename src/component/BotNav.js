import { StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Store from '../screen/Store';
import Orders from '../screen/Orders';
import Bulletin from '../screen/Bulletin';
import Consult from '../screen/Consult';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icoon from "react-native-vector-icons/MaterialIcons";


const Tab = createBottomTabNavigator();
const BotNav = () => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#0A4F23",
                tabBarStyle: { height: 50, position: "absolute", bottom: 20, borderRadius: 10, marginHorizontal: 15, paddingBottom: 5, borderTopColor: "white" }
            }}>
            <Tab.Screen name='Home' component={Home} options={{
                tabBarLabel: "Home",
                tabBarIcon: ({ color }) => (
                    <Icoon name="house" color={color} size={26} />
                )
            }} />
            <Tab.Screen name='Store' component={Store} options={{
                tabBarLabel: "Store",
                tabBarIcon: ({ color }) => (
                    <Icon name="storefront-outline" color={color} size={26} />
                )
            }} />

            <Tab.Screen name='Orders' component={Orders} options={{
                tabBarLabel: "Orders",
                tabBarIcon: ({ color }) => (
                    <Icon name='book-open-page-variant-outline' color={color} size={26} />
                )
            }} />

            <Tab.Screen name='Consult' component={Consult} options={{
                tabBarLabel: "Consult",
                tabBarIcon: ({ color }) => (
                    <Icon name="bottle-tonic-outline" color={color} size={26} />
                )
            }} />

            <Tab.Screen name='Bulletin' component={Bulletin} options={{
                tabBarLabel: "Bulletin",
                tabBarIcon: ({ color }) => (
                    <Icon name="flower-tulip-outline" color={color} size={26} />
                )
            }} />

        </Tab.Navigator>
    )
}

export default BotNav

const styles = StyleSheet.create({})

