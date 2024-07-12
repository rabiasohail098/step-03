//step03a_modules
import add from "./add.js";
import inquirer from "inquirer";
import chalk from "chalk";
console.log(add(7, 9));
import { color } from "./add.js";
console.log(color);
import TrafficLights from "./days.js";
console.log(TrafficLights);
let answer = await inquirer.prompt({
    name: "name",
    type: "input",
    message: chalk.bold.italic.bgMagenta("What is your name?")
});
//step03b_native_ECMAScript_modules
//step03c_import_inquirer_ECMAScript_module
//step03d_chalk
