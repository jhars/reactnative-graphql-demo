import {StyleSheet} from 'react-native';

// Other Color Options:
  // 'steelblue',
	// 'darkblue',
  // 'rgba(90 130 156 / 1.0)',
	// 'midnightblue',
// Text Color:
		// 'aliceblue',

// JH-NOTE on actionButton:
// typically, an actionButton is not in a list, 
// so it loses 5 PADDING points, from container,
// which is why we add 5 MARGIN points to actionButton
// but not prim/sec buttons

export const ButtonStyles = StyleSheet.create({

	primaryButton: {
	  backgroundColor: 'rgba(146 212 230 / 1.0)',
	  height: 35,
	  alignItems: "center",
	  justifyContent: "center",
	  borderRadius: 20,
	},
	primaryButtonText: {
	  color: 'rgba(18 27 40 / 1.0)',
	  fontSize: 16,
	  fontWeight: "bold",
	},

	secondaryButton: {
		backgroundColor: 'rgba(28 78 167 / 1.0)',
		height: 35,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 20,
	},
	secondaryButtonText: {
		color: 'aliceblue',
		fontSize: 16,
		fontWeight: "bold"
	},

  actionButton: {
    backgroundColor: 'rgb(81,87,81)',
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    margin: 5
  },
  actionButtonText: {
    color: 'aliceblue',
    fontSize: 16,
    fontWeight: "bold",
    // fontVariant: 'small-caps'
  }
});
