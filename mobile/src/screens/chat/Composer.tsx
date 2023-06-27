import {Pressable, TextInput, View} from "react-native";
import styles from "./styles";
import React, {SetStateAction, useRef, useState} from "react";
import Svg, {Path} from "react-native-svg";
import {UserProps} from "../../types/chat";
import useSocket from "../../hooks/useSocket";

const Composer = (props: { setUser: React.Dispatch<SetStateAction<UserProps[]>>, user: UserProps[] }) => {
	const [message, setMessage] = useState('')
	const inputRef = useRef() as React.MutableRefObject<TextInput>
	const { handleEmit } = useSocket()

	const handleSubmit = () => {
		const currentUser = {
			id: 10,
			user_id: 17,
			username: 'Bernard',
			avatar: 'https://i.pravatar.cc/300?img='+17,
			message: message
		}
		handleEmit('save', currentUser)
		props.setUser((prevState) => [currentUser, ...prevState ])
		inputRef.current && inputRef.current.clear()
	}

	return (
		<View style={styles.composer}>
			<TextInput ref={inputRef} style={styles.composer.input} placeholder="Entrer votre message..." onChangeText={(text) => setMessage(text)}/>
			<Pressable style={styles.composer.button} onPress={handleSubmit}>
				<Svg viewBox="0 0 24 24" height={40} width={40}>
					<Path fill="#fff" d="M21,3.92,15,20.67a.5.5,0,0,1-.47.33h-.16a.51.51,0,0,1-.46-.29l-2.36-5a2,2,0,0,1,.34-2.21l3-3.28a.5.5,0,0,0,0-.69l-.38-.38a.5.5,0,0,0-.69,0l-3.28,3a2,2,0,0,1-2.21.34l-5-2.36A.51.51,0,0,1,3,9.67V9.51A.5.5,0,0,1,3.33,9L20.08,3a.5.5,0,0,1,.52.11l.26.26A.5.5,0,0,1,21,3.92Z"/>
				</Svg>
			</Pressable>
		</View>
	)
}

export default Composer
