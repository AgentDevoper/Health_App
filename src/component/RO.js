import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


const RO = (props) => {
    const { navigation } = props
    return (
        <View style={styles.Container1}>
            <View style={styles.Container2}>
                <Image
                    source={props.img}
                    style={styles.Img} />
            </View>

            <View style={styles.Container3}>
                <Text style={styles.txt1}>
                    {props.txt1}{'\n'}{props.txt2}{'\n'}{props.txt3}
                    {/* {props.text} */}
                </Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.priceTxt}>₹{props.price}    </Text>
                    <Text style={styles.dpriceTxt}> ₹{props.Dprice}</Text>
                </View>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Orders")}
                    style={{ flexDirection: "row", }}>

                    <Icon
                        name='arrow-u-left-top'
                        size={30} color={"#3D7150"}
                        style={styles.Icon} />

                    <Text style={styles.txt2} >
                        Reorder
                    </Text>
                </TouchableOpacity>
            </View>
        </View>


    )
}

export default RO

const styles = StyleSheet.create({
    Container1: {
        flexDirection: "row",
        marginTop: responsiveHeight(3),
        marginHorizontal: responsiveWidth(2),
        paddingRight: 10,
        elevation: 1,
        borderRadius: 5,
        marginBottom: 10,
    },

    Container2: {
        height: 140,
        width: 130,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },

    Img: {
        height: responsiveHeight(22),
        width: responsiveWidth(33),
        borderRadius: 5,
    },

    Container3: {
        paddingLeft: 7,
        paddingTop: 4,
    },

    txt1: {
        fontSize: responsiveFontSize(2),
        marginTop: responsiveHeight(1),
        marginLeft: responsiveWidth(2),
        // marginRight: responsiveWidth(37),
        // marginRight: 128,
        marginRight: 50,
    },

    priceTxt: {
        marginLeft: responsiveWidth(2),
        color: "#3D7150",
        fontSize: responsiveFontSize(2),
    },

    dpriceTxt: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        fontSize: responsiveFontSize(1.7),
        marginVertical: 2,
    },

    Icon: {
        marginLeft: responsiveWidth(2),
        marginVertical: responsiveHeight(0.5),
    },

    txt2: {
        marginLeft: responsiveWidth(2),
        marginTop: responsiveHeight(1.3),
        color: "#3D7150",
        fontSize: responsiveFontSize(1.8),
        fontWeight: "bold"
    },

})