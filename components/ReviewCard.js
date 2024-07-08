import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Fontisto from "react-native-vector-icons/Fontisto";
import { COLORS, icons } from '../constants';
import { getTimeAgo } from '../utils/date';

const ReviewCard = ({
    avatar,
    name,
    description,
    avgRating,
    date,
    numLikes
}) => {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.reviewHeaderContainer}>
                <View style={styles.reviewHeaderLeft}>
                    <Image
                        source={avatar}
                        resizeMode='contain'
                        style={styles.avatar}
                    />
                    <Text style={[styles.name, {
                        color: COLORS.greyscale900
                    }]}>{name}</Text>
                </View>
                <View style={styles.reviewHeaderRight}>
                    <View style={styles.starContainer}>
                        <Fontisto name="star" size={10} color={COLORS.primary} />
                        <Text style={styles.rating}>{avgRating}</Text>
                    </View>
                    <Image
                        source={icons.moreCircle}
                        resizeMode='contain'
                        style={[styles.moreCircleIcon, {
                            tintColor: COLORS.greyscale900
                        }]}
                    />
                </View>
            </View>
            <Text style={[styles.description, {
                color: COLORS.greyscale900
            }]}>{description}</Text>
            <View style={styles.reviewBottomContainer}>
                <View style={styles.likeContainer}>
                    <TouchableOpacity
                        onPress={() => setIsLiked(!isLiked)}
                    >
                        {
                            isLiked ? (
                                <Image
                                    source={icons.heart3}
                                    resizeMode='contain'
                                    style={styles.heartIcon}
                                />
                            ) : (
                                <Image
                                    source={icons.heart2Outline}
                                    resizeMode='contain'
                                    style={[styles.heartIcon, {
                                        tintColor: COLORS.black
                                    }]}
                                />
                            )
                        }
                    </TouchableOpacity>
                    <Text style={[styles.numLikes, {
                        color: COLORS.greyscale900
                    }]}>{numLikes}</Text>
                </View>
                <Text style={styles.date}>{getTimeAgo(date)}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginBottom: 6
    },
    reviewHeaderContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 9999,
        marginRight: 10
    },
    name: {
        fontSize: 16,
        fontFamily: "Urbanist Bold",
        color: COLORS.black
    },
    starContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 22,
        borderColor: COLORS.primary,
        borderWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 12
    },
    reviewHeaderLeft: {
        flexDirection: "row",
        alignItems: "center"
    },
    reviewHeaderRight: {
        flexDirection: "row",
        alignItems: "center"
    },
    rating: {
        fontSize: 14,
        fontFamily: "Urbanist SemiBold",
        color: COLORS.primary,
        marginLeft: 5
    },
    moreCircleIcon: {
        width: 20,
        height: 20,
        tintColor: COLORS.black
    },
    description: {
        fontSize: 14,
        fontFamily: "Urbanist Regular",
        color: COLORS.black,
        marginTop: 10
    },
    reviewBottomContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 12
    },
    likeContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    numLikes: {
        fontSize: 14,
        fontFamily: "Urbanist SemiBold",
        color: COLORS.black
    },
    date: {
        fontSize: 14,
        fontFamily: "Urbanist Regular",
        color: COLORS.gray,
        marginLeft: 12
    },
    heartIcon: {
        width: 20,
        height: 20,
        marginRight: 8
    }
})
export default ReviewCard