package com.nativeapi;

import android.Manifest;

import android.content.Context;
import android.content.pm.PackageManager;
import android.os.Build;
import android.support.annotation.RequiresApi;
import android.support.v4.content.ContextCompat;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import javax.annotation.Nonnull;

public class DeviceModule extends ReactContextBaseJavaModule {

    private Context context;

    public DeviceModule(@Nonnull ReactApplicationContext reactContext) {
        super(reactContext);
        this.context = reactContext;
    }

    @Nonnull
    @Override
    public String getName() {
        return "DeviceModule";
    }

    @ReactMethod
    public void getDeviceModel(Callback cb) {
        cb.invoke(null, Build.MODEL);
    }

    @RequiresApi(api = Build.VERSION_CODES.O)
    @ReactMethod
    public void getDeviceSerial(Callback cb) {
        if (ContextCompat.checkSelfPermission(this.context, Manifest.permission.READ_PHONE_STATE)
                != PackageManager.PERMISSION_GRANTED) {
            return;
        }
        cb.invoke(null, Build.getSerial());
    }

    @ReactMethod
    public void getDeviceManufactured(Callback cb){
        cb.invoke(null, Build.MANUFACTURER);
    }

    @ReactMethod
    public void getDeviceId(Callback cb){
        cb.invoke(null, Build.ID);
    }
}
