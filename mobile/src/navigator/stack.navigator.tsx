import {createNativeStackNavigator, NativeStackScreenProps} from "@react-navigation/native-stack";
import ChatScreen from "../screens/chat/chat.screen";

/**
 * Navigateur React Native
 * Voir la doc : https://reactnavigation.org/docs/native-stack-navigator
 * AVANT DE DÉCLARER UN SCREEN DANS LE STACK :
 * - Ajouter le nom du screen dans le type IRootParamsList avec la valeur "undefined"
 * - Ca permet d'accéder à l'instance de navigation dans chaque screen
 * - Un exemple de screen pour naviguer entre deux screens :
 * 			const ChatScreen = ({ navigation }: IRootStackProps<'Chat'>) => {
 * 				return (
 * 					<Pressable onPress={() => navigation.navigate('Home')}>
 *
 *					</Pressable>
 * 				)
 * 			}
 */

type IRootParamsList = {
	// Ajouter ici le nom des screens
	Chat: undefined
}

const Stack = createNativeStackNavigator<IRootParamsList>();

const StackNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Group>
				<Stack.Screen name="Chat" options={{headerShown: false}} component={ChatScreen}/>
			</Stack.Group>
		</Stack.Navigator>
	)
}

export default StackNavigator
export type IRootStackProps<T extends keyof IRootParamsList> = NativeStackScreenProps<IRootParamsList, T>;
