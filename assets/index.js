// link to github API
var apiUrl = "https://api.github.com/users/jhara0994"
var disasterUrl = 'https://jhara0994.github.io/EONET/'
var disasterRepo = 'https://github.com/jhara0994/EONET'
var jsCss = document.querySelector('#javascript-css')

// pull projects into page under the correct content name
function getApi() {
    fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // for (var i = 0; i < data.length; i++) {
          showProject.textContent = data[i].html_url;
          repoList.appendChild(listItem);
        })
}

function showProject () {
    var projectTitle = document.createElement('h3');
    var projectUrl = document.createElement('a')
    var projectRepo = document.createElement('a')
    var projectScreen = document.createElement('img')

    projectTitle.textContent = "Disaster Factor"
    projectUrl.textContent = disasterUrl
    projectRepo.textContent = disasterRepo
    projectScreen.textContent = 'Screenshot URL'
}


jsCss.addEventListener(onclick, showProject)

// pin repositories from Github. 








// update Github with profile picture or avatar and biography. 