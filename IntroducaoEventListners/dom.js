
    let lista = document.querySelector('.lista-ul')


    function addli(){
        let input = document.getElementById('txtcampo').value
        let li = document.createElement('li')
        li.textContent = input
        lista.appendChild(li) 
        li.addEventListener('click',function(ev){
        let p = ev.target
        console.log(p.innerHTML)
        })
        
        
    }
