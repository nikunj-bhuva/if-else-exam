// 1 que //

// let userIncome = +prompt("Enter your income : ");
// let taxAmount;
// if (userIncome <= 10000) {
//     taxAmount = userIncome * 5 / 100;
//     console.log("5% tax in your income is : ", taxAmount);
// }
// else if (userIncome <= 20000) {
//     taxAmount = userIncome * 10 / 100;
//     console.log("10% tax in your income is : ", taxAmount);
// }
// else if (userIncome <= 30000) {
//     taxAmount = userIncome * 15 / 100;
//     console.log("15% tax in your income is : ", taxAmount);
// }
// else if (userIncome > 30000) {
//     taxAmount = userIncome * 20 / 100;
//     console.log("20% tax in your income is : ", taxAmount);
// }
// 2 que //

// let month = +prompt("Enter your number : ");
// switch (month) {
//     case 1:
//         {
//             console.log("January : ", month);
//             break;
//         }
//     case 2:
//         {
//             console.log("February : ", month);
//             break;
//         }
//     case 3:
//         {
//             console.log("March : ", month);
//             break;
//         }
//     case 4:
//         {
//             console.log("April : ", month);
//             break;
//         }
//     case 5:
//         {
//             console.log("May : ", month);
//             break;
//         }
//     case 6:
//         {
//             console.log("June : ", month);
//             break;
//         }
//     case 7:
//         {
//             console.log("July : ", month);
//             break;
//         }
//     case 8:
//         {
//             console.log("Augest : ", month);
//             break;
//         }
//     case 9:
//         {
//             console.log("September : ", month);
//             break;
//         }
//     case 10:
//         {
//             console.log("Octomber : ", month);
//             break;
//         }
//     case 11:
//         {
//             console.log("November : ", month);
//             break;
//         }
//     case 12:
//         {
//             console.log("December : ", month);
//             break;
//         }
//     default:
//         {
//             console.log("Invalid number");
//         }
// }

// 3 que //

// let productAmount = +prompt("Enter your product amount : ");
// let discount;
// let finalprice;
// if (productAmount <= 100) {
//     discount = productAmount * 5 / 100;
//     console.log("5% discount on your product is : ", discount)
//     finalprice = productAmount - discount;
//     console.log("after discount the final price of product is : ", finalprice);
// }
// else if (productAmount <= 500) {
//     discount = productAmount * 10 / 100;
//     console.log("10% discount on your product is : ", discount)
//     finalprice = productAmount - discount;
//     console.log("after discount the final price of product is : ", finalprice);
// }
// else {
//     discount = productAmount * 15 / 100;
//     console.log("15% discount on your product is : ", discount);
//     finalprice = productAmount - discount;
//     console.log("after discount the final price of product is : ",finalprice);
// }

// 4 que //

let weight = +prompt("Enter the Body Weight : ");
let height = +prompt("Enter the body weight in meter : ");
let bmi = weight / (height * height);
console.log(bmi);
if (bmi < 18.5) {
    console.log("Under Weigth");
}
else if (bmi > 18.5 && bmi <= 24.9) {
    console.log("Normal");
}
else if (bmi >= 25 && bmi <= 29.9) {
    console.log("Over Weight");
}
else {
    console.log("Obese");
}