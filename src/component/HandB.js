import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Mi from "react-native-vector-icons/MaterialIcons";


const HandB = ({ navigation }) => {
    return (
        <View>
            <View style={styles.Container1}>
                <TouchableOpacity onPress={() => navigation.navigate("SFHB")}>
                    <Text style={styles.btn1txt}>
                        Shop for Health & Beauty
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("SFHB")}>
                    <Mi name='arrow-forward-ios' size={20} />
                </TouchableOpacity>
            </View>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.Container2}>
                    <View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("SFHB")}
                            style={styles.btn}>
                            <Image
                                source={require("../../assets/SFHB/Hair.png")}
                                style={styles.btnImg} />
                        </TouchableOpacity>
                        <Text style={styles.txt}>
                            HAIR
                        </Text>
                    </View>

                    <View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("SFHB")}
                            style={styles.btn}>
                            <Image
                                source={require("../../assets/SFHB/Skin.png")}
                                style={styles.btnImg} />
                        </TouchableOpacity>
                        <Text style={styles.txt}>
                            SKIN
                        </Text>
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("SFHB")}
                            style={styles.btn}>
                            <Image
                                source={require("../../assets/SFHB/Women.png")}
                                style={styles.btnImg} />
                        </TouchableOpacity>
                        <Text style={styles.txt}>
                            WOMEN
                        </Text>
                    </View>

                    <View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("SFHB")}
                            style={styles.btn}>
                            <Image
                                source={require("../../assets/SFHB/Sexual.png")}
                                style={styles.btnImg} />
                        </TouchableOpacity>
                        <Text style={styles.txt}>
                            SEXUAL
                        </Text>
                    </View>

                    <View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("SFHB")}
                            style={styles.btn}>
                            <Image
                                source={require("../../assets/SFHB/Digestion.png")}
                                style={styles.btnImg} />
                        </TouchableOpacity>
                        <Text style={styles.txt}>
                            DIGESTION
                        </Text>
                    </View>

                    <View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("SFHB")}
                            style={styles.btn}>
                            <Image
                                source={require("../../assets/SFHB/Pile.png")}
                                style={styles.btnImg} />
                        </TouchableOpacity>
                        <Text style={styles.txt}>
                            PAIN
                        </Text>
                    </View>


                </View>
            </ScrollView>
        </View>
    )
}

export default HandB

const styles = StyleSheet.create({
    Container1: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: responsiveHeight(5),
    },

    btn1txt: {
        color: "#547A62",
        fontWeight: "bold",
        fontSize: responsiveFontSize(2.2),
        marginLeft: responsiveHeight(1),
    },

    Container2: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: responsiveHeight(2.9),
    },

    btn: {
        borderWidth: 1,
        borderColor: "#FFCC8E",
        borderRadius: 5,
        marginHorizontal: 5,
        paddingHorizontal: responsiveWidth(2.6),
        paddingVertical: responsiveHeight(1.3),
        backgroundColor: "#FDF3E5",
    },

    btnImg: {
        height: responsiveHeight(5),
        borderRadius: 5,
        width: responsiveWidth(9),
        margin: 2,
    },

    txt: {
        textAlign: 'center',
        fontSize: responsiveFontSize(1.5),
    },

})