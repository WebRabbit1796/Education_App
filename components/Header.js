import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { SIZES, COLORS, icons } from '../constants';
import { useNavigation } from '@react-navigation/native';

const Header = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, {
      backgroundColor: COLORS.white
    }]}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}>
        <Image
          source={icons.back}
          resizeMode='contain'
          style={[styles.backIcon, {
            tintColor: COLORS.black
          }]} />
      </TouchableOpacity>
      <Text style={[styles.title, {
        color: COLORS.black
      }]}>{title}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    width: SIZES.width - 32,
    flexDirection: "row",
    alignItems: "center",
  },
  backIcon: {
    width: 24,
    height: 24,
    marginRight: 16
  },
  title: {
    fontSize: 24,
    fontFamily: "Urbanist Bold",
    color: COLORS.black
  }
})

export default Header