
const squareRound = document.querySelectorAll('.square__round');

squareRound.forEach(item => {
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