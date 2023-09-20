import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Notifi from '../component/Notifi'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { ScrollView } from 'react-native-gesture-handler'

const green = "#3D7150";
const red = "#C83309"
const GetNotification = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>

            <View style={{
                marginHorizontal: responsiveWidth(2),
                marginBottom: responsiveHeight(30),
            }}>
                <Notifi
                    icon="ios-person-circle-outline"
                    // txt1="Namsate! 🌿"
                    // txt2="Welcome to the amrutam family:)"
                    // txt3="We hope you have a holistic experience here."
                    date="15 feb 2022"
                    color="green"

                    text="Namsate! 🌿                                                  Welcome to the amrutam family:)                      We hope you have a holistic experience here."
                // 1.Done
                />

                <Notifi
                    icon="checkmark-circle-outline"
                    // txt1=""
                    // txt2="{FName}, Woohoo! Your order has been placed "
                    // txt3="and will be shipped shortly! Track 🎁 �"
                    date="15 feb 2022"
                    color="green"

                    text=" {FName}, Woohoo! Your order has been placed  and will be shipped shortly! Track 🎁 �"
                // 2.Done
                />

                <Notifi
                    Micon="clock-time-eight-outline"
                    // txt1=""
                    // txt2="{FName},your favourite Elixirs are waiting 🍶"
                    // txt3="for you!"
                    date="15 feb 2022"
                    color="green"


                    text="{FName},your favourite Elixirs are waiting 🍶     for you!"
                // 3.Done
                />

                <Notifi
                    Micon="book-edit-outline"
                    // txt1=""
                    // txt2="Ding Ding! That's the bell for the new blog -"
                    // txt3="{Blog Name} 🔔"
                    date="15 feb 2022"
                    color="green"

                    text=" Ding Ding! That's the bell for the new blog -           {Blog Name} 🔔"
                // 4.Done
                />

                <Notifi
                    icon="ios-basket-outline"
                    // txt1=""
                    // txt2="{FName} Good news! Your order has arrived!"
                    // txt3="✨�"
                    date="15 feb 2022"
                    color="green"
                    // 5.Done

                    text=" {FName} Good news! Your order has arrived! ✨�"
                />

                <Notifi
                    icon="close-circle-outline"
                    // txt1=""
                    // txt2="The transaction for your recent order has "
                    // txt3="failed; click here to try again . �"
                    date="15 feb 2022"
                    color="red"

                    text="The transaction for your recent order has failed;                        click here to try again . �"
                // 6.Done
                />

                <Notifi
                    Micon="message-text-outline"
                    // txt1=""
                    // txt2="Reminder: Your chat consultation session with"
                    // txt3="[Doctor_Name] starts in 60 minutes 🔔"
                    date="15 feb 2022"
                    color="green"

                    text="Reminder: Your chat consultation session with [Doctor_Name] starts in 60 minutes 🔔"
                // 7.Done
                />

                <Notifi
                    icon="play-circle-outline"
                    // txt1=""
                    // txt2="Reminder: Your Video consultation session with"
                    // txt3="[Doctor_Name] starts in 60 minutes 🔔"
                    date="15 feb 2022"
                    color="green"

                    text="Reminder: Your Video consultation session with [Doctor_Name] starts in 60 minutes 🔔"
                // 8.Done
                />

                <Notifi
                    icon="close-circle-outline"
                    // txt1="{FName}; We regret to inform you that your "
                    // txt2="Chat consultation with [Doctor_Name]"
                    // txt3="has been cancelled �"
                    date="15 feb 2022"
                    color="red"

                    text="{FName}; We regret to inform you that your Chat consultation with [Doctor_Name] has             been cancelled �"
                // 9.Done
                />

                <Notifi
                    icon="close-circle-outline"
                    // txt1="{FName}; We regret to inform you that your "
                    // txt2="Video consultation with [Doctor_Name]"
                    // txt3="has been cancelled �"
                    date="15 feb 2022"
                    color="red"

                    text="{FName}; We regret to inform you that your Video consultation with [Doctor_Name] has been cancelled �"
                // 10.Done
                />

                <Notifi
                    Micon="message-text-clock-outline"
                    // txt1=""
                    // txt2="(FName), [Doctor_Name] has joined the chat "
                    // txt3="room and is waiting for you. 📱"
                    date="15 feb 2022"
                    color="green"

                    text="(FName), [Doctor_Name] has joined the chat  room and is waiting for you. 📱"
                // 11.Done
                />

                <Notifi
                    icon="ios-timer-outline"
                    // txt1=""
                    // txt2="(FName), [Doctor_Name] has joined the Video "
                    // txt3="room and is waiting for you. 📱"
                    date="15 feb 2022"
                    color="green"

                    text="(FName), [Doctor_Name] has joined the Video room and is waiting for you. 📱"
                // 12.Done
                />

                <Notifi
                    Micon="plus-circle-outline"
                    // txt1="(FName) Click here for your prescription and"
                    // txt2="start your Ayurvedic journey!✍"
                    // txt3="https://docs.google.com/document/u/0/"
                    date="15 feb 2022"
                    color="green"

                    text="(FName) Click here for your prescription and start your Ayurvedic journey!✍                       https://docs.google.com/document/u/0/"
                // 13.Done
                />
            </View>
        </ScrollView>
    )
}

export default GetNotification

const styles = StyleSheet.create({})