import {IRootStackProps} from "../../navigator/stack.navigator";
import {takePhoto, importPhoto} from "../../utils/images.utils";
import {
	Button,
	Alert, Text, Image,
} from "react-native";
import {useState} from "react";

const ImagesScreen = ({ navigation }: IRootStackProps<'Images'>) => {
	const [base64Image, setBase64Image] = useState(null);
	const handleTakePhoto = async () => {
		try {
			const image = await takePhoto();

			// DO SOMETHING WITH THE IMAGE
			console.log(image);
			// @ts-ignore
			setBase64Image(image);
		} catch (error) {
			console.log(error);
		}
	}
    const handleImportPhoto = async () => {
        try {
            const image = await importPhoto();

            // DO SOMETHING WITH THE IMAGE
            console.log(image);
            // @ts-ignore
            setBase64Image(image);
        } catch (error) {
            console.log(error);
        }
    }
	return (
		<>
			{base64Image && (
				<Image
					style={{ width: 200, height: 200 }}
					source={{ uri: `data:image/jpeg;base64,${base64Image}` }}
				/>
			)}
			<Button title={'Prendre une photo'} onPress={handleTakePhoto} />
			<Button title={'Importer une photo'} onPress={handleImportPhoto} />
			<Button title={"Sauvegarder"}/>
		</>
	)
}

export default ImagesScreen
