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
set -e

# Go to ios path
cd ios

# Run release build
xcodebuild build \
  -workspace `$1`.xcworkspace \
  -scheme `$1` \
  -configuration Debug \
  -sdk iphonesimulator \
  -destination 'platform=iOS Simulator,name=iPhone 6' \
  -derivedDataPath build \
  ONLY_ACTIVE_ARCH=NO \
  OTHER_LDFLAGS='$(inherited) -ObjC -lc++'