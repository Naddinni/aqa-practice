const age = 18

// switch (true) {
//     case age === 18:
//     console.log("A person is adult")
//     case age === 17:
//         console.log("A person is almost adult")
//     default:
//         console.log("A person is NOT adult")
// }
// switch (true) {
//     case age >= 18:
//         console.log("A person is adult")
//         break
//     case age === 18:
//         console.log("A person is almost adult")
//         break
//     default:
//         console.log("A person is NOT adult")
// }

// switch (age) {
//     case 18:
//         console.log("A person is adult")
//         break
//     case 16:
//         console.log("A person is almost adult")
//         break
//     default:
//         console.log("A person is NOT adult")
// }

var foo = 1;
var output = "Output: ";
switch (foo) {
    case 0:
        output += "So ";
    case 1:
        output += "What ";
        output += "Is ";
    case 2:
        output += "Your ";
    case 3:
        output += "Name";
    case 4:
        output += "?";
        console.log(output);
        break;
    case 5:
        output += "!";
        console.log(output);
        break;
    default:
        console.log("Please pick a number from 0 to 5!");
}