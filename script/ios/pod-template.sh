#!/bin/bash
#-----------------------------#
# @author Christian Chiama
# @version: 1.0
# @copyright Be Engineering srl
# @tutorial: React Native Course
# 
# Company: Be Engineering srl
# data: 13-03-2019
#-----------------------------#
echo "# Uncomment the next line to define a global platform for your project
platform :ios, '9.0'

target '`$1`' do
  # Uncomment the next line if you're using Swift or would like to use dynamic frameworks
  #use_frameworks!

  # Pods for `$1`

  # Required by RNFirebase
  pod 'Firebase/Core', '~> 5.0.1'

  # [OPTIONAL PODS] - comment out pods for firebase products you won't be using.
  pod 'Firebase/Auth'
  pod 'Firebase/Database'
  pod 'Firebase/DynamicLinks'
  pod 'Firebase/Performance'
  pod 'Firebase/Firestore'
  pod 'Firebase/Messaging'
  pod 'Firebase/RemoteConfig'
  pod 'Firebase/Storage'
  pod 'Fabric', '~> 1.7.6'
  pod 'Crashlytics', '~> 3.10.1'
end

" > ios/Podfile