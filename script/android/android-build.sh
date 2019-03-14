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

# Go to android path
cd android

# Clean
./gradlew clean

# Remove old keykeystore if exist
rm -rf app/release.keystore

# Generate release keystore
keytool \
  -v \
  -genkey \
  -keystore app/release.keystore \
  -storepass android \
  -alias androidreleasekey \
  -keypass android \
  -dname 'CN=Android Debug,O=Android,C=US'

# Run release build
./gradlew assembleRelease --console=plain -
