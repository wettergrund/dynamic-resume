


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



const btn = document.querySelector('.btn')

btn.addEventListener('mouseover' , function(e){
    console.log(e);

    

})