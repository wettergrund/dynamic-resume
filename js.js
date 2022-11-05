let roleid = 1;

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

        h2.setAttribute("id","company-" + i)
        h2.innerText = work[i].company;
        small.innerText = work[i].location;

        container.appendChild(h2);
        container.appendChild(small);

        const header = document.querySelector("#company-" + i);

        header.prepend(icon);



        /* for each role */

        let positions = work[i].pos

        positions.forEach(position => {
            
            const startYear = returnMonth(toMs(position.start).getUTCMonth()) + " " + toMs(position.start).getUTCFullYear();

            endYear = () => (position.current) ? "tills vidare" : returnMonth(toMs(position.end).getUTCMonth()) + " " + toMs(position.end).getUTCFullYear();


            // rubrik
            const h3 = document.createElement('h3');
            h3.innerText = position.role;
            // datum
            const posYears = document.createElement('small');
            posYears.innerText = `${startYear} - ${endYear()} `;
            
            // description
            const p = document.createElement('p');
            p.innerText = position.description;

            console.table(position);
            
            container.appendChild(h3);
            container.appendChild(posYears);
            container.appendChild(p);

            let keySkills = position.skills;
            

            if(keySkills.length > 0){
                // Crate area for skill tags
                const skillTags = document.createElement('div');
                skillTags.setAttribute("class", "skill-tags");
                skillTags.setAttribute("id", `position-${roleid}`);

                container.appendChild(skillTags);

                const skillContainer = document.querySelector(`#position-${roleid}`);

                roleid++

                keySkills.forEach(skill => {
                    const div = document.createElement('div');
                    div.setAttribute("class", "tag");
                    div.innerText = skill;

                    skillContainer.appendChild(div);

                    // console.log(keySkills[i])
                    
                });
            };
        });
    };
};


function displayEDU(data){
    const container = document.querySelector('.edu-container');
    let edu = data.edu;

    for (let i = 0; i < edu.length; i++) {
        const h2 = document.createElement('h2');
        const small = document.createElement('small');
            

        const eduYears = [toMs(edu[i].start).getUTCFullYear(),toMs(edu[i].end).getUTCFullYear()];

        console.log(edu[i].school)

        h2.innerText = edu[i].school;
        small.innerText = edu[i].location;

        container.appendChild(h2)
        container.appendChild(small)

        // datum
        const posYears = document.createElement('small');
        posYears.innerText = ` | ${eduYears[0]} - ${eduYears[1]} `
        
        // description
        const p = document.createElement('p');
        p.innerText = edu[i].description;

        console.table(edu[i]);
        
       
        container.appendChild(posYears);
        container.appendChild(p);


        let keySkills = edu[i].skills;

        if(keySkills.length > 0){
            // Crate area for skill tags
            const skillTags = document.createElement('div');
            skillTags.setAttribute("class", "skill-tags");
            skillTags.setAttribute("id", `position-${roleid}`);

            container.appendChild(skillTags);

            const skillContainer = document.querySelector(`#position-${roleid}`);

            roleid++;


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



function returnMonth(month){
    const months = ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"];
    return months[month];
}