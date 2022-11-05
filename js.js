let roleid = 0;

async function getMyCV(){

    await fetch('data.json')
    // .then((response) => response.json())
    // .then((data) => console.table(data))

    let response = await fetch('data.json');
    let data = await response.json();
    
    displayEDU(data)
    displayCV(data)
}

toMs = (seconds) => new Date(seconds * 1000);

function displayCV(data){
    const container = document.querySelector('.work-container')
    const work = data.work
    
    for (let i = 0; i < work.length; i++) {
        const h2 = document.createElement('h2');
        const small = document.createElement('small');
        
        const icon = document.createElement('img');
        icon.setAttribute("class","company-icon")
        icon.setAttribute("alt", work[i].company + " logotyp")
        icon.setAttribute("src", "images/" + work[i].img)

        console.log(work[i].company)

        h2.innerText = work[i].company;
        small.innerText = work[i].location;

        container.appendChild(h2)
        container.appendChild(small)


        /* for each role */

        let positions = work[i].pos

        for (let i = 0; i < positions.length; i++) {

            

            const startYear = toMs(positions[i].start).getUTCFullYear()

            endYear = () => (positions[i].current) ? "nuvarande!" : toMs(positions[i].end).getUTCFullYear();

            // rubrik
            const h3 = document.createElement('h3');
            h3.innerText = positions[i].role;
            // datum
            const posYears = document.createElement('p');
            posYears.innerText = `${startYear} - ${endYear()} `
            
            // description
            const p = document.createElement('p');
            p.innerText = positions[i].description;

            console.table(positions[i]);
            
            container.appendChild(h3);
            container.appendChild(posYears);
            container.appendChild(p);

            let keySkills = positions[i].skills
            

            if(keySkills.length > 0){
                // Crate area for skill tags
                const skillTags = document.createElement('div');
                skillTags.setAttribute("class", "skill-tags");
                skillTags.setAttribute("id", `position-${roleid}`);

                container.appendChild(skillTags);

                const skillContainer = document.querySelector(`#position-${roleid}`);

                roleid++


                for (let i = 0; i < keySkills.length; i++) {
                    const div = document.createElement('div');
                    div.setAttribute("class", "tag");
                    div.innerText = keySkills[i];

                    skillContainer.appendChild(div);

                    // console.log(keySkills[i])
                    
                }
            }
        }
    }
}


function displayEDU(data){
    const container = document.querySelector('.edu-container')
    let edu = data.edu;

    for (let i = 0; i < edu.length; i++) {
        const h2 = document.createElement('h2');
        const small = document.createElement('small');
            

        const eduYears = [toMs(edu[i].start).getUTCFullYear(),toMs(edu[i].end).getUTCFullYear()]

        console.log(edu[i].school)

        h2.innerText = edu[i].school;
        small.innerText = edu[i].location;

        container.appendChild(h2)
        container.appendChild(small)

        // datum
        const posYears = document.createElement('p');
        posYears.innerText = `${eduYears[0]} - ${eduYears[1]} `
        
        // description
        const p = document.createElement('p');
        p.innerText = edu[i].description;

        console.table(edu[i]);
        
       
        container.appendChild(posYears);
        container.appendChild(p);


        let keySkills = edu[i].skills;
        console.log(keySkills.length)

        if(keySkills.length > 0){
            // Crate area for skill tags
            const skillTags = document.createElement('div');
            skillTags.setAttribute("class", "skill-tags");
            skillTags.setAttribute("id", `position-${roleid}`);

            container.appendChild(skillTags);

            const skillContainer = document.querySelector(`#position-${roleid}`);

            roleid++


            for (let i = 0; i < keySkills.length; i++) {
                const div = document.createElement('div');
                div.setAttribute("class", "tag");
                div.innerText = keySkills[i];

                skillContainer.appendChild(div);

                // console.log(keySkills[i])
                
            }
        }
    }
}

getMyCV()

