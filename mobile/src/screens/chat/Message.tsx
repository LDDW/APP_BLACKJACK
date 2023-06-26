import {Image, Text, View} from "react-native";
import {UserProps} from "../../types/chat";
import styles from "./styles";

const Message = ({ item, currentUser }: { item: UserProps, currentUser: { user_id: number } }) => {
	const isCurrentUser = item.user_id === currentUser.user_id

	return (
		<View style={{ flexDirection: isCurrentUser ? 'row-reverse' : 'row', alignItems: 'center', marginBottom: 10 }}>
			<Image source={{uri: item.avatar+'?img='+item.user_id}} resizeMode="cover" style={[styles.message.avatar, isCurrentUser ? { marginLeft: 10 } : { marginRight: 10 }]}/>
			<View style={[styles.message.textContainer, { backgroundColor: isCurrentUser ? '#208127' : '#484f5b' }]}>
				<Text style={[styles.message.text, isCurrentUser ? { textAlign: 'right' } : { textAlign: 'left' }]}>{ item.message }</Text>
			</View>
		</View>
	)
}

export default Message
