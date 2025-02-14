// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import { loginUser } from '../../Redux/slices/authSlice';
// import { useNavigation } from '@react-navigation/native';
// import { TextInput} from 'react-native-paper';  // Import TextInput from react-native-paper
// import TextSizes from '../../Thems/FontSize/FontSize';
// import colors from '../../Thems/AppColors/AppColors';

// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// const LoginScreen = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
//   const dispatch = useDispatch();
//   const navigation = useNavigation();


//   return (
//     <View style={styles.container}>
//       <TouchableOpacity>
//         <View style={styles.languagContaier}>
//           <Text style={styles.languagText}>Eng</Text>
//           <Image source={require("../../assets/icons/global.png")} style={styles.image} />
//         </View>
//       </TouchableOpacity>

//       <View style={styles.MyColumn}>
//         <Text style={styles.logoText}>LOGO</Text>
//         <Text style={styles.logodescription}>Your One-Stop solution for Effortless tracking System.</Text>
        
//         {/* Email TextInput */}
//         <TextInput
//           label="Email*"
//           value={email}
//           onChangeText={(text) => setEmail(text)}
//           style={styles.input}
//           keyboardType="email-address"
//           mode="outlined"
//          activeOutlineColor="#969696"
//          outlineColor="#E0E0E0"
//           placeholder="info@xyz.com"
//         />
        
//         {/* Password TextInput */}
//         <TextInput
//           label="Password*"
//           value={password}
//           onChangeText={(text) => setPassword(text)}
//           style={styles.input}
//           secureTextEntry={!isPasswordVisible}
//           mode="outlined"
//           activeOutlineColor="#969696"
//           outlineColor="#E0E0E0"
//           placeholder="Enter your password"
     
 
//         />

//         {/* Login Button */}
//      <TouchableOpacity style={styles.loginButton} onPress={()=>navigation.navigate ("MapView")}>
//         <Text style={styles.buttonText}>Login</Text>
//      </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default LoginScreen;

// const styles = StyleSheet.create({
//  container: {
//   flex: 1,
//   backgroundColor: colors.App_Background_Color,
//   paddingVertical: wp('6%'),
//   paddingHorizontal: wp('6%'), 
// },
//   languagContaier: {
//     height: hp('3.2%'),
//     width: wp("16%"),
//     backgroundColor: '#f8f9fa',
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: 'row',
//     borderRadius: 5,
//     marginTop: hp('5%'),
//     marginLeft: 'auto',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 15,
//     elevation: 5,
//   },
//   languagText: {
//     color: colors.Gray,
//    fontFamily: 'Urbanist-Bold',
//     fontSize: TextSizes.fontTwo,
//     fontWeight: '500',
//     marginRight: wp('2%'),
//   },
//   image: {
//     width: wp("5%"),
//     height: wp("5%"),
//     resizeMode: 'contain',
//   },
//   MyColumn: {
//     paddingTop: hp("20%"),
//     alignItems: 'flex-start',
//     justifyContent: 'flex-start',
//     width: '100%',
//   },
//   logoText: {
//     color: "#A3A3A3",
//     fontSize: TextSizes.logo,
//    fontFamily: 'Urbanist-Bold',
//     fontWeight: '700',
//   },
//   logodescription: {
//     color: colors.Logo_Description,
//     fontSize: TextSizes.fontThree,
//     textAlign: 'left',
//     marginTop: hp("2%"),
//     fontWeight: '400',
//     fontFamily: 'Urbanist-Bold',
//   },
//   input: {
//     marginBottom: ("4%"),
//     width: '100%',
//     top:("8%"),
//     backgroundColor: colors.Input_background
//   },
// loginButton: {
//   marginTop: hp("5%"),
//   backgroundColor: '#969696',
//   width: "100%",
//   height: hp("6%"),
//   justifyContent: "center",
//   alignItems: "center", 
//   borderRadius: 5,
//   shadowColor: '#000000',  
//   shadowOffset: { width: 0, height: 8 },   
//   shadowOpacity: 0.1,
//   shadowRadius: 15,  
//   elevation: 5,
// },

// buttonText: {
//   color: colors.White, 
//   fontSize: TextSizes.fontFour, 
//   fontWeight: '600', 
//   textAlign: 'center', 
//   fontFamily: 'Urbanist-Bold',
// }
// });
 import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'; // Import the package
import CustomInput from '../../components/cusotmInput';

import colors from '../../Thems/AppColors/AppColors';
import TextSizes from '../../Thems/FontSize/FontSize';

const LoginScreen = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      resetScrollToCoords={{ x: 0, y: 0 }} // Resets the scroll to top when keyboard is dismissed
      scrollEnabled={true} // Enables scrolling
      keyboardShouldPersistTaps="handled" // Makes sure taps outside of text fields work properly
    >
      <View style={styles.MyColumn}>
        <Text style={styles.logoText}>LOGO</Text>
        <Text style={styles.logodescription}>
          Your One-Stop solution for Effortless tracking System.
        </Text>

         {/* Phone Number Input */}
        <CustomInput
          placeholder="Phone Number"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          style={styles.input}
        />

        {/* Password Input */}
        <CustomInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />

        {/* Login Button */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('MapView')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.App_Background_Color,
    paddingHorizontal: wp('6%'),
  },
  MyColumn: {
    paddingTop: hp('25%'),
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  logoText: {
    color: "#A3A3A3",
    fontSize: TextSizes.logo,
    fontFamily: 'Urbanist-Bold',
    fontWeight: '700',
  },
  logodescription: {
    color: colors.Logo_Description,
    fontSize: TextSizes.fontThree,
    textAlign: 'left',
    marginTop: hp('2%'),
    fontWeight: '400',
    fontFamily: 'Urbanist-Bold',
  },
  input: {
    width: '100%',
    marginTop: hp('2%'),
    backgroundColor: colors.Input_background,
  },
  loginButton: {
    marginTop: hp('4%'),
    backgroundColor: '#3C3C3C',
    width: '100%',
    height: hp('6%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 5,
  },
  buttonText: {
    color: colors.White,
    fontSize: TextSizes.fontFour,
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'Urbanist-Bold',
  },
});