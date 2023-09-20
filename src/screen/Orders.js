import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import RO from '../component/RO'
import { ScrollView } from 'react-native-gesture-handler'
import Header from './Header';

const Orders = (props) => {
    const { navigation } = props
    return (
        <ScrollView>

            <View style={{
                textAlign: "center",
                // marginHorizontal: 10,
            }}>
                <Header navigation={navigation} />
                <Text style={{
                    justifyContent: "center",
                    textAlign: "center",
                    fontSize: responsiveFontSize(3),
                }}>Orders</Text>

                <RO
                    txt1="Kuntal Care Capsule - "
                    txt2="Herbal Remedy for"
                    txt3="Hair Care"
                    // text="Kuntal Care Capsule -                        Herbal Remedy for                                             Hair Care"
                    img={require("../../assets/RO/RO1.png")}
                    price="1,499"
                    Dprice="1,650"
                    navigation={navigation}
                />

                <RO
                    txt1="MamaEarth Cream - "
                    txt2="Herbal Remedy for"
                    txt3="Skin Care"
                    // text="MamaEarth Cream -                           Herbal Remedy                                   for Skin Care"
                    img={require("../../assets/RO/RO2.jpg")}
                    price="900"
                    Dprice="1,270"
                    navigation={navigation}
                />
            </View >
        </ScrollView >
    )
}

export default Orders

const styles = StyleSheet.create({})