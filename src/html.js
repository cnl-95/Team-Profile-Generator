const managerCard = (Manager) => {
    const {name, id, email, number, role} = Manager
    return `<div class = "column">
        <div class = "card">
            <div class = "cardContent">
                <div class="cardHeader">
                    <div class = "cardHeaderContent text-center bg-gradient bg-dark text-white">
                        <h4 class = "cardName">${name}</h4>
                        <p class = "cardRole">${role}</p>
                    </div>
                </div>
                <div class="content text-center">
                    <div class = "column"> ID: ${id} </div>
                    <div class = "column"> Email: <a href="mailto:${email}">${email}</a></div>
                    <div class = "column"> Office Number: ${number} </div>
                </div>
            </div>
        </div>
    </div>`  
}
// -----------------------------------------------------------------------
// Intern HTML 
const internCard = (Intern) => {
    const {name, id, email, school, role} = Intern
    return `<div class = "column">
        <div class = "card">
            <div class = "cardContent">
                <div class = "cardHeader">
                    <div class = "cardHeaderContent text-center bg-gradient bg-secondary text-white">
                        <h4 class = "cardName">${name}</h4>
                        <p class = "cardRole">${role}</p>
                    </div>
                </div>
                <div class="content text-center">
                    <div class = "column"> ID: ${id} </div>
                    <div class = "column"> Email: <a href="mailto:${email}">${email}</a></div>
                    <div class = "column"> School: ${school}</div>
                </div>
            </div>
        </div>
    </div>` 
}

// -----------------------------------------------------------------------
// Engineer HTML 
const engineerCard = (Engineer) => {
    const {name, id, email, gitHub, role} = Engineer
    return `<div class = "column">
        <div class = "card">
            <div class = "cardContent">
                <div class = "cardHeader">
                    <div class = "cardHeaderContent text-center bg-gradient bg-secondary text-white">
                        <h4 class = "cardName">${name}</h4>
                        <p class = "cardRole">${role}</p>
                    </div>
                </div>
                <div class="content text-center">
                    <div class = "column"> ID: ${id} </div>
                    <div class = "column"> Email: <a href="mailto:${email}">${email}</a></div>
                    <div class = "column"> GitHub Userame: <a href="https://github.com/${gitHub}" target="_blank">${gitHub}</a></div>
                </div>
            </div>
        </div>
    </div>`  
}

exports.managerCard=managerCard
exports.engineerCard=engineerCard
exports.internCard=internCard
