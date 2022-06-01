let pages = []

function loadPages() {
  fetch("./pages.json")
  .then(response => response.json())
  .then(result => displayPages(result));
}

function displayPages(loadedPages){

  pages = loadedPages;

  const navMenu = document.getElementById('nav-menu');

  for (const page of pages) {
    console.log(page);
    const a = document.createElement('a');
    const node = document.createTextNode(page.name);
    a.appendChild(node);
    a.href = '/#/' + page.id;
    navMenu.appendChild(a);
  }

  changePage(window.location.hash);
}

window.addEventListener('hashchange', () => changePage(window.location.hash));


function changePage(hash){
  
  let id = hash.replace('#/', '');

  if (id === '') {
    id = 'home'
  }

  let selectedPage;

  for (const page of pages) {
    if (page.id === id) {
      selectedPage = page;
      break;
    }
  }

  console.log(selectedPage);

  const container = document.getElementById('page-container');

  container.innerHTML = selectedPage.html;

}



loadPages();