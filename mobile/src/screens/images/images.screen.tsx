import {IRootStackProps} from "../../navigator/stack.navigator";
import {
    NativeModules,
    Button,
    Alert,
    Text,
    Image,
} from "react-native";
import {useState} from "react";

const {ImageModule} = NativeModules;
import {PermissionsAndroid} from 'react-native';

// @ts-ignore
const LaunchCamera = ({ setImage }) => {
    const onPress = async () => {
        try {
        /* Ask for permissions before launching the camera */
            const granted = await PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.CAMERA,
            ]);

            console.log('Camera permission result:', granted['android.permission.CAMERA']);

            if (granted['android.permission.CAMERA'] === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use the camera');
                // If permissions are granted, do some logic (launch camera, etc)
                ImageModule.launchCamera((result: any) => {
                    console.log(result);
                    setImage(result);
                });
            } else {
                console.log('Camera permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };
    return (
        <Button title={"Prendre une photo"} onPress={onPress}/>
    )
}

// @ts-ignore
const OpenGallery = ({ setImage }) => {
    const onPress = async () => {
        try {
            ImageModule.openGallery((result: any) => {
                console.log(result);
                setImage(result);
            });
        } catch (err) {
            console.warn(err);
        }
    };
    return (
        <Button title={"Ouvrir la galerie"} onPress={onPress}/>
    )
}

const ImagesScreen = ({navigation}: IRootStackProps<'Images'>) => {
    const [base64Image, setBase64Image] = useState(null);

    return (
        <>
            {base64Image && (
                <Image
                    style={{width: 200, height: 200}}
                    source={{uri: `data:image/jpeg;base64,${base64Image}`}}
                />
            )}
            <LaunchCamera setImage={setBase64Image}/>
            <OpenGallery setImage={setBase64Image}/>
            {/*<Button title={'Importer une photo'} onPress={handleImportPhoto} />*/}
            <Button title={"Sauvegarder"}/>
        </>
    )
}

export default ImagesScreen
