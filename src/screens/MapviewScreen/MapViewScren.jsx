import React, { useState } from "react";
import { View, StyleSheet, ImageBackground, Text, ScrollView } from "react-native";
import IconButton from "../../components/iconButton";
import PickContainer from "../../components/pickContainer";
import colors from '../../Thems/AppColors/AppColors';
import Size from '../../Thems/FontSize/FontSize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const MapViewScreen = () => {
  const [isOnline, setIsOnline] = useState(true);

  const handleMenuPress = () => {
    console.log('Menu is here');
  };

  const handleNotificationPress = () => {
    console.log('Notification is here');
  };

  return (
    <View style={styles.container}>
      {/* Map Image as Background */}
      <ImageBackground
        source={require("../../assets/images/mapView.jpg")}
        style={styles.mapImage}
      >
        {/* Buttons Container on Top of Map */}
        <View style={styles.topbuttonsContainer}>
          {/* Menu Icon */}
          <IconButton
            source={require('../../assets/icons/menu_icon.jpg')}
            onPress={handleMenuPress}
          />

          {/* Toggle Button */}
          <View style={styles.toggleContainer}>
            <Text
              style={[styles.toggleText, isOnline ? styles.activeText : styles.inactiveText]}
              onPress={() => setIsOnline(true)}
            >
              Online
            </Text>
            <Text
              style={[styles.toggleText, !isOnline ? styles.activeText : styles.inactiveText]}
              onPress={() => setIsOnline(false)}
            >
              Offline
            </Text>
          </View>

          {/* Notification Icon */}
          <IconButton
            source={require('../../assets/icons/notifi_icon.jpg')}
            onPress={handleNotificationPress}
          />
        </View>

        {/* Pick Container List in ScrollView */}
        <View style={styles.MainContainer}>
          <Text style={styles.pickheadingText}>MY Passengers</Text>
          <ScrollView 
            showsVerticalScrollIndicator={false} 
            contentContainerStyle={styles.scrollContent}
          >
            <PickContainer name="Ali Imran" phone="0342059976" onPress={() => console.log("Ali is here")} />
            <PickContainer name="Asad Khokar" phone="0342059976" onPress={() => console.log("Khokar is here")} />
            <PickContainer name="Shahab Awan" phone="0342059976" onPress={() => console.log("Shahab is here")} />
            <PickContainer name="Sara Khan" phone="0342059976" onPress={() => console.log("Sara is here")} />
            <PickContainer name="Hassan Raza" phone="0342059976" onPress={() => console.log("Hassan is here")} />
            <PickContainer name="Nida Fatima" phone="0342059976" onPress={() => console.log("Nida is here")} />
            <PickContainer name="Ahsan Ali" phone="0342059976" onPress={() => console.log("Ahsan is here")} />
            <PickContainer name="Zara Ahmed" phone="0342059976" onPress={() => console.log("Zara is here")} />
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

export default MapViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapImage: {
    flex: 1, 
    resizeMode: "cover",
    justifyContent: "flex-start",
  },
  topbuttonsContainer: {
    position: "absolute",
    top: hp("2.5%"),
    left: wp("7.5%"),
    right: wp("7.5%"),
    paddingVertical: hp("1.5%"),
    borderRadius: wp("2%"),
    flexDirection: "row",
    justifyContent: "space-between", 
    alignItems: "center",
  },
  toggleContainer: {
    flexDirection: "row",
    backgroundColor: colors.Toggle_Backgroun_color,
    borderRadius: wp("5%"),
    padding: wp("1%"),
    width: wp("40%"),
    height: hp("6%"),
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
  },
  toggleText: {
    flex: 1,
    fontSize: Size.onPress,
    fontFamily: 'Urbanist-Bold',
    textAlign: "center",
    paddingVertical: hp("1%"),
    borderRadius: wp("4%"),
  },
  activeText: {
    backgroundColor: colors.Active_Toggle_BG,
    color: colors.Active_Text,
  },
  inactiveText: {
    backgroundColor: colors.InActive_Toggle_BG,
    color: colors.InActive_Text,
  },
  MainContainer: {
    position: "absolute",
    top: hp("60%"),
    left: 0,
    right: 0,
    backgroundColor: colors.White,
    height: "50%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: wp("5%"),
    borderTopRightRadius: wp("7%"),
    borderTopLeftRadius: wp("7%"),
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: -hp("0.5%") },
    shadowOpacity: 0.3,
    shadowRadius: wp("4%"),
    elevation: 5,
  },
  pickheadingText: {
    fontSize: Size.Four,
    marginTop: hp("1%"),
    marginBottom: hp("1.5%"),
    fontFamily:"Urbanist-Bold"
  },
  scrollContent: {
    paddingBottom: hp("3%"), // Ensures some space at the bottom for better scrolling
  },
});
 