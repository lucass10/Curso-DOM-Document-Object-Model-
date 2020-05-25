
/*
let c = main.children
let c2 = main.childNodes
let ul = main.children[1]
console.log(ul)
let h2 = main.firstElementChild
console.log(h2)
let ul2 = h2.nextElementSibling
console.log(ul2)
let h2a = ul2.previousElementSibling
console.log(h2a)
*/
let main = document.querySelector('.main')
let ul = main.children[1]
let lis = ul.children
let firstLi = lis[0]
let txt = firstLi.textContent
let txt2 = firstLi.firstChild.nodeValue
let bool = main.contains(firstLi)
console.log(bool)
