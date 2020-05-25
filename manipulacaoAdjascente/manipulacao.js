let span = document.createElement('span')
span.textContent = 'Este e o elemento span.'
let p = document.getElementById('para')
p.insertAdjacentElement('beforebegin',span)
