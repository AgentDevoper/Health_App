import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import { Badge } from 'react-native-paper'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Feather from 'react-native-vector-icons/Feather'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const IconSize = 24;
const ImgUrl = "https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
const Header = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.view}>
                {<TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Feather name='menu' size={IconSize} color={"green"} style={{ fontSize: 28, marginLeft: responsiveWidth(2) }} />
                </TouchableOpacity>}
            </View>

            <View style={{
                marginHorizontal: 2,
            }}>
                <View style={[styles.view, styles.righView]}>
                    <TouchableOpacity >
                        <Feather name='search' size={IconSize} color={"#A4A29F"} style={{ fontSize: 28 }} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.rowView}
                        onPress={() => navigation.navigate("Bulletin")}>
                        <Feather name='bell' size={IconSize} color={"#A4A29F"} style={{ fontSize: 28, paddingVertical: 7, marginTop: 1, marginHorizontal: 8 }} />
                        <Badge style={styles.badge}>
                            4
                        </Badge>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("Profile")}
                        style={styles.btn}>
                        <Image
                            source={{ uri: ImgUrl }}
                            resizeMode='contain'
                            style={styles.img} />
                    </TouchableOpacity>

                </View>
            </View>

        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    view: {
        flex: 1,
        margin: 10,
        alignItems: "center",
        flexDirection: "row",
    },
    titleView: {
        textAlign: "center",
        justifyContent: "center",
    },
    righView: {
        justifyContent: "flex-end",
    },
    rowView: {
        flexDirection: "row",
        alignContent: "center",
        marginRight: 10,
    },





    mainContainer: {
        height: responsiveHeight(10),
        justifyContent: "space-between",
        alignContent: "center",
        flexDirection: "row",
        marginTop: responsiveHeight(3.5),
    },

    badge: {
        position: "absolute",
        top: 0,
        right: 0,
        color: "white",
        marginRight: 4,
    },

    btn: {
        borderRadius: 11,
        borderWidth: 1,
    },

    img: {
        height: 35,
        width: 35,
        borderRadius: 11,
    },
})