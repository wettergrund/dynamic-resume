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

document.addEventListener('mousemove',function(e){
    // Event listener to add hover effect to cards

    const target = e.target.classList;

    if(target.contains('card')){
        const   cardWidth = e.target.clientWidth,
                cardHeight = e.target.clientHeight;

                
        // Mouse position relative to element
        const   distance = e.target.getBoundingClientRect();
        const   mouseX = e.clientX - distance.left,
                mouseY = e.clientY - distance.top;

        // Percent counting to create counteractive effect
        const   xPercent = Math.abs(((mouseX / cardWidth) * 100) -100),
                yPercent = Math.abs(((mouseY / cardHeight) * 100) -100);

        // Fraction of movement to add rotation effect
        const   xFraction = (xPercent / 100) - .5,
                yFraction = (yPercent / 100) - .5;
        
        e.target.style.backgroundPosition = xPercent + '% 0';
        e.target.style.transform =  'perspective(500px) rotateY(' + xFraction + 'deg) rotateX(' + yFraction + 'deg)';


        setTimeout(() => {
            e.target.style.backgroundPosition = '0 0';
        }, 1000)
    }

})