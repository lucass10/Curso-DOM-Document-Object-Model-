    let main = document.querySelector('.main')
    let h2  = main.querySelector('h2')
    h2.textContent = 'carregando filmes'
    let p = main.querySelector('p')
    p.innerHTML = 'And now a lisf of <strong> Movies </strong>'
    let ul = document.createElement('ul')
    main.appendChild(ul)

    movies.forEach((item) => {
        let li = document.createElement('li')
        let txtNode = document.createTextNode(item)
        li.appendChild(txtNode)
        ul.appendChild(li)
    })









   