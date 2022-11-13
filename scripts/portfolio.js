getGit();

const reposToShow = ["Weather-app" , "memory"];

async function getGit(){
    // Fetch data from Github repository
    const loadingMessage = document.querySelector('#loading');

    loadingMessage.classList.remove('not-visible');

    const response = await fetch('https://api.github.com/users/wettergrund/repos');
    const data = await response.json();

    // Timeout added to demo loading effect
    setTimeout(() => {
        displayGit(data);

        loadingMessage.classList.add('not-visible');
    }, 2000);

}

function displayGit(data){

    const mainContainer = document.querySelector(".projects");
    mainContainer.textContent = "";
    
    for (let i = 0; i < data.length; i++) {
        const { id, name, description, html_url}  = data[i];




        if(reposToShow.includes(name)){
            // Create card for each repository
            generateElement('article' , '' , mainContainer, 'class' , 'card beige' , 'data-contid' , id);
            const cardContainer = document.querySelector('[data-contid="' + id + '"]');
     

            generateElement('img' , '' , cardContainer , 'src' , 'images/' + name.toLowerCase() + '.jpg' , 'alt' , 'bild på ' + name);

            generateElement('div' , '' , cardContainer , 'data-infoid' , id);
            const infoContainer = document.querySelector('[data-infoid="' + id + '"]');

            generateElement('h3' , description , infoContainer);
            generateElement('a' , "Till repo" , infoContainer , 'href' , html_url , 'class' , 'btn small-btn' , 'target' , '_blank' );
            
        }
        
    }





}
