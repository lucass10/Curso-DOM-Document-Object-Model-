let names = movies.join(", ")
let p = document.querySelector('.main p.para')
let all = document.querySelectorAll('.main p')
for(let i=0; i<all.length; i++){
    all[i].textContent = "Lopped" + i
}
