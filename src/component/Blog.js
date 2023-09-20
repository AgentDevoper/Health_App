import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { TouchableOpacity } from 'react-native-gesture-handler'


const Blog = (props) => {
    const { navigation } = props
    return (
        <View style={styles.Container1}>

            <View>
                <Text style={styles.txt1}>
                    {props.txt1}{'\n'}{props.txt2}{'\n'}{props.txt3}
                </Text>

                <TouchableOpacity
                    style={{ marginHorizontal: responsiveWidth(6) }}
                    onPress={() => navigation.navigate("Amrutan")} >
                    <Text
                        style={styles.txt2}
                    >Read More</Text>
                </TouchableOpacity>
                <Text style={styles.Date}>06 Dec 2022</Text>
            </View>
            <View style={styles.Container2}>
                <Image
                    source={props.img}
                    style={styles.Img} />
            </View>
        </View>
    )
}

export default Blog

const styles = StyleSheet.create({
    Container1: {
        flexDirection: "row",
        elevation: 1,
        marginVertical: responsiveHeight(2),
        marginHorizontal: responsiveWidth(2),
        borderRadius: 5,
    },

    txt1: {
        fontSize: 14,
        marginHorizontal: responsiveWidth(6),
        elevation: 1,
        marginTop: 7,
    },

    txt2: {
        backgroundColor: "#3D7150",
        borderRadius: 5,
        color: "white",
        fontSize: responsiveFontSize(1.5),
        textAlign: "center",
        marginTop: 10,
        paddingVertical: 7,
        elevation: 1,
    },

    Date: {
        fontSize: responsiveFontSize(1.5),
        // textAlign: "center",
        marginHorizontal: responsiveWidth(6),
        marginTop: 5,
        marginBottom: 8,
    },

    Container2: {
        borderTopEndRadius: 5,
        borderBottomEndRadius: 5,
    },

    Img: {
        height: responsiveHeight(20),
        width: responsiveWidth(32),
        borderRadius: 5,
        marginTop: 1,
    },
})