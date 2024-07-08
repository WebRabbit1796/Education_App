import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../constants';

const SectionSubItem = ({ title, subtitle }) => {

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: "gray" }]}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    width: SIZES.width - 32,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8
  },
  title: {
    fontSize: 16,
    fontFamily: "Urbanist SemiBold",
    color: "gray"
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "Urbanist SemiBold",
    color: COLORS.primary
  }
})

export default SectionSubItem