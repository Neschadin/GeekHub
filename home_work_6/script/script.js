const repoList = document.querySelector(".js-repo-list");

async function getData(url) {
  await fetch(url)
    .then(response => response.status === 200 ? response.json() : null)
    .then(buildRepoList)
    .catch(console.log("oops..."));
}

async function getCommitData(id) {
  await fetch(url)
}

function buildRepoList(arr) {
  console.log(arr);
  arr.forEach(item => {
    const elem = createHTMLElement(item);
    repoList.append(elem);
  })
}
  
function createHTMLElement(item) {
  const elem = document.createElement("li");

  elem.className = "js-li-item";
  elem.id = item.id;
  elem.innerText = item.name;

  elem.addEventListener("click", () => console.log("click"))

  return elem;
}


getData("https://api.github.com/users/Neschadin/repos");
