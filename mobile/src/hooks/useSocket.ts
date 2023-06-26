import Ws from "../services/socket";
import {useCallback, useRef} from "react";


const useSocket = () => {
	const { current: socket } = useRef(Ws)

	const handleEmit = useCallback((event: string, datas?: object | string | number) => {
		socket.emit(event, datas)
	}, [])

	const onEvent = useCallback((event: string, callback: () => void) => {
		socket.on(event, callback)

		return () => {
			socket.removeListener(event, callback)
		}
	}, [])

	return {
		handleEmit, onEvent
	}
}

export default useSocket
