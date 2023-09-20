import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


// const color = "#3D7150";
const Notifi = (props) => {
    return (
        <View>
            <View style={{
                flexDirection: "row",
                borderRadius: 10,
                marginTop: 20,
                elevation: 1,
                paddingVertical: responsiveHeight(1.5),
                justifyContent: "space-between",
            }}>

                <Ionicons name={props.icon} color={props.color} size={35} style={{
                    marginLeft: responsiveWidth(7),
                    marginVertical: responsiveHeight(1.8),
                }} />

                <Icon name={props.Micon} color={props.color} size={35}
                    style={{
                        marginRight: responsiveWidth(7),
                        marginVertical: responsiveHeight(1.8),
                    }} />

                <View style={{ marginRight: responsiveWidth(10), }}>
                    <Text
                        // numberOfLines={3}
                        style={{
                            color: "#547A62",
                            fontSize: responsiveFontSize(1.6),
                            marginRight: 50,
                            marginTop: 5,
                            // flex: 1,
                            // textAlign: 'center',
                            // justifyContent: 'center'
                            // }}>{props.txt1 + '\n' + props.txt2 + '\n' + props.txt3}</Text>
                        }}>{props.text}</Text>

                    <Text style={{ marginTop: responsiveHeight(2), fontSize: 11, color: "#9A9898" }}>{props.date}</Text>
                </View>
            </View>
        </View>
    )
}

export default Notifi

const styles = StyleSheet.create({})