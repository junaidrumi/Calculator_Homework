//BMI Calculator
import inquirer from "inquirer";
const myCalc = await inquirer.prompt([
{
     type: "list",
     name: "operation",
     message: "What operation you want to perform?",
     choices: ["Add","Subtract","Multiply","Division","Exponentiation","Modulus"],
},
{
     type: "number",
     name: "num1",
     message: "enter first number",
},
{
    type: "number",
    name: "num2",
    message: "enter second number",
}
])
if(myCalc.operation === "Add"){
    console.log(`The sume of your number is:${myCalc.num1 + myCalc.num2}`);
}else if(myCalc.operation === "Subtract"){
    console.log(`The diffrence of your number is:${myCalc.num1 - myCalc.num2}`);
}else if(myCalc.operation === "Multiply"){
    console.log(`The product of your number is:${myCalc.num1 * myCalc.num2}`);
}else if(myCalc.operation === "Division"){
    console.log(`The quotient of ${myCalc.num1} and ${myCalc.num2} is: ${myCalc.num1 / myCalc.num2}`);
}else if(myCalc.operation === "Exponentiation"){
    console.log(`This exponentiation is: ${myCalc.num1 ** myCalc.num2}`);
}else if(myCalc.operation === "Modulus"){
    console.log(`this modulus is: ${myCalc.num1 % myCalc.num2}`);
}