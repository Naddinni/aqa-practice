/*console.log(3>4)
console.log(3<4)

console.log(3 >= 4)
console.log(4 <= 4)*/

// не строге порівняння -неявне приведення типів
console.log(3 == 3)
console.log(3 != 3) // чи не дорівнює? 3 не = 3
console.log(3 != 4)

// строге порівняння - приведення не відбувається
console.log(3 === 3)
console.log(3 !== 3) // чи не дорівнює? 3 не = 3
console.log(3 !== 4)


console.log(3 == "3") // = true, неявне приведення типів
console.log(3 === "3")  // = false, завжди використовувати строге порівняння

console.log(1 === true) // true=1, false=0

// -----------------------------------

// оператор додавання
const sum = 1-2
console.log(sum)

// залишок від ділення
const sum = 9 % 2
console.log(sum)