'use strict';

import {NativeModules, Platform, PermissionsAndroid } from 'react-native';
const apkManagerModule = NativeModules.ApkManagerModule;

export function uninstallApk(packageName) {
  if (Platform.OS === 'android') {
    apkManagerModule.uninstallApk(packageName);
  }
}

export function installApk(filePath) {
  if (Platform.OS === 'android') {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE).then((data) => {
        if (data === 'granted') {
          apkManagerModule.installApk(filePath);
        } else {
          alert('授权被拒绝');
        }
    }).catch((err) => {
      alert('获取授权失败');
    });
  }
}

export function isExpChannel(packageName, metaDataName, channel) {

  if (Platform.OS === 'android') {
    return new Promise((resolve, reject) => {
      apkManagerModule.isExpChannel(packageName, metaDataName, channel).then((data)=>{
        resolve(data);
      }).catch((error)=>{
        reject(error);
      });
    });
  }

}

export function isExpChannels(packageNames, metaDataNames, channels) {

  if (Platform.OS === 'android') {
    return new Promise((resolve, reject) => {
      apkManagerModule.isExpChannels(packageNames, metaDataNames, channels).then((data)=>{
        resolve(data);
      }).catch((error)=>{
        reject(error);
      });
    });
  }

}

export function openApk(packageName) {
  if (Platform.OS === 'android') {
    apkManagerModule.openApk(packageName);
  }
}

export function isAppInstalled(packageName) {

  if (Platform.OS === 'android') {
    return new Promise((resolve, reject) => {
      apkManagerModule.isAppInstalled(packageName).then((data)=>{
        resolve(data);
      }).catch((error)=>{
        reject(error);
      });
    });
  }

}

export function isAppsInstalled(packageNames) {

  if (Platform.OS === 'android') {
    return new Promise((resolve, reject) => {
      apkManagerModule.isAppsInstalled(packageNames).then((data)=>{
        resolve(data);
      }).catch((error)=>{
        reject(error);
      });
    });
  }

}
