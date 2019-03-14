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

const clean = (node_modules) => {
  cmd.execSync(`echo "Start cleaning..."`);
  cmd.execSync(`watchman watch-del-all || true`);
  cmd.execSync(`adb reverse tcp:8081 tcp:8081 || true`);
  cmd.execSync(`rm -rf /tmp/metro-bundler-cache-*`)
  cmd.execSync(`rm -rf /tmp/haste-map-react-native-packager-*`)
  cmd.execSync(`rm -rf /ios/DerivedData`);
  cmd.execSync(`rm -rf /android/build`);
  cmd.execSync(`rm -rf /android/app/build`);
  cmd.execSync(`rm -rf /android/build`);
  cmd.execSync(`rm -rf /android/app/build`);
  cmd.execSync(`rm -rf /dist`);
  if(node_modules) cmd.execSyncSilently(`rm -rf /node_modules`);
  cmd.execSync(`echo "Clean ended succesfully"`);
};

clean();

module.exports = {
  clean
};