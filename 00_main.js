// Start
alert('Hello, World!!!')

// explanatory note
/*
  range explanatory note
*/

// write HTML tag
document.write('<h1>Hello, World!</h1>')

// tag selector
document.querySelector('h1')
document.querySelector('h1').innerText  // get text in tags
document.querySelector('h1').innerText = 'byebye'  // update text value


// define and print
var name = 'mh'  // define

console.log(name)  // print


// for
var b = 30

for (var b = 0; b < 10; b++) {
  console.log(b)
}
console.log(b)  // error


// type of data
// let
let name = 'mh'

document.write(name)

name = 'MH'

document.write(name)  // let is mutuble

// const
const loc = 'GJ'

document.write(loc)

loc = 'Seoul'

document.write(loc)  // const is unmutuble


// calculation
const first_name = 'MH'
const last_name = 'J'

const full_name = last_name + first_name

document.write('<h1>' + full_name + '</h1>')  // normal string
document.write(`<h1>${full_name}</h1>`)  // f-string

console.log(`<h1>${full_name}</h1>`)


// if
const userName = prompt('Hi, who are you???')  // input
let message = ''

if (userName === 'mh') {
  message = '<h1>admin page</h1>'
} else if (userName === 'happy') {
  message = '<h1>happy coding</h1>'
} else {
  message = `<h1>Hello, ${userName}!</h1>`
}

document.write(message)

const num1 = 0
const num2 = '0'

console.log(num1 == num1)  // compare value of data
console.log(num1 === num2)  // compare value and type of data