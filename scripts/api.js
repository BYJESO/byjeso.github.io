var webUrl = 'https://portfolio-backend-byjeso.herokuapp.com';
var projectUrl = '/projects';
var skillUrl = '';

const portfolioContainer = document.querySelector('#portfolio-container');

var skills = [];

initRequest();

async function initRequest() {
	// await fetch(webUrl /* + killUrl*/)
	// 	.then((response) => response.json())
	// 	.then((data) => {
	// 		skills = data;
	// 	})
	// 	.catch((err) => console.log(err));

	await fetch(webUrl + projectUrl)
		.then((response) => response.json())
		.then((data) => insertProjects(data))
		.catch((err) => console.log(err));
}

function dateFormatter(date) {
	let year = date.substr(0, 4);
	let month = date.substr(5, 2);
	let day = date.substr(8, 2);

	return day + '/' + month + '/' + year;
}

function urlPrettier(url) {
	let urlPrettier;
	if (url.includes('https')) {
		urlPrettier = url.substr(8);
	} else {
		urlPrettier = url.substr(7);
	}

	return urlPrettier;
}

function skillInsert(skillContainerId, skills) {
	var firstTime = true;
	let skillContainer = document.getElementById(skillContainerId);
	skills.forEach((skill) => {
		skillObject = getSkill(skill.substr(60));
		console.log(skill.substr(60));
		console.log(skillObject);
		if (firstTime == true) {
			skillContainer.innerHTML = `<a href="${skillObject.url_de_certificacion}" class="tech-button tech-button--${skillObject.slug}" target="_blank" rel="noopener noreferrer">${skillObject.title.rendered}</a>
				`;
			firstTime = false;
		} else {
			skillContainer.innerHTML += `<a href="${skillObject.url_de_certificacion}" class="tech-button tech-button--${skillObject.slug}" target="_blank" rel="noopener noreferrer">${skillObject.title.rendered}</a>
				`;
		}
	});
}

function insertProjects(projects) {
	projects.forEach((project) => {
		portfolioContainer.innerHTML += `
			<article class="project">
            <div class="project__details">
              <h3 class="project__title">${project.title}</h3>
              <div class="project__tech" id="${project.slug}">
              </div>
              <p class="project__date">
                <small><strong>Date: </strong>${dateFormatter(
									project.date
								)}</small>
              </p>
              <p class="project__url">
                <small><strong>You can see it in:</strong>
                  <a href="${
										project.url
									}" class="project__link" target="_blank" rel="noopener noreferrer">
                    ${urlPrettier(project.url)}
                  </a></small>
              </p>

			  <p class="project__url">
                <small><strong>You can see it in:</strong>
                  <a href="${
										project.repositoryUrl
									}" class="project__link" target="_blank" rel="noopener noreferrer">
                    ${urlPrettier(project.repositoryUrl)}
                  </a></small>
              </p>

              <p class="project__description">
							${project.description}
              </p>
            </div>
            <figure class="project__image__container">
              <img
                class="project__image"
                src="${project.imageUrl}"
                alt="${project.title} project image"
              />
            </figure>
        </article>
			`;
		// skillInsert(project.slug, project.skills);
	});

	deleteLoader();
}

function deleteLoader() {
	document.getElementById('loader').style.display = 'none';
}

function getSkill(skillId) {
	console.log(skills);
	console.log(skillId);
	console.log(skills.find((item) => item.id == skillId));
	return skills.find((item) => item.id == skillId);
}
