import {IRootStackProps} from "../../navigator/stack.navigator";
import {FlatList, KeyboardAvoidingView, Platform, StatusBar, View} from "react-native";
import styles from "./styles";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import Message from "./Message";
import Composer from "./Composer";
import {useCallback, useEffect, useState} from "react";
import {UserProps} from "../../types/chat";
import useSocket from "../../hooks/useSocket";
import datas from "../../../datas";
import useRotation from "../../hooks/useRotation";

const ChatScreen = ({}: IRootStackProps<'Chat'>) => {
	const [user, setUser] = useState<UserProps[]>([]);
	const [currentUser] = useState({ user_id: 17 })
	const { handleEmit } = useSocket()
	const insets = useSafeAreaInsets()
	const orientation = useRotation()

	const handleChat = useCallback( () => {
		handleEmit('newUser', { name: 'nom', firstname: 'prénom', avatar: 'avatar.jpg' })
		handleEmit('joinRoom', 'name-room')

		setUser(datas)
	}, [])

	useEffect(() => handleChat(), [handleChat]);

	return (
		<View style={[styles.container, { flex: 1, paddingTop: insets.top }]}>
			<KeyboardAvoidingView behavior={undefined} contentContainerStyle={{justifyContent: 'space-between'}} style={{flex: 1}}>
				<View style={styles.box}>
					<FlatList data={user} extraData={user} keyExtractor={(item) => item.id.toString()}
										inverted contentContainerStyle={{flexGrow: 1}} renderItem={({item, index}) => (
						<Message key={index} item={item} currentUser={currentUser}/>
					)}/>
				</View>
				<Composer user={user} setUser={setUser}/>
			</KeyboardAvoidingView>
		</View>
	)
}

export default ChatScreen
