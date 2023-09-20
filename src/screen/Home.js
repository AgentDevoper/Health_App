import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../screen/Header';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import moment from 'moment/moment';
import C1 from '../component/C1';
import { ScrollView } from 'react-native-gesture-handler';
import C4 from '../component/C4';
import HandB from '../component/HandB';
import UA from '../component/UA';
import RO from '../component/RO';
import Blog from '../component/Blog';
import Sec8 from '../component/Sec8';
import Sec9 from '../component/Sec9';
import Slide from '../component/Slide';


var day = moment().format('dddd');
var date = moment().format('D');
var month = moment().format('MMM');

const name = "Angela";
const Dgreen = "#3D7150";
const Lgreen = "#547A62";

const Home = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.mainContainer}>
                <Header navigation={navigation} />

                {/* Section 1 */}
                <View style={styles.Sec2Container}>

                    <Text style={styles.Sec2Txt}>{day + ", " + date + " " + month}</Text>
                    <Text style={{
                        color: Dgreen,
                        fontSize: responsiveFontSize(3),
                        fontWeight: "bold",
                    }}>Namaste, {name}</Text>

                    {/* Section 2 */}
                    <Slide />


                    {/* Section 3 */}
                    {/* <C1 icon="power-sleep" txt1="You slept for" txt2="8 hours" /> */}
                    <C1 icon="sleep" txt1="You slept for" txt2="8 hours      " />
                    <C1 icon="shoe-print" txt1="You walked" txt2="1200 steps" />
                    <C1 icon="clock-time-four-outline" txt1="  Screen Time is" txt2="5 hours  " />
                    <C4 icon="power-sleep" navigation={navigation} />


                    {/* Section 4 */}
                    <HandB navigation={navigation} />


                    {/* Section 5 */}
                    <UA navigation={navigation} />

                    {/* Section 6  */}
                    <View style={styles.Sec6Container}>
                        <Text style={styles.Sec6txt}>
                            Recent Orders
                        </Text>
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <RO
                            txt1="Kuntal Care Capsule - "
                            txt2="Herbal Remedy for"
                            txt3="Hair Care"
                            img={require("../../assets/RO/RO1.png")}
                            price="1,499"
                            Dprice="1,650"
                            navigation={navigation}
                        />

                        <RO
                            txt1="MamaEarth Cream - "
                            txt2="Herbal Remedy for"
                            txt3="Skin Care"
                            img={require("../../assets/RO/RO2.jpg")}
                            price="900"
                            Dprice="1,270"
                            navigation={navigation}
                        />
                    </ScrollView >


                    {/* Section 7  */}
                    <View style={styles.Sec7Container}>
                        <Text style={styles.Sec7txt}>
                            Amrutam Blog
                        </Text>
                    </View>


                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                        <Blog
                            txt1="COVID Cases "
                            txt2="Rapidly High"
                            txt3="Due to weeks..."
                            navigation={navigation}
                            img={require("../../assets/Blog/Blog1.jpg")}
                        />

                        <Blog
                            txt1="Symptoms "
                            txt2="of Omicorn "
                            txt3="Virus..."
                            navigation={navigation}
                            img={require("../../assets/Blog/Blog2.jpg")}
                        />
                    </ScrollView>


                    {/* Section 8 */}
                    <View style={styles.Sec8Container}>
                        <Text style={styles.Sec8txt}>
                            What are you looking for ?
                        </Text>
                    </View>

                    <Sec8 navigation={navigation} />


                    {/* Section 9 - Doctors */}
                    <View style={styles.Sec9Container}>
                        <Text style={styles.Sec9txt}>
                            Top Rated Doctors
                        </Text>
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={{ flexDirection: "row" }}>
                            <Sec9 navigation={navigation} doctor="Dr.Surabhi Pathak" img={require("../../assets/Doctor/Doctor.png")} follow="You Followed " />
                            <Sec9 navigation={navigation} doctor="Dr.Saurav Pathak" img={require("../../assets/Doctor/Doctor2.jpg")} follow="You Followed " />
                            <Sec9 navigation={navigation} doctor="Dr.Gaurav Jain" img={require("../../assets/Doctor/Doctor3.jpg")} follow="You Followed " />
                        </View>
                    </ScrollView>

                </View>
            </View >
        </ScrollView >
    )
}

export default Home

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "white",
        witdh: responsiveWidth(100),
        paddingBottom: 80,
    },

    Sec2Container: {
        marginHorizontal: responsiveWidth(4),
    },

    Sec2Txt: {
        color: Lgreen,
        fontSize: responsiveFontSize(2)
    },

    Sec6Container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: responsiveHeight(5),
    },
    Sec6txt: {
        color: "#547A62",
        fontWeight: "bold",
        fontSize: responsiveFontSize(2.3),
        marginLeft: responsiveHeight(1),
    },

    Sec7Container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: responsiveHeight(5),
    },
    Sec7txt: {
        color: "#547A62",
        fontWeight: "bold",
        fontSize: responsiveFontSize(2.3),
        marginLeft: responsiveHeight(1),
    },

    Sec8Container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: responsiveHeight(5),
    },
    Sec8txt: {
        color: "#547A62",
        fontWeight: "bold",
        fontSize: responsiveFontSize(2.3),
        marginLeft: responsiveHeight(1),
    },

    Sec9Container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: responsiveHeight(5),
    },
    Sec9txt: {
        color: "#547A62",
        fontWeight: "bold",
        fontSize: responsiveFontSize(2.3),
        marginLeft: responsiveHeight(1),
        marginTop: responsiveHeight(1),
    },
})