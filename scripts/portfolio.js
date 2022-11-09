/* Fetch https://api.github.com/users/wettergrund/repos
Hämta
memory
weather-app

För varje

Under projects
    Artikel klass card beige
        Div
            Img
        Div
            h3 
            p description
            a länk (https://wettergrund.github.io/ [name]) (Läs mer../Till repo)
*/


getGit()


const reposToShow = ["Weather-app" , "memory"]


async function getGit(){


    const response = await fetch('https://api.github.com/users/wettergrund/repos');
    const data = await response.json();

    // console.log(data)

    displayGit(data)
}

function displayGit(data){

    const mainContainer = document.querySelector(".projects");
    
    for (let i = 0; i < data.length; i++) {
        const { id, name, description , languages_url , html_url}  = data[i];




        if(reposToShow.includes(name)){

            generateElement('article' , '' , mainContainer, 'class' , 'card beige' , 'data-contid' , id);
            const cardContainer = document.querySelector('[data-contid="' + id + '"]');

            const infoId = 'info-' + name;

            generateElement('img' , '' , cardContainer , 'src' , 'images/' + name + '.jpg')

            generateElement('div' , '' , cardContainer , 'data-infoid' , id);
            const infoContainer = document.querySelector('[data-infoid="' + id + '"]');

            generateElement('h3' , description , infoContainer);
            generateElement('a' , "Till repo" , infoContainer , 'href' , html_url , 'class' , 'btn small-btn' , 'target' , '_blank' );


            
        }
        
    }





}




// const icon = document.createElement('img');
// icon.setAttribute("class" , "company-icon");
// icon.setAttribute("alt" , edu[i].school + " logotyp");
// icon.setAttribute("src" , "images/" + edu[i].img)









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