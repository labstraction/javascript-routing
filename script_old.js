const homePageHtml =
`
<h1>Home</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ad molestiae nisi, debitis vitae sequi quis eligendi! Autem ipsa repudiandae ut beatae earum vero quas eveniet provident consequatur sed! Architecto.</p>
`


changePage(window.location.hash)




window.addEventListener('hashchange', ()=>changePage(window.location.hash))

function changePage(hash){
  const container = document.getElementById('page-container')
  switch (hash) {
    case '#/about':
      // container.innerHTML = '<h1>About<\h1>'
      displayPage('about');
      break;
    case '#/gallery':
      // container.innerHTML = '<h1>Gallery<\h1>'
      displayPage('gallery');
      break;
    case '#/contacts':
      // container.innerHTML = '<h1>Contacts<\h1>'
      displayPage('contacts');
      break;
    default:
      // container.innerHTML = Home.render()
      displayPage('home');
      break;
  }
}

function displayPage(pageId){
  const container = document.getElementById('page-container');

  const arrayOfChildren = [...container.children];

  for (const child of arrayOfChildren) {
    child.style.display = 'none';
  }

  const selectedPage = document.getElementById(pageId);

  selectedPage.style.display = 'block';
}