import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import { COLORS } from '../constants';

const SocialButton = ({ icon, onPress, tintColor }) => {

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {
        backgroundColor: COLORS.white,
        borderColor: COLORS.grayscale200
      }]}>
      <Image
        source={icon}
        resizeMode='contain'
        style={[styles.icon, {
          tintColor: tintColor
        }]}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 88,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    borderColor: COLORS.grayscale200,
    borderWidth: 1,
    marginHorizontal: 8
  },
  icon: {
    height: 24,
    width: 24,
  }
})

export default SocialButton