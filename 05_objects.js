// objects in js
const me = {
  name: 'mh',
  'phone number': '01012341234',
  product: {
    phone: 'S10 5G',
    notebook: 'Samsung Odyssey'
  }
}

console.log(me.name)
console.log(me.product.notebook)


// object in object
let books = ['node.JS', 'python']
let comics = {
  DC: ['Aquaman', 'Superman'],
  Marble: ['Avengers', 'Ironman']
}

let bookStore = {
  books,  // if name of key is same as name of value, programmer can write like this
  comics
}

console.log(bookStore)


// JSON
const jsonData = JSON.stringify(me)
const parseData = JSON.parse(jsonData)

console.log(jsonData)
console.log(parseData)