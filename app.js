//Arrow Functions
//Template Literals / Template Strings
//Destructuring
//Spread Operator

const sum =  (x, y) => x + y

const a = 30
const b = 17

console.log(`O valor ${a} somado a ${b} é: ${sum(a,b)}`)

const user = { //chave-valor
    name: "Fulano",
    age: 25,
    city: "Machado",
    isOnline: true,
    isVisible: true
}

function checkUser({name, age, isVisible}){
    if(isVisible == true)
        console.log(`${name} está visível!!!`)

    if(age >= 18)
        console.log(`${name} está autorizado!!!`)
}

checkUser(user)

const fruits = ["apple", "orange", "watermelon", "pineapple"]

const vegetals = ["onion", "lettuce", "carrot"]

const food = [...fruits, ...vegetals]

console.log(...fruits)