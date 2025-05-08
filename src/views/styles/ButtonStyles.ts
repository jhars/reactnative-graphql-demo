import {StyleSheet} from 'react-native';

export const ButtonStyles = StyleSheet.create({

	primaryButton: {
	  // flex: 1,
	  // backgroundColor: 'steelblue',
	  // backgroundColor: 'rgba(90 130 156 / 1.0)',
	  backgroundColor: 'rgba(146 212 230 / 1.0)',
	  height: 35,
	  alignItems: "center",
	  justifyContent: "center",
	  borderRadius: 20,
	},
	primaryButtonText: {
	  // color: 'aliceblue',
	  color: 'rgba(18 27 40 / 1.0)',
	  fontSize: 16,
	  fontWeight: "bold",
	  marginLeft: 25
	},

	secondaryButton: {
		// flex: 1,
		// backgroundColor: 'darkblue',
		backgroundColor: 'rgba(28 78 167 / 1.0)',
		height: 35,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 20,
	},
	secondaryButtonText: {
		color: 'aliceblue',
		fontSize: 16,
		fontWeight: "bold",
		marginLeft: 25
	},

  actionButton: {
    backgroundColor: 'midnightblue',
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  actionButtonText: {
    color: 'aliceblue',
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingRight: 20,
    // fontVariant: 'small-caps'
  }
});
