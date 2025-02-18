import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../Thems/AppColors/AppColors";
import Size from "../Thems/FontSize/FontSize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const PickContainer = ({ name, phone, onPress }) => {
  return (
    <View style={styles.pickContainer}>
      <Text style={styles.passengerName}>{`${name} (${phone})`}</Text>
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <View style={styles.pickbutton}>
          <Text style={styles.pickbuttontext}>Pick</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  pickContainer: {
    height: hp("6%"), // Responsive height
    width: "100%", 
    backgroundColor: colors.PickContainer_BG,
    paddingHorizontal: wp("3%"),
    borderRadius: wp("3%"),
    borderColor: colors.PickContainer_Boreder_BG,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: hp("1.5%"),
  },
  passengerName: {
    fontSize: wp("4%"),
    fontFamily: "Urbanist-Bold",
    color: colors.Passenger_Name,
  },
  pickbutton: {
    height: hp("4%"),
    width: wp("16%"),
    backgroundColor: colors.Pick_Button,
    borderRadius: wp("2%"),
    justifyContent: "center",
    alignItems: "center",
  },
  pickbuttontext: {
    color: colors.Pick_Button_Text,
    textAlign: "center",
    fontSize: wp("4%"),
    fontFamily: "Urbanist-Bold",
  },
});

export default PickContainer;

