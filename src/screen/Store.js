import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../screen/Header'
import { responsiveHeight } from 'react-native-responsive-dimensions'

const Store = ({ navigation }) => {
    return (
        <View style={{
            flex: 1,
        }}>
            <Header navigation={navigation} />
            <Text style={{
                textAlign: "center",
                marginTop: responsiveHeight(32),
            }}>Store</Text>
        </View>
    )
}

export default Store

const styles = StyleSheet.create({})