import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from 'react-native-gesture-handler';

const Sec8 = ({ navigation }) => {
    return (
        <View style={styles.Container1}>
            <View style={styles.Container2}>
                <View style={styles.Container3}>
                    <Icon
                        name="sticker-check-outline"
                        size={40} color={"#547A62"}
                        style={styles.Icon} />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("Quiz")}>
                    <Text style={styles.txt}>
                        Take a Quiz
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.Container2}>
                <View style={styles.Container3}>
                    <Icon
                        name="book-outline"
                        size={40} color={"#547A62"}
                        style={styles.Icon} />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("Ebooks")}>
                    <Text style={styles.txt}>
                        E-books
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.Container2}>
                <View style={styles.Container3}>
                    <Icon
                        name="monitor"
                        size={40}
                        color={"#547A62"}
                        style={styles.Icon} />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("TV")}>
                    <Text style={styles.txt}>
                        Amrutam TV
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Sec8

const styles = StyleSheet.create({
    Container1: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
    },

    Container2: {
        height: responsiveHeight(22),
        borderRadius: 10,
        elevation: 1,
        borderRadius: 10,
    },

    Container3: {
        backgroundColor: "#FFFAD7",
        height: responsiveHeight(14),
        width: responsiveWidth(25),
        borderRadius: 10,
    },

    txt: {
        color: "#547A62",
        textAlign: "center",
        marginVertical: responsiveHeight(2.5),
    },


    Container5: {
        height: responsiveHeight(22),
        borderRadius: 10,
        elevation: 1,
        borderRadius: 10,
    },

    Container6: {
        backgroundColor: "#FFFAD7",
        height: responsiveHeight(14),
        width: responsiveWidth(25),
        borderRadius: 10,
    },

    Icon: {
        textAlign: "center",
        marginTop: responsiveHeight(5),
    },
})