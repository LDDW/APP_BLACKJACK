import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	box: {
		padding: 10,
		flex: 9
	},
	message: {
		flex: 1,
		avatar: {
			height: 45,
			width: 45,
			borderRadius: 100,
		},
		textContainer: {
			borderRadius: 15,
			paddingVertical: 9,
			paddingHorizontal: 13,
			flex: .65,
		},
		text: {
			color: '#fff'
		}
	},
	composer: {
		backgroundColor: '#208127',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 10,
		paddingTop: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 12,
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.00,
		elevation: 24,
		input: {
			backgroundColor: '#fff',
			height: 40,
			width: 290,
			paddingVertical: 10,
			paddingHorizontal: 15,
			borderRadius: 30,
			borderColor: '#c9c8c5',
			borderWidth: 1,
		},
		button: {
			width: 50,
			height: 40,
		},
	},
})

export default styles
