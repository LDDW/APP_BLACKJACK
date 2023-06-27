/**
 * Détection du téléphone si rotation portrait ou landscape
 */
import {useEffect, useState} from "react";
import {Dimensions} from "react-native";

const useRotation = () => {
	const [orientation, setOrientation] = useState<string>('PORTRAIT')

	useEffect(() => {
		Dimensions.addEventListener('change', ({window:{width,height}})=>{
			if (width<height) {
				setOrientation('PORTRAIT')
			} else {
				setOrientation('LANDSCAPE')

			}
		})

	}, []);

	return orientation
}

export default useRotation
