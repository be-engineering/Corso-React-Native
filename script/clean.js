/*
 * @author Christian Chiama
 * @Company: Be Engineering srl
 * @version: 1.0
 * @data: 13-03-2019
*/

const cp = require('child_process');

const execSync = (cmd) => {
  cp.execSync(cmd, { stdio: ['inherit', 'inherit', 'inherit'] });
};
const execSyncSilently = (cmd) => {
  execSync(cmd, { stdio: ['ignore', 'ignore', 'ignore'] });
};

const kill = (process) => { // eslint-disable-line no-unused-vars
  execSyncSilently(`pkill -f "${process}"`);
};

const clean = () => {
  execSync(`watchman watch-del-all || true`);
  execSync(`adb reverse tcp:8081 tcp:8081 || true`);
  execSync(`rm -rf /tmp/metro-bundler-cache-*`)
  execSync(`rm -rf /tmp/haste-map-react-native-packager-*`)
  execSync(`rm -rf /ios/DerivedData`);
  execSync(`rm -rf /android/build`);
  execSync(`rm -rf /android/app/build`);
  execSync(`rm -rf /android/build`);
  execSync(`rm -rf /android/app/build`);
  execSync(`rm -rf /dist`);
};

clean();
