fetch('./main.json')
    .then((res) => res.json())
    .then((data) => {
        displayPeople(data.ToDo)
    })

let peopleEl = document.getElementById('task1')

function displayPeople(data) {
    let peopleHTML = ''

    console.log(data)
    console.log(data[2])

    displayFeaturedPerson(data[2])

        for (let person of data) {
            peopleHTML += `
            <div class="card mb-2">
                <div class="card-body">
                    <h2 class="card-text">${person.title}</h2>
                    <p class="card-text">${person.description}</p>
                </div>
            </div>
            `
        }

        peopleEl.innerHTML = peopleHTML

        let peopleEls = document.querySelectorAll('#task1 .card')

        for (let i = 0; i < peopleEls.length; i++) {
            peopleEls[i].addEventListener('click', (event) => {
                let personInfo = data[i]
                displayFeaturedPerson(personInfo)
            })
        }
}

function displayFeaturedPerson(person) {
    let featuredPersonEl = document.getElementById('featured-person')

    let skillsHTML = ''

    for (let skill in person.tasks) {
        skillsHTML += `
        <li>${skill}: ${person.tasks[skill]}</li>
        `
    }

    let personHTML = `
    <h2>${person.title}</h2>
    <p>Title: ${person.description}</p>
    <h3>Tasks:</h3>
    <ul>
        ${skillsHTML}
    <ul>
    `
    featuredPersonEl.innerHTML = personHTML
}

