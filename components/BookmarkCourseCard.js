import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { COLORS, SIZES, icons } from '../constants';
import FontAwesome from "react-native-vector-icons/FontAwesome";

const BookmarkCourseCard = ({
    name,
    image,
    category,
    price,
    isOnDiscount,
    oldPrice,
    rating,
    numStudents,
    onPress,
    bookmarkOnPress,
    containerStyles
}) => {

    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, { 
            backgroundColor: COLORS.white
        }, containerStyles ]}>
            <Image
                source={image}
                resizeMode='cover'
                style={styles.courseImage}
            />
            <View style={{ flex: 1 }}>
                <View style={styles.topContainer}>
                    <View style={styles.categoryContainer}>
                        <Text style={styles.categoryName}>{category}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={bookmarkOnPress}>
                        <Image
                            source={icons.bookmark2}
                            resizeMode='contain'
                            style={[styles.bookmarkIcon, {
                                tintColor: COLORS.primary
                            }]}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={[styles.name, { 
                    color: COLORS.greyscale900
                }]}>{name}</Text>
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>${price}</Text>
                    {
                        isOnDiscount && <Text style={styles.oldPrice}>{"   "}${oldPrice}</Text>
                    }
                </View>
                <View style={styles.ratingContainer}>
                    <FontAwesome name="star-half-empty" size={20} color="orange" />
                    <Text style={styles.rating}>{rating}</Text>
                    <Text style={styles.numStudents}> |  {numStudents} students</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: SIZES.width - 32,
        borderRadius: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems:"center",
        height: 148,
        backgroundColor: COLORS.white,
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 0,
        marginVertical: 8
    },
    courseImage: {
        width: 124,
        height: 124,
        borderRadius: 16,
        marginRight: 16,
    },
    topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    categoryContainer: {
        paddingHorizontal: 10,
        paddingVertical: 6,
        backgroundColor: COLORS.transparentTertiary,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    categoryName: {
        fontSize: 14,
        fontFamily: "Urbanist SemiBold",
        color: COLORS.primary
    },
    bookmarkIcon: {
        width: 24,
        height: 24,
        tintColor: COLORS.primary
    },
    name: {
        fontSize: 16,
        fontFamily: "Urbanist Bold",
        color: COLORS.black,
        marginVertical: 10,
    },
    priceContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 6
    },
    price: {
        fontSize: 18,
        fontFamily: "Urbanist Bold",
        color: COLORS.primary,
    },
    oldPrice: {
        fontSize: 14,
        fontFamily: "Urbanist Medium",
        color: COLORS.gray,
        textDecorationLine: 'line-through',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rating: {
        fontSize: 14,
        fontFamily: "Urbanist Medium",
        color: COLORS.gray,
    },
    numStudents: {
        fontSize: 14,
        fontFamily: "Urbanist Medium",
        color: COLORS.gray,
        marginLeft: 8,
    }
})

export default BookmarkCourseCard