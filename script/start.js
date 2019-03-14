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

const runReactNativeMetroBundler = ()=> {
  cmd.execSync(`watchman watch-del-all || true`);
  cmd.execSync(`adb reverse tcp:8081 tcp:8081 || true`);
  cmd.execSync(`node ./node_modules/react-native/local-cli/cli.js start -- --reset-cache --root ./`);
}

runReactNativeMetroBundler();

module.exports = {
  runReactNativeMetroBundler
};