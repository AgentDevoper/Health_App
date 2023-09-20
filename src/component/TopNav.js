import { StyleSheet, View } from 'react-native'
import React from 'react'
import Chats from '../screen/Chats'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { responsiveHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import Nonotification from '../screen/Nonotification';
import GetNotification from '../screen/GetNotification'



const Tab = createMaterialTopTabNavigator();
const TopNav = () => {

    return (
        <View style={{
            height: responsiveHeight(100),
            width: responsiveScreenWidth(100),
        }}>
            <Tab.Navigator initialRouteName='Notification'
                screenOptions={{
                    tabBarGap: 10,
                    backgroundColor: '#3D7150',
                    tabBarActiveTintColor: 'white',
                }}>
                <Tab.Screen
                    name="Notification"
                    // component={Nonotification}
                    component={GetNotification}
                    options={{
                        tabBarActiveTintColor: 'white',
                        tabBarStyle: {
                            backgroundColor: '#3D7150',
                        },
                    }} />
                <Tab.Screen
                    name="Chats"
                    component={Chats}
                    options={{
                        tabBarActiveTintColor: 'white',
                        tabBarStyle: {
                            backgroundColor: '#3D7150',
                        },
                    }} />
            </Tab.Navigator>
        </View >
    )
}

export default TopNav

const styles = StyleSheet.create({})