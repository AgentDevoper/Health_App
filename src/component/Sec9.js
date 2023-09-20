import { StyleSheet, Text, View, Image, Alert } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { TouchableOpacity } from 'react-native-gesture-handler';
const Sec9 = (props) => {
    return (
        <View style={styles.Container1}>
            <View style={styles.Container2}>
                <View style={styles.Container3}>
                    <Image
                        source={props.img}
                        style={styles.Img} />
                </View>

                <Text style={styles.doctorTxt}>
                    {props.doctor}
                </Text>
                <TouchableOpacity onPress={() => Alert.alert(props.follow + props.doctor)} >
                    <Text style={styles.followTxt}>
                        Follow
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Sec9

const styles = StyleSheet.create({
    Container1: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
    },

    Container2: {
        height: responsiveHeight(34),
        borderRadius: 10,
        elevation: 1,
        borderRadius: 10,
        marginRight: responsiveWidth(4),
        marginBottom: 10,
    },

    Container3: {
        height: responsiveHeight(20),
        width: responsiveWidth(44),
        borderRadius: 10,
    },

    Img: {
        height: responsiveHeight(20),
        width: responsiveWidth(44),
        borderRadius: 5
    },

    doctorTxt: {
        marginTop: responsiveHeight(2),
        textAlign: "center",
        fontSize: responsiveFontSize(2),
        color: "#3D7150"
    },

    followTxt: {
        color: "white",
        textAlign: "center",
        marginVertical: responsiveHeight(1.5),
        marginHorizontal: responsiveWidth(10),
        backgroundColor: "#547A62",
        borderRadius: 5,
        padding: 3,
    },
})