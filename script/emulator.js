/**
 * @author Christian Chiama
 * @version: 1.0
 * @copyright Be Engineering srl
 * @tutorial: React Native Course
 * 
 * Company: Be Engineering srl
 * data: 13-03-2019
*/

const cmd = require('./shared');

const runAndroidEmulator = ( )=> {
  cmd.execSync(`cd $ANDROID_HOME/tools || true`);
  cmd.execSync(`emulator -list-avds || true`);
  cmd.execSync('Usage: emulator -avd [nome emulatore] es: emulator -avd Pixel_API_23');
}

runAndroidEmulator();

module.exports = {
  runAndroidEmulator
};