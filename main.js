#! /usr/bin/env node
import inquirer from "inquirer";
//initialize user balance and pin code
let myBalance = 5000;
let myPin = 1234;
console.log("Welcome to your ATM");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code!",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Pin is correct !Login successful. ");
    //console.log(`Current Account Balance is ${myBalance}`); not working
    let oprationAnswer = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation",
            choices: ["withDraw Amount", "Check Balance"]
        }
    ]);
    if (oprationAnswer.operation === "withDraw Amount") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw!"
            }
        ]);
        if (amountAnswer.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= amountAnswer.amount;
            console.log(`${amountAnswer.amount} withDraw successfully!`);
            console.log(`Your remainig balance is: ${myBalance}`);
        }
    }
    else if (oprationAnswer.operation === "Check Balance") {
        console.log(`your Account Balance is: ${myBalance}`);
    }
}
else {
    console.log("pin is incorrect please try again");
}
