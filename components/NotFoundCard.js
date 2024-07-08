import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react'
import { COLORS, illustrations } from '../constants';

const NotFoundCard = () => {

  return (
    <View style={styles.container}>
      <Image
        source={illustrations.notFound}
        resizeMode='contain'
        style={styles.illustration}
      />
      <Text style={[styles.title, {
        color: COLORS.black
      }]}>Not Found</Text>
      <Text style={[styles.subtitle, {
        color: COLORS.black
      }]}>Sorry, the keyword you entered cannot be found,
        please check again or search with another keyword.</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 32,
    alignItems: "center",
    justifyContent: "center"
  },
  illustration: {
    width: 340,
    height: 250,
    marginVertical: 32
  },
  title: {
    fontSize: 24,
    fontFamily: "Urbanist Bold",
    color: COLORS.black,
    marginVertical: 16
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "Urbanist Regular",
    color: COLORS.grayscale700,
    textAlign: "center"
  }
})

export default NotFoundCard