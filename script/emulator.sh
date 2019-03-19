
# emulator -avd [nome emulatore] es Pixel_API_23
#----------------------
# @author Christian Chiama
# @Company: Be Engineering srl
# @version: 1.0
# @data: 13-03-2019
#----------------------
const cp = require('child_process');

const execSync = (cmd) => {
  cp.execSync(cmd, { stdio: ['inherit', 'inherit', 'inherit'] });
};

const execLuncher = ()=> {
  execSync(`cd $ANDROID_HOME/tools || true`);
  execSync(`emulator -list-avds || true`);
  execSync('Usage: emulator -avd [nome emulatore] es: emulator -avd Pixel_API_23');
}

execLuncher();
