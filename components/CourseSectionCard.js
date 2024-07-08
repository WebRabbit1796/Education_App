import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../constants';
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

const CourseSectionCard = ({ num, title, duration, isCompleted, onPress }) => {

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.container, {
                backgroundColor: COLORS.white
            }]}>
            <View style={styles.viewLeft}>
                <View style={styles.numContainer}>
                    <Text style={styles.num}>{num}</Text>
                </View>
                <View>
                    <Text style={[styles.title, {
                        color: COLORS.dark1
                    }]}>{title}</Text>
                    <Text style={styles.duration}>{duration}</Text>
                </View>
            </View>
            <TouchableOpacity>
                {
                    isCompleted ? (
                        <Ionicons
                            name="play-circle-sharp"
                            size={24}
                            color={COLORS.primary} />
                    ) : (
                        <SimpleLineIcons name="lock" size={20} color={COLORS.gray} />
                    )
                }
            </TouchableOpacity>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        backgroundColor: COLORS.white,
        width: SIZES.width - 32,
        height: 72,
        marginVertical: 6,
        borderRadius: 12,
        paddingHorizontal: 12,
        elevation: 1,
        shadowColor: "#FAFAFA",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    viewLeft: {
        flexDirection: "row",
        alignItems: "center"
    },
    numContainer: {
        width: 42,
        height: 42,
        borderRadius: 31,
        backgroundColor: COLORS.transparentTertiary,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 16
    },
    num: {
        fontSize: 16,
        fontFamily: "Urbanist Bold",
        color: COLORS.primary,
        textAlign: "center"
    },
    title: {
        fontSize: 14,
        fontFamily: "Urbanist Bold",
        color: COLORS.black,
        marginBottom: 4
    },
    duration: {
        fontSize: 12,
        color: "gray",
    }
})

export default CourseSectionCard