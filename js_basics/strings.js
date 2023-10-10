/*const singleQuote = 'Hello JS'
const doubleQuotes = "hello JS" // в подвій них в тексіт можна використати 1ні кавички або використати екранізацію \ - за допомогою слеша
console.log(singleQuote)
console.log(doubleQuotes)

const name = "Alice"
const backtick = `${name} Welcome to JS` // зворотні кавички це backtick
console.log(backtick)*/

/*
const text = "JS ergthyjukilo;olikujyhtgrfddfgdhfjklyktjhgdfvcxSDAFSGDHTFJUKJHDSFGHJKLJHGFetyuiolkjhgghjk"
//console.log(text.length)
// console.log(text[1])
console.log(text[text.length - 1]) // доступ до останнього елементу*/

/*// конкатинація рядків
const firstText = "Hello"
const secondText = "Word"
//const resultText = firstText + " " + secondText
const resultText =  `${firstText} ${secondText}`
console.log(resultText)*/

const name = "Alice"
/*
console.log(name.length)
console.log(name.repeat(2))
*/
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.padStart(10,"!"))
console.log(name.padEnd(10,"!"))
console.log(name.includes("A"))
console.log(name.match(/[Aa]/)); //regExp
console.log(name.replace("A","y"))