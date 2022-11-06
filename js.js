let roleId = 1;

getCVData()

async function getCVData(){

    await fetch('data.json')

    const response = await fetch('data.json');
    const data = await response.json();
    
    displayEducations(data);
    displayEmployments(data);
}

toMs = (seconds) => new Date(seconds * 1000);

function displayEmployments(data){
    const workContainer = document.querySelector('.work-container');


    // For-loop to display data for each employer
    const employer = data.work

    for (let i = 0; i < employer.length; i++) {

        // Generate company header and location
        generateElement('h2' , employer[i].company,workContainer , 'id',"company-" + i);
        generateElement('small' , employer[i].location , workContainer);

        // Generate company icon
        const workId = document.querySelector("#company-" + i);
        const icon = document.createElement('img');
        icon.setAttribute("class" , "company-icon");
        icon.setAttribute("alt" , employer[i].company + " logotyp");
        icon.setAttribute("src" , "images/" + employer[i].img);
        
        workId.prepend(icon);

        // loop to display position(s) at each employer
        let positions = employer[i].positions;

        positions.forEach(position => {
            const startYear = returnMonth(toMs(position.start).getUTCMonth()) + " " + toMs(position.start).getUTCFullYear(),
                  endYear = () => (position.current) ? "tills vidare" : returnMonth(toMs(position.end).getUTCMonth()) + " " + toMs(position.end).getUTCFullYear();

            // Generate role header, working years and description
            generateElement('h3' , position.role , workContainer);
            generateElement('small' , `${startYear} - ${endYear()}` , workContainer);
            generateElement('p' , position.description , workContainer);

            generateSkills(position.skills , workContainer);
        });
    };
};


function displayEducations(data){
    const eduContainer = document.querySelector('.edu-container');
    const edu = data.edu;

    for (let i = 0; i < edu.length; i++) {

        // Generate education header and years
        generateElement('h2', edu[i].school , eduContainer , 'id',"school-" + i);
        generateElement('small' , edu[i].location , eduContainer);

        // Generate school icon
        const schoolId = document.querySelector("#school-" + i);
        const icon = document.createElement('img');
        icon.setAttribute("class" , "company-icon");
        icon.setAttribute("alt" , edu[i].school + " logotyp");
        icon.setAttribute("src" , "images/" + edu[i].img)

        schoolId.prepend(icon);

        const startYear = toMs(edu[i].start).getUTCFullYear(),
              endYear = toMs(edu[i].end).getUTCFullYear();

        // Generate education years and description
        generateElement('small' , ` | ${startYear} - ${endYear} ` , eduContainer);
        generateElement('p' , edu[i].description , eduContainer);

        generateSkills(edu[i].skills , eduContainer);
    }
}

function returnMonth(month){
    const months = ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"];
    return months[month];
}

function generateElement(element, content, parent, att, val, att2, val2){
    // Function for generating a new element. Support for two setAttributes

    element = document.createElement(element);
    element.innerText = content;

    if(att !== undefined){
        element.setAttribute(att,val);
    }
    if(att2 !== undefined){
        element.setAttribute(att2,val2);
    }
    parent.appendChild(element);
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