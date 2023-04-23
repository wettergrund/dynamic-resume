getGit();

const reposToShow = ["Movie-System", "CarRace", "Weather-app" , "memory"];

async function getGit(){
    // Fetch data from Github repository
    const loadingMessage = document.querySelector('#loading');

    loadingMessage.classList.remove('not-visible');

    const response = await fetch('https://api.github.com/users/wettergrund/repos');
    const data = await response.json();

    // Timeout added to demo loading effect
    
        displayGit(data);

        loadingMessage.classList.add('not-visible');
    

}

function displayGit(data){

    const mainContainer = document.querySelector(".projects");
    mainContainer.textContent = "";

    for (let i = 0; i < reposToShow.length; i++) {
        const currentRepo = reposToShow[i];

        // Find the index of the current repository in the fetched data
        const repoIndex = data.findIndex(repo => repo.name === currentRepo);

        if(repoIndex !== -1){
            const { id, name, description, html_url, has_pages, homepage, topics}  = data[repoIndex];

            // Create card for each repository
            generateElement('article' , '' , mainContainer, 'class' , 'card prim-card git' , 'data-contid' , id);
            const cardContainer = document.querySelector('[data-contid="' + id + '"]');

            generateElement('img' , '' , cardContainer , 'src' , 'images/' + name.toLowerCase() + '.jpg' , 'alt' , 'bild på ' + name);

            generateElement('div' , '' , cardContainer , 'data-infoid' , id, 'class', "card-right");
            const infoContainer = document.querySelector('[data-infoid="' + id + '"]');

            
            generateElement('h3' , name.toUpperCase() , infoContainer);
            generateSkills(topics, infoContainer);
            generateElement('p' , description , infoContainer);

            
            generateElement('div', '', infoContainer, 'class', 'btn-container', 'data-buttonid', id )
            
            const buttonContainer = document.querySelector('[data-buttonid="' + id + '"]');

          
            generateElement('a' , "Repo" , buttonContainer , 'href' , html_url , 'class' , 'btn small-btn' , 'target' , '_blank' );


            if(has_pages){
                generateElement('a' , "Demo" , buttonContainer , 'href' , homepage , 'class' , 'btn small-btn demo-btn' , 'target' , '_blank' );
            }

       


        }
    }
}


function generateSkills(skills, container){
    // Function to generate skill tags

    if(skills.length > 0){
        
        // Crate area for skill tags
        generateElement('div' , '' , container , 'class' , 'skill-tags' , 'id' , `position-${roleId}`);
        
        const skillContainer = document.querySelector(`#position-${roleId}`);
        
        skills.forEach(skill => {
            generateElement('div' , skill , skillContainer , 'class' , 'tag');
        });

        roleId++;
    }
}



