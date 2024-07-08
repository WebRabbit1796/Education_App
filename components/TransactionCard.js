import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../constants';
import { useNavigation } from '@react-navigation/native';

const TransactionCard = ({ name, image, status }) => {
    const navigation = useNavigation();

    return (
        <View style={[styles.container, {
            backgroundColor: COLORS.white
        }]}>
            <View style={styles.viewLeft}>
                <Image
                    source={image}
                    resizeMode='cover'
                    style={styles.image}
                />
                <View style={styles.infoContainer}>
                    <Text style={[styles.name, {
                        color: COLORS.greyscale900
                    }]}>{name}</Text>
                    <TouchableOpacity style={styles.statusBtn}>
                        <Text style={styles.status}>{status}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate("EReceipt")}
                style={styles.btn}>
                <Text style={styles.btnText}>E-Receipt</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        backgroundColor: COLORS.white,
        width: SIZES.width - 32,
        height: 112,
        marginVertical: 6,
        borderRadius: 12,
        paddingHorizontal: 12,
        elevation: 1,
        shadowColor: "#FAFAFA",
        shadowOffset: { width: 0, height: 2 }, // line for iOS shadow
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    viewLeft: {
        flexDirection: "row",
        alignItems: 'center',
        flex: 1
    },
    image: {
        height: 84,
        width: 84,
        borderRadius: 12
    },
    infoContainer: {
        marginLeft: 16,
        flex: 1,
        marginRight: 22
    },
    name: {
        fontSize: 16,
        fontFamily: "Urbanist Bold",
        color: COLORS.greyscale900,
        marginBottom: 12
    },
    statusBtn: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 8,
        backgroundColor: COLORS.tansparentPrimary,
        justifyContent: 'center',
        alignItems: 'center',
        width: 64
    },
    status: {
        fontSize: 12,
        fontFamily: "Urbanist Medium",
        color: COLORS.primary,
    },
    btn: {
        width: 88,
        height: 28,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 22,
        backgroundColor: COLORS.primary
    },
    btnText: {
        fontSize: 12,
        fontFamily: "Urbanist SemiBold",
        color: COLORS.white
    }
})

export default TransactionCard