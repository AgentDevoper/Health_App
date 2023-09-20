import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import Header from './Header'

const Consult = ({ navigation }) => {
    return (
        <View style={{
            flex: 1,
        }}>
            <Header navigation={navigation} />
            <Text style={{
                textAlign: "center",
                marginTop: responsiveHeight(32),
            }}>Consult</Text>
        </View>
    )
}

export default Consult

const styles = StyleSheet.create({})