import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import { COLORS } from '../constants';
import { OtpInput } from "react-native-otp-entry";
import Button from "../components/Button";

const ChangePIN = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.area}>
      <View style={styles.container}>
        <Header title="Change PIN" />
        <ScrollView>
          <Text style={[styles.title, {
            color: COLORS.greyscale900
          }]}>Change your PIN number to make your account
            more secure.</Text>
          <OtpInput
            numberOfDigits={4}
            onTextChange={(text) => console.log(text)}
            focusColor={COLORS.primary}
            focusStickBlinkingDuration={500}
            onFilled={(text) => console.log(`OTP is ${text}`)}
            theme={{
              pinCodeContainerStyle: {
                backgroundColor: COLORS.secondaryWhite,
                borderColor: COLORS.secondaryWhite,
                borderWidth: 1,
                borderRadius: 10,
                height: 58,
                width: 58,
              },
              pinCodeTextStyle: {
                color: COLORS.black,
              }
            }}
          />
        </ScrollView>
        <Button
          title="Continue"
          filled
          style={styles.button}
          onPress={() => { navigation.goBack() }}
        />
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: COLORS.white
  },
  title: {
    fontSize: 18,
    fontFamily: "Urbanist Medium",
    color: COLORS.greyscale900,
    textAlign: "center",
    marginVertical: 64
  },
  OTPStyle: {
    borderColor: COLORS.black,
    borderRadius: 8,
    height: 58,
    width: 58,
    backgroundColor: COLORS.secondaryWhite,
    borderBottomColor: "gray",
    borderBottomWidth: .4,
    borderWidth: .4,
    borderColor: "gray"
  },
  codeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24,
    justifyContent: "center"
  },
  code: {
    fontSize: 18,
    fontFamily: "Urbanist Medium",
    color: COLORS.greyscale900,
    textAlign: "center"
  },
  time: {
    fontFamily: "Urbanist Medium",
    fontSize: 18,
    color: COLORS.primary
  },
  button: {
    borderRadius: 32
  }
})

export default ChangePIN