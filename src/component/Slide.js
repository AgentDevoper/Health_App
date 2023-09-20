import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import Slider from '@react-native-community/slider';
import { StatusBar } from 'expo-status-bar';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
// import Micon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/Ionicons'

function Image1() {
    return <View>
        <Image source={require("../../assets/Face/face1.png")} style={{
            height: 30,
            width: 30,
            marginLeft: responsiveWidth(3),
        }} />
    </View>
}

function Image2() {
    return <View>
        <Image source={require("../../assets/Face/face2.png")} style={{
            height: 30,
            width: 30,
            marginLeft: responsiveWidth(18),
        }} />
    </View>
}

function Image3() {
    return <View>
        <Image source={require("../../assets/Face/face3.png")} style={{
            height: 30,
            width: 30,
            marginLeft: responsiveWidth(33),
        }} />
    </View>
}

function Image4() {
    return <View>
        <Image source={require("../../assets/Face/face4.png")} style={{
            height: 30,
            width: 30,
            marginLeft: responsiveWidth(50),
        }} />
    </View>
}

function Image5() {
    return <View>
        <Image source={require("../../assets/Face/face5.png")} style={{
            height: 30,
            width: 30,
            marginLeft: responsiveWidth(67),
        }} />
    </View>
}

function Image6() {
    return <View>
        <Image source={require("../../assets/Face/face6.png")} style={{
            height: 30,
            width: 30,
            marginLeft: responsiveWidth(82),
        }} />
    </View>
}


const Slide = () => {

    const [rating, setRating] = useState(2);

    const getRatingEmoji = () => {
        // if (rating === 1) {
        //     return '😶';
        // }
        // else if (rating === 2) {
        //     return '😑';
        // }
        // // else if (rating === 3) {
        // //     return '😗';
        // // }
        // else if (rating === 4) {
        //     return '😊';
        // }
        // else if (rating === 5) {
        //     return '😃';
        // }
        // else if (rating === 6) {
        //     return '😄';
        // }
        if (rating === 1) {
            return (
                // <View>
                //     <Image source={require("../../assets/Face/face1.png")} style={{
                //         height: 30,
                //         width: 30,
                //     }} />
                // </View>
                <Image1 />
            )
        }
        else if (rating === 2) {
            return (
                // <View>
                //     <Image source={require("../../assets/Face/face2.png")} style={{
                //         height: 30,
                //         width: 30,
                //     }} />
                // </View>

                <Image2 />
            )
        }
        else if (rating === 3) {
            return (
                // <View>
                //     <Image source={require("../../assets/Face/face3.png")} style={{
                //         height: 30,
                //         width: 30,
                //     }} />
                // </View>

                <Image3 />
            )
        }
        else if (rating === 4) {
            return (
                // <View>
                //     <Image source={require("../../assets/Face/face4.png")} style={{
                //         height: 30,
                //         width: 30,
                //     }} />
                // </View>

                <Image4 />
            )
        }
        else if (rating === 5) {
            return (
                // <View>
                //     <Image source={require("../../assets/Face/face5.png")} style={{
                //         height: 30,
                //         width: 30,
                //     }} />
                // </View>
                <Image5 />
            )
        }
        else if (rating === 6) {
            return (
                // <View>
                //     <Image source={require("../../assets/Face/face6.png")} style={{
                //         height: 30,
                //         width: 30,
                //     }} />
                // </View>
                <Image6 />

            )
        }
    }




    return (
        <View style={styles.mainContainer}>
            <View style={{
                flexDirection: "row",
            }}>
                <View style={styles.Container1}>
                    <Text style={styles.txt1}>
                        How are you
                    </Text>
                    <Text style={styles.txt2}>
                        feeling
                    </Text>
                    <Text style={styles.txt3}>
                        today?
                    </Text>
                </View>

                <Icon name='ios-close-circle-outline' size={20} color={"#547A62"} style={{ marginLeft: responsiveWidth(17), marginTop: responsiveHeight(1), }} />

            </View>

            <View style={styles.Container2}>
                <Text style={{ fontSize: 20 }}>
                    {getRatingEmoji()}
                </Text>
            </View>

            <View styles={styles.container}>

                <Slider
                    style={{ width: responsiveWidth(92), height: 30 }}
                    minimumValue={1}
                    maximumValue={6}
                    step={1}
                    minimumTrackTintColor='#3D7150'
                    maximumTrackTintColor='#3D7150'
                    thumbTintColor='#3D7150'
                    value={.5}
                    onValueChange={setRating}
                />
                {/* <StatusBar style='auto' /> */}
            </View>
        </View>
    )
}

export default Slide

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    mainContainer: {
        backgroundColor: "#FDF3E5",
        borderRadius: 8,
        height: responsiveHeight(19),
        marginTop: responsiveHeight(4),
    },

    Container1: {
        flexDirection: "row",
        marginHorizontal: responsiveHeight(3),
        marginTop: responsiveHeight(2),
    },

    txt1: {
        fontSize: responsiveFontSize(2.3),
        color: "#547A62",
    },

    txt2: {
        color: "#3D7150",
        fontWeight: "bold",
        fontSize: responsiveFontSize(2.2),
        marginHorizontal: 5,
    },

    txt3: {
        fontSize: responsiveFontSize(2.3),
        color: "#547A62"
    },

    Container2: {
        flexDirection: "row",
        marginTop: 13,
        marginBottom: 11,
    },


})