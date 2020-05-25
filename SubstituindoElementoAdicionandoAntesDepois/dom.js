let ul = document.querySelector('.main ul ')
let li = ul.children
let toystory = li[4]
let newNode = document.createElement('li')
newNode.textContent = 'The sixt Sense'
ul.insertBefore(newNode ,toystory)
let jp = document.createElement('li')
jp.textContent = 'Toy story 3'
ul.replaceChild(jp,toystory)