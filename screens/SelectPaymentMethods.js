import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { COLORS, SIZES, icons } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import { ScrollView } from 'react-native-virtualized-view';
import PaymentMethodItem from '../components/PaymentMethodItem';
import Button from '../components/Button';

const SelectPaymentMethods = ({ navigation }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCheckboxPress = (itemTitle) => {
    if (selectedItem === itemTitle) {
      // If the clicked item is already selected, deselect it
      setSelectedItem(null);
    } else {
      // Otherwise, select the clicked item
      setSelectedItem(itemTitle);
    }
  };

  return (
    <SafeAreaView style={styles.area}>
      <View style={styles.container}>
        <Header title="Payment" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={[styles.title, {
            color: COLORS.greyscale900
          }]}>Select the payment method
            you want to use.</Text>
          <PaymentMethodItem
            checked={selectedItem === 'Paypal'}
            onPress={() => handleCheckboxPress('Paypal')}
            title="Paypal"
            icon={icons.paypal}
          />
          <PaymentMethodItem
            checked={selectedItem === 'Google Pay'}
            onPress={() => handleCheckboxPress('Google Pay')}
            title="Google Pay"
            icon={icons.google}
          />
          <PaymentMethodItem
            checked={selectedItem === 'Apple Pay'}
            onPress={() => handleCheckboxPress('Apple Pay')}
            title="Apple Pay"
            icon={icons.apple}
            tintColor={COLORS.black}
          />
          <PaymentMethodItem
            checked={selectedItem === 'Credit Card'}
            onPress={() => handleCheckboxPress('Credit Card')}
            title="•••• •••• •••• •••• 4679"
            icon={icons.creditCard}
          />
          <Button
            title="Add New Card"
            onPress={() => { navigation.navigate("AddNewCard") }}
            style={{
              width: SIZES.width - 32,
              borderRadius: 32,
              backgroundColor: COLORS.tansparentPrimary,
              borderColor: COLORS.tansparentPrimary
            }}
            textColor={COLORS.primary}
          />
        </ScrollView>
        <Button
          title="Continue"
          filled
          style={styles.continueBtn}
          onPress={() => { navigation.navigate("ConfirmPayment") }}
        />
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
    backgroundColor: COLORS.white,
    padding: 16
  },
  title: {
    fontSize: 16,
    fontFamily: "Urbanist Medium",
    color: COLORS.greyscale900,
    marginVertical: 32
  },
  continueBtn: {
    position: "absolute",
    bottom: 16,
    right: 16,
    width: SIZES.width - 32,
    borderRadius: 32,
    backgroundColor: COLORS.primary,
  }
})

export default SelectPaymentMethods