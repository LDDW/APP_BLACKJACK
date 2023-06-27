import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {NativeModules} from 'react-native';
const {ImageModule} = NativeModules;
//
// function takePhoto() {
//     return new Promise((resolve, reject) => {
//         resolve(ImageModule.launchCamera());
//     }, (error) => {
//         reject(error);
//     });
// }
//
// export {
//     takePhoto,
// }
