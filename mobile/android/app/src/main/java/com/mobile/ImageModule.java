package com.mobile;

import android.app.Activity;
import android.content.Intent;
import android.content.Context;
import android.util.Base64;
import android.net.Uri;
import android.content.ContentUris;
import android.os.Bundle;
import android.provider.DocumentsContract;
import android.provider.MediaStore;
import android.database.Cursor;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.util.Log;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.BaseActivityEventListener;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.io.ByteArrayOutputStream;
import java.util.HashMap;
import java.util.Map;


public class ImageModule extends ReactContextBaseJavaModule {
    private static final String TAG = "ImageModule";
    private static final int REQUEST_IMAGE_CAPTURE = 1;
    private static final int SELECT_PICTURE = 200;
    private Callback callback;
    private ReactApplicationContext reactContext;

    private final ActivityEventListener mActivityEventListener = new BaseActivityEventListener() {
        @Override
        public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {

            if (resultCode == Activity.RESULT_OK) {
                if (requestCode == REQUEST_IMAGE_CAPTURE) {
                    Bitmap bitmap = (Bitmap) data.getExtras().get("data");

                    // Convert the Bitmap into a byte array
                    ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
                    bitmap.compress(Bitmap.CompressFormat.JPEG, 100, byteArrayOutputStream);
                    byte[] byteArray = byteArrayOutputStream.toByteArray();

                    // Convert the byte array into a Base64 string
                    String encodedImage = Base64.encodeToString(byteArray, Base64.DEFAULT);

                    // Invoke the callback with the Base64 string
                    callback.invoke(encodedImage);
                } else if (requestCode == SELECT_PICTURE) {
                    Uri selectedImageUri = data.getData();
                    if (null != selectedImageUri) {
                        try {
                            Log.d(TAG, "Image URI: " + selectedImageUri);

                            // Get the image from data
                            Bitmap bitmap = MediaStore.Images.Media.getBitmap(reactContext.getContentResolver(), selectedImageUri);
                            Log.d(TAG, "Image URI: " + selectedImageUri);
                            // Convert the Bitmap into a byte array
                            ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
                            bitmap.compress(Bitmap.CompressFormat.JPEG, 100, byteArrayOutputStream);
                            byte[] byteArray = byteArrayOutputStream.toByteArray();

                            // Convert the byte array into a Base64 string
                            String encodedImage = Base64.encodeToString(byteArray, Base64.DEFAULT);
                            // Invoke the callback with the Base64 string
                            callback.invoke(encodedImage);
                        } catch (Exception e) {
                            Log.e(TAG, "Error getting image from gallery", e);
                            callback.invoke("Error getting image from gallery - " + e.getMessage());
                        }
                    } else {
                        Log.e(TAG, "Error getting image from gallery - null URI");
                        callback.invoke("Error getting image from gallery - null URI");
                    }
                }
            } else if (resultCode == Activity.RESULT_CANCELED) {
                callback.invoke("Image capture cancelled");
            }
        }
    };

    /**
     * Constructor
     *
     * @param context
     */
    public ImageModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
        reactContext.addActivityEventListener(mActivityEventListener);
    }

    /**
     * This method is used to pass module name to React Native
     * It is mandatory to override this method
     *
     * @return
     */
    @Override
    public String getName() {
        return "ImageModule";
    }

    /**
     * Launches the camera and stock callback to invoke when the user has taken a picture
     *
     * @param callback
     */
    @ReactMethod
    public void launchCamera(Callback callback) {
        Intent intent = new Intent("android.media.action.IMAGE_CAPTURE");
        Activity currentActivity = reactContext.getCurrentActivity();

        if (currentActivity != null) {
            //We save the callback to invoke it later when the user has taken a picture
            this.callback = callback;
            currentActivity.startActivityForResult(intent, REQUEST_IMAGE_CAPTURE);
        }
    }

    /**
     * Open the gallery and stock callback to invoke when the user has selected a picture
     */
    @ReactMethod
    public void openGallery(Callback callback) {
        Intent intent = new Intent("android.intent.action.PICK");
        intent.setType("image/*");
        Activity currentActivity = reactContext.getCurrentActivity();

        if (currentActivity != null) {
            //We save the callback to invoke it later when the user has selected a picture
            this.callback = callback;
            currentActivity.startActivityForResult(intent, SELECT_PICTURE);
        }
    }
}
