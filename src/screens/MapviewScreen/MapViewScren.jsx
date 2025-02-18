import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import CustomMapView from "../../components/customMapView";
import IconButton from "../../components/iconButton";
import PickContainer from "../../components/pickContainer";
import colors from '../../Thems/AppColors/AppColors';
import Size from '../../Thems/FontSize/FontSize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const MapViewScreen = () => {
  const [isOnline, setIsOnline] = useState(true);

  const handleMenuPress = () => console.log('Menu is here');
  const handleNotificationPress = () => console.log('Notification is here');

  ////////////////////////////////////////////////////////////////// Coordinates for Karachi, Pakistan
  const karachiCoordinates = {
    latitude: 24.8607,
    longitude: 67.0011,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  //////////////////////////////////////////////////////////////////// Define boundaries for Karachi
  const karachiBoundaries = {
    minLatitude: 24.75,
    maxLatitude: 24.95,
    minLongitude: 66.85,
    maxLongitude: 67.15,
  };

  // Sample multiple passenger coordinates (For now, static)
  const passengerLocations = [
    { latitude: 24.865, longitude: 67.002 }, // Passenger 1
    { latitude: 24.870, longitude: 67.010 }, // Passenger 2
    { latitude: 24.850, longitude: 67.015 }, // Passenger 3
     { latitude: 24.870, longitude: 67.020 }, // Passenger 3
      { latitude: 24.850, longitude: 67.025 }, // Passenger 3
       { latitude: 24.8980, longitude: 67.035 }, // Passenger 3
  ];

  ////////////////////////////////////////////////////////////////////handle region change complete
  const handleRegionChangeComplete = (region) => {
    if (
      region.latitude < karachiBoundaries.minLatitude || region.latitude > karachiBoundaries.maxLatitude ||
      region.longitude < karachiBoundaries.minLongitude || region.longitude > karachiBoundaries.maxLongitude
    ) {
      console.log("Out of Karachi boundaries, resetting position");
    }
  };

  return (
    <View style={styles.container}>
      {/* Reusable Map Component */}
      <CustomMapView 
        initialRegion={karachiCoordinates} 
        onRegionChangeComplete={handleRegionChangeComplete} 
        markerTitle="Karachi, Pakistan"
        markerDescription="This is Karachi!"
        driverLocation={karachiCoordinates} // Pass driver location to map
        passengerLocations={passengerLocations} // Pass passenger locations to map
      />

      {/* Buttons on Top */}
      <View style={styles.topbuttonsContainer}>
        <IconButton source={require('../../assets/icons/menu_icon.jpg')} onPress={handleMenuPress} />
        
        <View style={styles.toggleContainer}>
          <Text style={[styles.toggleText, isOnline ? styles.activeText : styles.inactiveText]} onPress={() => setIsOnline(true)}>Online</Text>
          <Text style={[styles.toggleText, !isOnline ? styles.activeText : styles.inactiveText]} onPress={() => setIsOnline(false)}>Offline</Text>
        </View>

        <IconButton source={require('../../assets/icons/notifi_icon.jpg')} onPress={handleNotificationPress} />
      </View>

      {/* Passenger List */}
      <View style={styles.MainContainer}>
        <Text style={styles.pickheadingText}>MY Passengers</Text>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          {passengerLocations.map((passenger, index) => (
            <PickContainer 
              key={index} 
              name={`Passenger ${index + 1}`} 
              phone={`03420599${index + 1}`} 
              onPress={() => console.log(`Passenger ${index + 1} is here`)} 
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default MapViewScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontFamily: "Urbanist-Bold",
  },
  scrollContent: {
    paddingBottom: hp("3%"),
  },
});

