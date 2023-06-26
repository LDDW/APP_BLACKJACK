import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

async function takePhoto() {
    return new Promise((resolve, reject) => {
        launchCamera(
            {
                mediaType: 'photo',
                includeBase64: true,
                maxHeight: 200,
                maxWidth: 200,
            },
            (response) => {
                if (response.didCancel) {
                    reject('User cancelled image picker');
                } else if (response.errorCode == 'camera_unavailable') {
                    reject('Camera not available on device');
                } else if (response.errorCode == 'permission') {
                    reject('Permission not satisfied');
                } else if (response.errorCode == 'others') {
                    reject(response.errorMessage);
                } else {
                    // @ts-ignore
                    let base64Image = response.assets[0].base64;
                    resolve(base64Image);
                }
            },
        );
    });
}

async function importPhoto() {
    return new Promise((resolve, reject) => {
        launchImageLibrary(
            {
                mediaType: 'photo',
                includeBase64: true,
                maxHeight: 200,
                maxWidth: 200,
            },
            (response) => {
                if (response.didCancel) {
                    reject('User cancelled image picker');
                } else if (response.errorCode == 'permission') {
                    reject('Permission not satisfied');
                } else if (response.errorCode == 'others') {
                    reject(response.errorMessage);
                } else {
                    // @ts-ignore
                    let base64Image = response.assets[0].base64;
                    resolve(base64Image);
                }
            },
        );
    });
}

export {
    takePhoto,
    importPhoto,
}
