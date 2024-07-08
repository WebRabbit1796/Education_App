import { View, Text, StyleSheet, ScrollView, Image, Alert, TouchableOpacity, Platform } from 'react-native';
import React, { useCallback, useEffect, useReducer, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES, icons, images } from '../constants';
import Header from '../components/Header';
import { reducer } from '../utils/reducers/formReducers';
import { validateInput } from '../utils/actions/formActions';
import Input from '../components/Input';
import CheckBox from '@react-native-community/checkbox';
import Button from '../components/Button';

const isTestMode = true

const initialState = {
    inputValues: {
        email: isTestMode ? 'example@gmail.com' : '',
    },
    inputValidities: {
        email: false
    },
    formIsValid: false,
}

const ForgotPasswordEmail = ({ navigation }) => {
    const [formState, dispatchFormState] = useReducer(reducer, initialState);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isChecked, setChecked] = useState(false);

    const inputChangedHandler = useCallback(
        (inputId, inputValue) => {
            const result = validateInput(inputId, inputValue)
            dispatchFormState({ inputId, validationResult: result, inputValue })
        },
        [dispatchFormState]
    )

    useEffect(() => {
        if (error) {
            Alert.alert('An error occured', error)
        }
    }, [error])

    return (
        <SafeAreaView style={styles.area}>
            <View style={styles.container}>
                <Header title="Forgot Password" />
                <ScrollView style={{ marginVertical: 54 }} 
                        showsVerticalScrollIndicator={false}>
                    <View style={styles.logoContainer}>
                        <Image
                            source={images.logo}
                            resizeMode='contain'
                            style={styles.logo}
                        />
                    </View>
                    <Text style={[styles.title, {
                        color: COLORS.black
                    }]}>Enter to Your Email</Text>
                    <Input
                        id="email"
                        onInputChanged={inputChangedHandler}
                        errorText={formState.inputValidities['email']}
                        placeholder="Email"
                        placeholderTextColor={COLORS.black}
                        icon={icons.email}
                        keyboardType="email-address"
                    />
                    <View style={styles.checkBoxContainer}>
                        <View style={{ flexDirection: 'row' }}>
                            <CheckBox
                                style={styles.checkbox}
                                value={isChecked}
                                boxType="square"
                                onTintColor={isChecked ? COLORS.primary : "gray"}
                                onFillColor={isChecked ? COLORS.primary : "gray"}
                                onCheckColor={COLORS.white}
                                onValueChange={setChecked}
                            />
                            <View style={{ flex: 1 }}>
                                <Text style={[styles.privacy, {
                                    color: COLORS.black
                                }]}>Remenber me</Text>
                            </View>
                        </View>
                    </View>
                    <Button
                        title="Reset Password"
                        filled
                        onPress={() => navigation.navigate("OTPVerification")}
                        style={styles.button}
                    />
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.forgotPasswordBtnText}>Remenber the password?</Text>
                    </TouchableOpacity>
                    <View>
                    </View>
                </ScrollView>
                <View style={styles.bottomContainer}>
                    <Text style={[styles.bottomLeft, {
                        color: COLORS.black
                    }]}>Don't have an account ?</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Signup")}>
                        <Text style={styles.bottomRight}>{"  "}Sign Up</Text>
                    </TouchableOpacity>
                </View>
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
    logo: {
        width: 100,
        height: 100,
        tintColor: COLORS.primary
    },
    logoContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 32
    },
    title: {
        fontSize: 28,
        fontFamily: "Urbanist Bold",
        color: COLORS.black,
        textAlign: "center"
    },
    center: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 26,
        fontFamily: "Urbanist SemiBold",
        color: COLORS.black,
        textAlign: "center",
        marginBottom: 22
    },
    checkBoxContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 18,
    },
    checkbox: {
        marginRight: Platform.OS == "ios" ? 8 : 14,
        marginLeft: 4,
        height: 16,
        width: 16,
        borderColor: COLORS.primary,
    },
    privacy: {
        fontSize: 12,
        fontFamily: "Urbanist Regular",
        color: COLORS.black,
    },
    socialTitle: {
        fontSize: 19.25,
        fontFamily: "Urbanist Medium",
        color: COLORS.black,
        textAlign: "center",
        marginVertical: 26
    },
    socialBtnContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    bottomContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 18,
        position: "absolute",
        bottom: 12,
        right: 0,
        left: 0,
    },
    bottomLeft: {
        fontSize: 14,
        fontFamily: "Urbanist Regular",
        color: "black"
    },
    bottomRight: {
        fontSize: 16,
        fontFamily: "Urbanist Medium",
        color: COLORS.primary
    },
    button: {
        marginVertical: 6,
        width: SIZES.width - 32,
        borderRadius: 30
    },
    forgotPasswordBtnText: {
        fontSize: 16,
        fontFamily: "Urbanist SemiBold",
        color: COLORS.primary,
        textAlign: "center",
        marginTop: 12
    }
})

export default ForgotPasswordEmail