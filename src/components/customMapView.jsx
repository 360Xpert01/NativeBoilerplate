

import React, { useRef, useEffect } from "react";
import { StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from "react-native-maps";

const CustomMapView = ({ 
  initialRegion, 
  onRegionChangeComplete, 
  markerTitle, 
  markerDescription, 
  driverLocation, 
  passengerLocations 
}) => {
  const mapRef = useRef(null);

  // Draw routes to all passengers when component loads or when locations change
  useEffect(() => {
    if (mapRef.current && passengerLocations.length > 0) {
      const allCoordinates = [driverLocation, ...passengerLocations];
      mapRef.current.fitToCoordinates(allCoordinates, {
        edgePadding: { top: 50, right: 50, bottom: 250, left: 50 },
        animated: true,
      });
    }
  }, [driverLocation, passengerLocations]);

  // Function to generate a random color for each route
  const getRouteColor = (index) => {
    const colors = ['#FF0000', '#0000FF', '#00FF00', '#FF00FF', '#FFA500'];
    return colors[index % colors.length];
  };

  return (
    <MapView
      ref={mapRef}
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      initialRegion={initialRegion}
      minZoomLevel={10}
      maxZoomLevel={15}
      scrollEnabled={true}
      zoomEnabled={true}
      onRegionChangeComplete={onRegionChangeComplete}
    >
      {/* Driver Marker */}
      <Marker 
        coordinate={driverLocation} 
        title={markerTitle} 
        description={markerDescription}  
        image={require("../assets/icons/Frame.png")} 
      />
      
      {/* Passenger Markers */}
      {passengerLocations.map((location, index) => (
        <Marker 
          key={index} 
          coordinate={location} 
          title={`Passenger ${index + 1}`} 
          description={`This is passenger ${index + 1}`} 
          image={require("../assets/icons/passenger.png")} 
        />
      ))}
      
      {/* Polylines for each route */}
      {passengerLocations.map((location, index) => {
        const routeCoordinates = generateRoutePoints(driverLocation, location);
        
        return (
          <Polyline
            key={index}
            coordinates={routeCoordinates}
            strokeColor={getRouteColor(index)}
            strokeWidth={5}
            lineDashPattern={[5]}
          />
        );
      })}
    </MapView>
  );
};

// Helper function to generate intermediate points for a more realistic route appearance
const generateRoutePoints = (start, end) => {
  // Calculate midpoint with slight randomization for natural curve
  const midLat = (start.latitude + end.latitude) / 2;
  const midLng = (start.longitude + end.longitude) / 2;
  
  // Add some random offset to create natural-looking routes
  const latOffset = (Math.random() - 0.5) * 0.01;
  const lngOffset = (Math.random() - 0.5) * 0.01;
  
  const midPoint = {
    latitude: midLat + latOffset,
    longitude: midLng + lngOffset
  };
  
  // Generate a curved path with the midpoint
  return [
    start,
    midPoint,
    end
  ];
};

export default CustomMapView;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});