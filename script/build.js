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

const copyScript = ( )=> {
    cmd.execSync(`cd ../`);
    cmd.execSync(`cp -r script/`);
    cmd.execSync('Usage: emulator -avd [nome emulatore] es: emulator -avd Pixel_API_23');
  }
  