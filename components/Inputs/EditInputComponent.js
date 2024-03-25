import React from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import {AppColors} from '../../constants/constants.js';

export default function EditTextComponent({placeholder, name, customStyling}) {
  return (
    <TextInput
      style={styles.inputField}
      placeholder={placeholder}
      placeholderTextColor={AppColors.mainBackgroundColor}
    />
  );
}

const styles = StyleSheet.create({
  inputField: {
    flex: 1,
    color: AppColors.mainBackgroundColor,
    borderColor: AppColors.mainBackgroundColor,
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
    textAlignVertical: 'top',
  },
});
