import React from 'react';
import { TextInput } from 'react-native-paper';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../Thems/AppColors/AppColors';

const CustomInput = ({ placeholder, value, onChangeText, secureTextEntry, keyboardType, style }) => {
  return (
    <TextInput
      mode="outlined"
      theme={{
        roundness: 12,
        colors: {
          background: colors.Input_background,
          primary: "#C6C6C6",
          outline: "#C6C6C6",
        },
      }}
      placeholder={placeholder}
      placeholderTextColor="#3C3C3C80"
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      style={[style, { width: '100%' }]}
      contentStyle={{ height: hp("5%") }}
    />
  );
};

export default CustomInput;
