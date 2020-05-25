
document.addEventListener('DOMContentLoaded',init)

function init(){

    let btn = document.getElementById('btn')
    let link = document.getElementById('link')
    let txt = document.getElementById('txt')
    btn.addEventListener('click',botaoClicado)
    
    function botaoClicado(ev){
        console.log(ev.type,   ev.target,   ev.currentTarget)
    }
    link.addEventListener('click',(ev) =>{
        ev.preventDefault()
        console.log(ev.type ,ev.target,   ev.currentTarget)
    })
    
    txt.addEventListener('input', ev =>{
    console.log(ev.target,ev.type, ev.target.value)
    })
    txt.addEventListener('change', ev=>{
        console.log(ev.type, ev.target , ev.target.value)
    })
    txt.addEventListener('blur', ev=>{
        console.log(ev.type, )
    })
    

}
