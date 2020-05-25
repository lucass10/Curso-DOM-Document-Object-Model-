let movies  = ['The Shawnshank Redemption','Pulp Fiction','Fight CLub','Forrest gump',
'The Usual Suspects', 'Apocalypse now','Toy story'
]
let main = document.querySelector('main')
let ul = document.querySelector('main ul')
let df = new DocumentFragment()
movies.forEach( filme =>{
    let li = document.createElement('li')
    li.textContent = filme
    df.appendChild(li)
})
ul.appendChild(df)
