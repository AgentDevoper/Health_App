import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Setting from '../screen/Setting';
import Stk from './Stk';


const Drawer = createDrawerNavigator();


const Draw = () => {
    return (
        <Drawer.Navigator initialRouteName='Main' screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="Main" component={Stk} />
            <Drawer.Screen name="Setting" component={Setting} />
        </Drawer.Navigator>
    )
}

export default Draw