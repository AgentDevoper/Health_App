import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Mi from "react-native-vector-icons/MaterialIcons";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { TouchableOpacity } from 'react-native-gesture-handler';

const color = "#3D7150";
const C4 = ({ navigation }) => {
    return (
        <View>
            <View style={styles.Container1}>
                <Icon name='heart-pulse' color={color} size={40} style={styles.Icon} />

                <View>
                    <Text style={styles.txt1}>
                        Health Data is not available
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.txt2}>Connet your</Text>
                        <Text style={styles.txt3}> Health App</Text>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("HealthApp")}
                    style={styles.btn}>
                    <Icon name='plus' color={color} size={40} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default C4

const styles = StyleSheet.create({
    shadowProp: {
        shadowOffset: { width: -2, height: 4 },
        shadowColor: '#171717',
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },

    Container1: {
        flexDirection: "row",
        borderRadius: 10,
        marginTop: 20,
        elevation: 1,
        paddingVertical: responsiveHeight(2),
        justifyContent: "space-between",
    },

    Icon: {
        marginLeft: responsiveWidth(5),
        marginVertical: responsiveHeight(1),
    },

    txt1: {
        fontSize: responsiveFontSize(1.5),
        color: "#547A62",
    },

    txt2: {
        color: "#547A62",
        fontSize: responsiveFontSize(2.3),
    },
    txt3: {
        fontWeight: "bold",
        color: "#3D7150",
        fontSize: responsiveFontSize(2.3),
    },

    btn: {
        marginRight: responsiveWidth(2.5),
        marginVertical: responsiveHeight(1),
    },
})