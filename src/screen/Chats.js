import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const color = "#3D7150";
const Chats = () => {
    return (
        <View style={{
            height: responsiveHeight(100),
            width: responsiveWidth(100),
        }}>
            <Text style={{
                justifyContent: "center",
                textAlign: "center",
                fontSize: 22,
                marginTop: 140,
                color: "#3D7150",
                fontWeight: 600,
            }}>No New Chats!</Text>
            <Icon name="flower-tulip-outline" color={color} size={150} style={{
                justifyContent: "center",
                textAlign: "center",
                marginTop: 40,
            }} />

            <Text style={{
                justifyContent: "center",
                textAlign: "center",
                fontSize: 15,
                marginTop: 10,
                fontWeight: 600,
            }}>
                Check this section for chats.
            </Text>
        </View >
    )
}

export default Chats

const styles = StyleSheet.create({})