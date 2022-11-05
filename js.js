let roleid = 1;

async function getMyCV(){

    await fetch('data.json')

    let response = await fetch('data.json');
    let data = await response.json();
    
    displayEDU(data)
    displayCV(data)
}

toMs = (seconds) => new Date(seconds * 1000);

function displayCV(data){
    const container = document.querySelector('.work-container')


    // For-loop to display data for each employer
    const employer = data.work

    for (let i = 0; i < employer.length; i++) {
        // Generate company header and location
        generateElement('h2',employer[i].company,container,'id',"company-" + i)
        generateElement('small',employer[i].location,container)

        // Generate company icon
        const icon = document.createElement('img');
        icon.setAttribute("class","company-icon")
        icon.setAttribute("alt", employer[i].company + " logotyp")
        icon.setAttribute("src", "images/" + employer[i].img)
        const header = document.querySelector("#company-" + i);
        header.prepend(icon);

        // forEach-loop to display position(s) at each 
        let positions = employer[i].positions

        positions.forEach(position => {
            
            const startYear = returnMonth(toMs(position.start).getUTCMonth()) + " " + toMs(position.start).getUTCFullYear();
            endYear = () => (position.current) ? "tills vidare" : returnMonth(toMs(position.end).getUTCMonth()) + " " + toMs(position.end).getUTCFullYear();

            // Generate role header, working years and description
            generateElement('h3',position.role,container)
            generateElement('small',`${startYear} - ${endYear()}`,container)
            generateElement('p', position.description, container)

            generateSkills(position.skills , container)

        });
    };
};


function displayEDU(data){
    const container = document.querySelector('.edu-container');
    let edu = data.edu;

    for (let i = 0; i < edu.length; i++) {

        // Generate education header and years
        generateElement('h2', edu[i].school, container)
        generateElement('small', edu[i].location, container)

        const eduYears = [toMs(edu[i].start).getUTCFullYear(),toMs(edu[i].end).getUTCFullYear()];

        // Generate education years and description
        generateElement('small', ` | ${eduYears[0]} - ${eduYears[1]} ` , container)
        generateElement('p', edu[i].description, container)

        generateSkills(edu[i].skills, container)
    }
}

getMyCV()

function returnMonth(month){
    const months = ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"];
    return months[month];
}

function generateElement(element, content, parent, att, val, att2, val2){
    // Function for generating a new element. Support for two setAttributes

    element = document.createElement(element);
    element.innerText = content;

    if(att !== undefined){
        console.log("Hello");
        element.setAttribute(att,val)
    }
    if(att2 !== undefined){
        console.log("Hello");
        element.setAttribute(att2,val2)
    }
    parent.appendChild(element);
}

function generateSkills(skills, container){
    // Function to generate skill tags

    if(skills.length > 0){
        // Crate area for skill tags
        generateElement('div', '', container,'class','skill-tags','id',`position-${roleid}`);

        const skillContainer = document.querySelector(`#position-${roleid}`);
        
        skills.forEach(skill => {
            generateElement('div',skill,skillContainer,'class','tag')
        });

        roleid++;
        
    }
}