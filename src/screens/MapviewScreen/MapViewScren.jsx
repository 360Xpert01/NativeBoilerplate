import React from "react";
import { View, StyleSheet, ImageBackground, Text } from "react-native";
import IconButton from "../../components/iconButton";

const MapViewScreen = () => {
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
          <IconButton
            source={require('../../assets/icons/notifi_icon.jpg')}
            onPress={handleNotificationPress}
          />
        </View>

        {/* Pick Container below the Top Buttons */}
        <View style={styles.MyContainer}>
         <Text style={styles.pickheadingText}>MY Passengers</Text>
         <View style={styles.pickContainer}>
          <Text>
            Ali imran (0342059976)
          </Text>
          <View style={styles.pickbutton}>

          </View>
         </View>
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
    top: 21,
    left: 27,
    right: 27,
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between", // Ensure space between the images
    alignItems: "center",
    height: 60,
    zIndex: 10,
  },
MyContainer: {
    position: "absolute",
    top: 450,
    left: 0,
    right: 0,
    backgroundColor: "white",
    height: "50%", // Adjust height based on requirement
    justifyContent: "flex-start", // Start content from the top
    alignItems: "flex-start", // Align text to the left
    padding: 20, // Maintain padding for spacing
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 5,
  },
  pickheadingText: {
    fontSize: 20,
    fontWeight: "bold",
    margintop: 10,
    marginBottom:10
  },
 pickContainer:{
  height:45,
  width:"100%",
  backgroundColor:"#F1F1F1",
  padding:10,
  borderRadius:12,
  borderColor:'#C6C6C6',
  borderWidth:1,
  flexDirection:"row",
   alignItems: "",
 },
 passengerName: {
  fontFamily: "Urbanist", 
  fontSize: 16,
  fontWeight: "400",  
  color: "#3C3C3C",  
},
pickbutton:{
  height:35,
  width:77,
  backgroundColor:"#3C3C3C"
}
  
});

