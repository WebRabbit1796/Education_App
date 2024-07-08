import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS, SIZES, icons } from '../constants';

const StudentCard = ({ avatar, fullName, position, onPress }) => {

    return (
        <View style={styles.mentorContainer}>
            <View style={styles.chatLeftContainer}>
                <Image
                    source={avatar}
                    resizeMode='cover'
                    style={styles.avatarImage}
                />
                <View style={styles.userInfoContainer}>
                    <Text style={[styles.fullName, {
                        color: COLORS.greyscale900
                    }]}>{fullName}</Text>
                    <Text style={styles.position}>{position}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={onPress}>
                <Image
                    source={icons.chatBubble2Outline}
                    resizeMode='contain'
                    style={styles.chatIcon}
                />
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    mentorContainer: {
        width: SIZES.width - 32,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        marginVertical: 8
    },
    avatarImage: {
        width: 64,
        height: 64,
        borderRadius: 999
    },
    fullName: {
        fontSize: 18,
        fontFamily: "Urbanist Bold",
        color: COLORS.black,
        marginBottom: 4
    },
    position: {
        fontSize: 13,
        fontFamily: "Urbanist Medium",
        color: "gray"
    },
    chatIcon: {
        width: 24,
        height: 24,
        tintColor: COLORS.primary
    },
    chatLeftContainer: {
        flexDirection: "row",
        alignItems: 'center'
    },
    userInfoContainer: {
        marginLeft: 12
    }
})

export default StudentCard