'use strict';
const {StyleSheet} = require('react-native');
const {AppColors} = require('../../constants/constants');

const InputStyles = StyleSheet.create({
  inputMainContainer: {
    flexDirection: 'row',
    borderColor: AppColors.mainBackgroundColor,
    borderWidth: 1,
    borderRadius: 50,
    alignItems: 'center',
    paddingLeft: 10,
  },
  inputField: {
    flex: 1,
    color: AppColors.mainBackgroundColor,
    marginLeft: 10,
  },
});

module.exports = InputStyles;
