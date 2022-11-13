


function generateElement(element, content, parent, att, val, att2, val2, att3, val3){
    // Function for generating a new element. Support for three setAttributes

    element = document.createElement(element);
    element.innerText = content;

    if(att !== undefined){
        element.setAttribute(att,val);
    }
    if(att2 !== undefined){
        element.setAttribute(att2,val2);
    }
    if(att3 !== undefined){
        element.setAttribute(att3,val3);
    }
    parent.appendChild(element);
}


const contactBtn = document.querySelectorAll('.contact-btn');


document.addEventListener('click',function(e){

    if(e.target.classList.contains('contact-btn') || e.target.classList.contains('modal-bg')){
        const modal = document.querySelector('.modal-box');
        modal.classList.toggle('modal-visible');
    }

})



// const btn = document.querySelector('.btn')

// btn.addEventListener('mouseover' , function(e){
//     console.log(e);

    

// })


// const card = document.querySelector('.card')

document.addEventListener('mousemove',function(e){

    const target = e.target.classList;
  
    




    if(target.contains('card')){
        const cardWidth = e.target.clientWidth;
        const cardHeight = e.target.clientHeight;


        // console.log(e.target)
        const distance = e.target.getBoundingClientRect();
        
        const mouseX = e.clientX - distance.left,
              mouseY = e.clientY - distance.top;

                    
          
        //   console.log(mouseX)
        //   console.log(mouseY)
        
            const xPercent = Math.abs(((mouseX / cardWidth) * 100) -100),
                    yPercent = Math.abs(((mouseY / cardHeight) * 100) -100);
            const xFraction = (xPercent / 100) - .5,
                    yFraction = (yPercent / 100) - .5;

                        // console.log(xFraction)
                        // console.log(yDecimal)

        const bgPos = e.target.style.backgroundPosition
        
        e.target.style.backgroundPosition = xPercent + '% 0';
        e.target.style.transform =  'perspective(500px) rotateY(' + xFraction + 'deg) rotateX(' + yFraction + 'deg)';


        setTimeout(() => {
            e.target.style.backgroundPosition = '0 0';
        }, 1000)
    }
    // console.log(target.contains('card'));

})