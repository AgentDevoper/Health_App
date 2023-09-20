import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Badge, Surface } from 'react-native-paper'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import TopNav from '../component/TopNav'


const IconSize = 24;
const Bulletin = ({ navigation }) => {
    return (
        <View style={{}}>

            <View style={{
                height: responsiveHeight(10),
                justifyContent: "space-between",
                alignContent: "center",
                flexDirection: "row",
                marginTop: responsiveHeight(3.5),
            }}>
                <View style={styles.view}>
                    {<TouchableOpacity
                        style={{ flexDirection: "row" }}
                        onPress={() => navigation.goBack()}>
                        <Ionicons name='md-chevron-back-circle-outline' size={IconSize} color={"green"} style={{ fontSize: 32, marginLeft: responsiveWidth(2) }} />
                    </TouchableOpacity>}
                    <Text style={{ marginLeft: 8, fontSize: 16, color: "#547A62", fontWeight: "bold" }} >
                        Bulletin
                    </Text>
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
                            <Feather name='bell' size={IconSize} color={"#A4A29F"} style={{ fontSize: 28, paddingVertical: 7, marginTop: 1, marginHorizontal: 14 }} />
                            {/* <Badge style={{
                                position: "absolute",
                                top: 0,
                                right: 0,
                                color: "white"
                            }}>
                                4
                            </Badge> */}
                            <Badge style={{
                                position: "absolute",
                                top: 0,
                                right: 0,
                                color: "white",
                                marginRight: 10,
                            }}>
                                4
                            </Badge>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <TopNav />
        </View>
    )
}

export default Bulletin

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
        // marginRight: 10,
    },
})