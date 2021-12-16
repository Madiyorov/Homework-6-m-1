
const square__round = document.querySelectorAll('.square__round');

square__round.forEach(item => {
    item.addEventListener('click', () => {
        if(item.style.background == 'blue'){
            item.style.background = 'red'
            item.style.transition = '1.0s'
            item.style.borderRadius = '50%'  
        }else {
            item.style.background = 'blue'
            item.style.borderRadius = '0'
        }    
    }) 
})