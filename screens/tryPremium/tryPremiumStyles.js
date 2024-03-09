'use strict';

const {StyleSheet} = require('react-native');
const {AppColors} = require('../../constants/constants');

const premiumScreenStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: AppColors.mainBackgroundColor,
  },
  innerTop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 20,
  },
  innerMiddle: {
    flex: 4,
    alignItems: '',
    paddingHorizontal: 20,
  },
  innerBottom: {
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  appNameText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: AppColors.white,
  },
  imageTop: {
    resizeMode: 'contain',
  },
  tryPremiumText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: AppColors.white,
  },
  featureListContainer: {
    flexDirection: 'row',
    padding: 5,
    gap: 10,
  },
  featureListText: {
    color: AppColors.white,
    fontSize: 15,
  },

  premiumPricingmain: {
    backgroundColor: AppColors.white,
    height: 100,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 10,
  },

  pricingText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});

module.exports = premiumScreenStyles;
