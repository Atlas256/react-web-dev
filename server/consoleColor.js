const chalk = require("chalk");

const log_ok = (str) => console.log(chalk.rgb(0, 255, 0).underline(str));
const log_info = (str) => console.log(chalk.rgb(255, 255, 0).underline(str));
const log_error = (str) => console.log(chalk.rgb(255, 0, 0).underline(str));


module.exports = { log_ok, log_info, log_error }