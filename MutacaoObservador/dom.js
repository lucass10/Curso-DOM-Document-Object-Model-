let observer;
        document.addEventListener('DOMContentLoaded', init);

        function init(){
            let p = document.querySelector('main > p'); //PRIMEIRO p
            p.addEventListener('click', change);
            
            let config = {
                attributes: true, 
                attributeOldValue: true,
                attributeFilter: ['data-thing', 'title', 'style'],
                childList: false, 
                subtree: true, 
                characterData: true,
                characterDataOldValue: false
            };
            /* childList, attributes, characterData */
        }

        
        function change(ev){
            console.log(ev)
            p.textContent = ' this is new content';       
        }
        
    
        