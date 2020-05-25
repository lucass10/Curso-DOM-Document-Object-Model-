let main = document.querySelector('.main')
main.setAttribute("title", "my movies")
let li = document.querySelector('ul li')
console.log(li.getAttribute('data-year'))
li.dataset.year = 1998
