import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  pointText: {
    color: '$primaryBlue',
    fontSize: 26,
    marginTop: 24,
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  subText: {
    color: '$tagColor',
    fontSize: 8,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 5,
  },
  iconsWrapper: {
    marginVertical: 32,
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  iconWrapper: {
    marginHorizontal: 16,
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
    backgroundColor: '$primaryGrayBackground',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButton: {
    marginTop: 3,
    marginLeft: 1,
  },
  activeIconWrapper: {
    backgroundColor: '$primaryBlue',
  },
  activeIcon: {
    color: '$white',
  },
  icon: {
    fontSize: 24,
    color: '$primaryDarkText',
  },
  badge: {
    position: 'absolute',
    right: -9,
    top: 20,
    backgroundColor: '$primaryBlue',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99,
    padding: 2,
    height: 12,
    minWidth: 18,
    borderRadius: 12 / 2,

  },
  badgeText: {
    fontSize: 8,
    color: '$white',
    fontWeight: '600',
  },
  activeBadge: {
    backgroundColor: '$black',
  },
  listWrapper: {
    marginHorizontal: 8,
  },
  mainButton: {
    marginVertical: 8,
    alignSelf: 'center',
    paddingHorizontal: 24,
  },
  mainButtonWrapper: {
    flexDirection: 'row',
  },
  unclaimedText: {
    color: '$primaryBackgroundColor',
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  mainIconWrapper: {
    backgroundColor: '$primaryBackgroundColor',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginLeft: 20,
    width: 24,
    height: 24,
  },
  scrollContainer: {
    flex: 1,
  },
});
