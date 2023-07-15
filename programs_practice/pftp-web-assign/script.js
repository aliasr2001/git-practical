// Targeting root container 
let root = document.getElementById('root');

// header tag start here
let headerTag = document.createElement('header');
headerTag.className = 'navHeader';
root.appendChild(headerTag);

// navbar starts here
let navbarTag = document.createElement('nav');
navbarTag.className = 'navbar';
headerTag.appendChild(navbarTag);

// left div
let leftNav = document.createElement('div');
leftNav.className = 'leftNav';
navbarTag.appendChild(leftNav)

// navlogo starts here
let navLogo = document.createElement('img');
navLogo.className = 'navLogo';
navLogo.src = './assets/cheetay-logo.png';
leftNav.appendChild(navLogo);

// page links start here
linksArray = ['Home', 'About', 'Contact'];
linkSrc = ['home.html', 'about.html', 'contact.html']

// ul tag
let linkList = document.createElement('ul');
linkList.className = 'linkList';
leftNav.appendChild(linkList);

// li tag
for (let i = 0; i < linksArray.length; i++) {
    let pageLinks = document.createElement('li');
    pageLinks.className = 'pageLinks';
    pageLinks.innerHTML = `<a href='${linkSrc[i]}'>${linksArray[i]}</a>`;
    linkList.appendChild(pageLinks);
}

// right nav div
let rightNav = document.createElement('div');
rightNav.className = 'rightNav';
navbarTag.appendChild(rightNav)

//nav buttons starts here
buttonText = ['Login', 'Sign Up'];

for (let i = 0; i < buttonText.length; i++) {
    let navBtns = document.createElement('button');
    navBtns.className = 'navBtns';
    navBtns.innerText = buttonText[i];
    rightNav.appendChild(navBtns);
}


// Hero Section starts here
let heroSection = document.createElement('section');
heroSection.className = 'heroSection';
root.appendChild(heroSection);


// hero title starts here
let heroTitle = document.createElement('h1');
heroTitle.className = 'heroTitle';
heroTitle.innerText = 'Need Something Tasty?';
heroSection.appendChild(heroTitle);

//hero subtitle starts here
let heroSubtitle = document.createElement('h2');
heroSubtitle.className = 'heroSub';
heroSubtitle.innerText = "Cheatit - The Pakistan's best food delivery service to recover your energy :)";
heroSection.appendChild(heroSubtitle);
