package com.toastmodule;

import android.os.Build;
import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import javax.annotation.Nonnull;

public class DeviceModule extends ReactContextBaseJavaModule {

    public DeviceModule(@Nonnull ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Nonnull
    @Override
    public String getName() {
        return "Device";
    }

    @ReactMethod
    public void getDeviceName(Callback cb) {
        cb.invoke(null, Build.MODEL);
    }
}
