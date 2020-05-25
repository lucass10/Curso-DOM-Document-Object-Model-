
const init = function(){
   let t1 ,t2 ,temp,div1, div2,cln
   t1 = document.getElementById('target1')
   t2 = document.getElementById('target2')
   div1 = document.querySelector('.advertisement')
   t1.appendChild(div1.cloneNode(true))
   temp = document.querySelector(('[type="text/html"]'))
   cln = temp.cloneNode(true)
   div2 = cln.textContent
   t2.innerHTML = div2
}
document.addEventListener('DOMContentLoaded',init)