const repoList = document.querySelector(".js-repo-list");
let arr = [];


const getStatus = async (response) => {
  return response.status === 200 ?
    await response.json() : 
    Promise.reject(new Error(response.status));
};
// const getDataJson = (response) => response.json();

async function getData(url) {
  await fetch(url)
    .then(getStatus)
    // .then(getDataJson)
    .then(response => {
      arr = response;
      buildRepoList();
    })
    .catch(err => console.log(err));
}



function buildRepoList() {
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