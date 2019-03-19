/**
 * @author Christian Chiama
 * @version: 1.0
 * @copyright Be Engineering srl
 * @tutorial: React Native Course
 * 
 * Company: Be Engineering srl
 * data: 13-03-2019
*/

const { execSync } = require('child_process');

const execSync = (cmd) => {
    execSync(cmd, { stdio: ['inherit', 'inherit', 'inherit'] });
};
const execSyncSilently = (cmd) => {
    execSync(cmd, { stdio: ['ignore', 'ignore', 'ignore'] });
};

const kill = (process) => { // eslint-disable-line no-unused-vars
    execSyncSilently(`pkill -f "${process}"`);
};

/* export shared command to use in other file in node env */
module.exports = {
    execSyncSilently,
    kill
};