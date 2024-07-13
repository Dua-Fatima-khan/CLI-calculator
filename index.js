#! /usr/bin/env node
import inquirer from 'inquirer';
console.log("\nx-------------------------------------------------------------------------x");
console.log("\n\t\t\tWelcome!!");
console.log("\nx-------------------------------------------------------------------------x");
const answer = await inquirer.prompt([
    {
        message: "Enter your First Operand Please!!",
        type: "number",
        name: "num1",
    },
    {
        message: "Enter your second Operand Please!!",
        type: "number",
        name: "num2",
    },
    {
        message: "Choose Your Operator to perform an Action please!!",
        type: "list",
        name: "rawlist",
        choices: [
            "Addition",
            "Subtraction",
            "Multiplication",
            "Division",
            "Modulation",
            "Exponentiation",
        ],
    },
]);
console.log("\nx-------------------------------------------------------------------------x\n");
if (answer.operator === "Addition") {
    console.log(`The Addition of ${answer.num1} and ${answer.num2} is ${answer.num1 + answer.num2}`);
}
else if (answer.operator === "Subtraction") {
    console.log(`The Subtraction of ${answer.num1} and ${answer.num2} is ${answer.num1 - answer.num2}`);
}
else if (answer.operator === "Multiplication") {
    console.log(`The Multiplication of ${answer.num1} and ${answer.num2} is ${answer.num1 * answer.num2}`);
}
else if (answer.operator === "Division") {
    console.log(`The Division of ${answer.num1} and ${answer.num2} is ${answer.num1 / answer.num2}`);
}
else if (answer.operator === "Modulation") {
    console.log(`The Modulation of ${answer.num1} and ${answer.num2} is ${answer.num1 % answer.num2}`);
}
else if (answer.operator === "Exponentiation") {
    console.log(`The Exponentiation of ${answer.num1} and ${answer.num2} is ${answer.num1 ** answer.num2}`);
}
else {
    console.log(`please choose Valid Operator!!`);
}
console.log("\nx-------------------------------------------------------------------------x\n");
console.log("\t\t\tThanks for choosing us!!\n\t\t\t See you soon!!");
console.log("\nx-------------------------------------------------------------------------x\n");
