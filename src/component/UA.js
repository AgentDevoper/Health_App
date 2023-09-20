import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Mi from "react-native-vector-icons/MaterialIcons";


const UA = ({ navigation }) => {
    return (
        <View>
            <View style={styles.Container1}>
                <Text style={styles.txt1}>
                    Upcoming Appointments
                </Text>

                <TouchableOpacity onPress={() => { }}>
                    <Text style={styles.txt2}>Clear</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.Container2}>
                <View style={{ flexDirection: "row" }}>
                    <Icon
                        name='calendar-check'
                        size={35}
                        color={"#3D7150"}
                        style={styles.Icon} />
                    <Text style={styles.txt3}>
                        No New Appointments
                    </Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("UAscreen")}>
                    <Text style={styles.txt4}>
                        Book Now
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default UA

const styles = StyleSheet.create({
    Container1: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: responsiveHeight(5),
    },

    txt1: {
        color: "#547A62",
        fontWeight: "bold",
        fontSize: responsiveFontSize(2),
        marginLeft: responsiveWidth(2),
    },

    txt2: {
        fontSize: responsiveFontSize(2),
        color: "#547A62",
    },

    Container2: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 18,
    },

    Icon: {
        marginVertical: responsiveHeight(1),
        marginLeft: responsiveWidth(2),
    },

    txt3: {
        color: "#547A62",
        fontSize: responsiveFontSize(2),
        marginVertical: responsiveHeight(2),
        marginLeft: 11,
    },

    txt4: {
        color: "#3D7150",
        fontWeight: "700",
        fontSize: responsiveFontSize(1.8),
        marginVertical: responsiveHeight(2),
        marginRight: 11,
    },
})