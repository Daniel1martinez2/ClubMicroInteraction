const buttonsTargets = document.querySelectorAll('.borderTarget'); 
const floatingDiv = document.querySelector('.floatingDiv'); 


let wrapElem = (posx, posy, width, height, radius)=>{
    floatingDiv.style.width = width+'px';
    floatingDiv.style.height = height+'px'; 
    floatingDiv.style.left = posx+'px'; 
    floatingDiv.style.top = posy+'px'; 
    floatingDiv.style.borderRadius = radius; 
    floatingDiv.style.display = 'block'; 
}

buttonsTargets.forEach((elem)=>{

    elem.addEventListener('click',()=>{
        var elemRect = elem.getBoundingClientRect(); 
        console.log(elemRect); 
        let style = getComputedStyle(elem); 
        console.log(floatingDiv); 
        console.log(style.borderTopLeftRadius); 
        let radius = style.borderTopLeftRadius; 
        wrapElem(elemRect.x, elemRect.y, elemRect.width, elemRect.height, radius); 


    }); 
})


