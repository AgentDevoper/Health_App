import { StyleSheet } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import GetNotification from '../screen/GetNotification';
import Nonotification from '../screen/Nonotification';
import BotNav from './BotNav';
import HealthApp from '../screen/HealthApp'
import SFHB from '../screen/SFHB';
import UAscreen from '../screen/UAscreen';
import Orders from '../screen/Orders';
import AmrutanB from '../screen/AmrutanB';
import Ebooks from '../screen/Ebooks';
import Quiz from '../screen/Quiz';
import TV from '../screen/TV';
import Yourprofile from '../screen/Yourprofile';

const Stack = createStackNavigator();

const Stk = () => {
    return (
        <Stack.Navigator initialRouteName='BotNav' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='BotNav' component={BotNav} />
            <Stack.Screen name='Notification' component={GetNotification} />
            <Stack.Screen name='NoNotification' component={Nonotification} />
            <Stack.Screen name="HealthApp" component={HealthApp} options={{ headerShown: true }} />
            <Stack.Screen name='SFHB' component={SFHB} options={{ headerShown: true }} />
            <Stack.Screen name='UAscreen' component={UAscreen} options={{ headerShown: true }} />
            <Stack.Screen name='Order' component={Orders} />
            <Stack.Screen name='Amrutan' component={AmrutanB} />
            <Stack.Screen name='Quiz' component={Quiz} />
            <Stack.Screen name='Ebooks' component={Ebooks} />
            <Stack.Screen name='TV' component={TV} />
            <Stack.Screen name="Profile" component={Yourprofile} />
        </Stack.Navigator>
    )
}

export default Stk

const styles = StyleSheet.create({})