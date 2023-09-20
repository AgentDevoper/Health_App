import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { TouchableOpacity } from 'react-native-gesture-handler';


const color = "#3D7150";
const C1 = (props) => {
    return (
        <View>
            <View style={styles.Container1}>
                <Icon name={props.icon} color={color} size={40} style={styles.Icon} />
                <Text style={styles.txt1}>{props.txt1}</Text>
                <Text style={styles.txt2}>{props.txt2}</Text>
                <TouchableOpacity>
                    <Image source={require("../../assets/C1.png")}
                        style={styles.btnImg}
                    />
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default C1

const styles = StyleSheet.create({
    Container1: {
        flexDirection: "row",
        borderRadius: 10,
        marginTop: 20,
        elevation: 1,
        paddingVertical: responsiveHeight(1.5),
        justifyContent: "space-between"
    },

    Icon: {
        marginLeft: responsiveWidth(5),
        marginVertical: responsiveHeight(1),
    },

    txt1: {
        marginLeft: responsiveWidth(3.5),
        color: "#547A62",
        marginVertical: responsiveHeight(2),
        fontSize: responsiveFontSize(2.3),
    },

    txt2: {
        marginVertical: responsiveHeight(2),
        fontWeight: "bold",
        color: "#3D7150",
        fontSize: responsiveFontSize(2.3),
    },

    btnImg: {
        height: 30,
        width: 30,
        marginRight: responsiveWidth(5),
        marginLeft: responsiveWidth(4),
        marginVertical: responsiveHeight(1),
    },
})