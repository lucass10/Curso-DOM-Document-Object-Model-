document.addEventListener('DOMContentLoaded',function(){
    let paras = document.querySelectorAll('p')
    for(let p in paras){
        paras[p].addEventListener('click',clicked)
        paras[p].addEventListener('mouseover', addA)
        paras[p].addEventListener('mouseout',  removeA)
    }
})
function clicked(ev){
    let p = ev.currentTarget
    p.classList.toggle("b")
}
function addA(ev){
let p = ev.currentTarget
p.classList.add("a")
}
function removeA(ev){
    let p = ev.currentTarget
    p.classList.remove("a")
}   
