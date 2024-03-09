import {StyleSheet} from 'react-native';
import {AppColors} from '../../constants/constants';

const headerStylesheet = StyleSheet.create({
  main: {
    backgroundColor: AppColors.mainBackgroundColor,
    paddingHorizontal: 10,
    paddingVertical: 13,
    gap: 7,
  },
  innercontainer: {
    flexDirection: 'row',
  },
  headerTitle: {
    color: AppColors.white,
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 60,
  },
  headerButtonWrapper: {
    backgroundColor: '#ffff',
    height: 39,
    borderRadius: 10,
    gap: 10,
    paddingLeft: 2,
    paddingRight: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerButton: {
    flex: 1,
    borderRadius: 7,
    height: 35,
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerButtonText: {
    fontSize: 15,
  },
});

module.exports = headerStylesheet;
