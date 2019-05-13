const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};
//Header + Nav
const navLinks = document.querySelectorAll('header nav a');
navLinks[0].textContent = 'Services';
navLinks[0].style.color = 'green';
navLinks[1].textContent = 'Product';
navLinks[1].style.color = 'green';
navLinks[2].textContent = 'Vision';
navLinks[2].style.color = 'green';
navLinks[3].textContent = 'Features';
navLinks[3].style.color = 'green';
navLinks[4].textContent = 'About';
navLinks[4].style.color = 'green';
navLinks[5].textContent = 'Contact';
navLinks[5].style.color = 'green';


//adding new <a> tags 
const newNavLinks = document.querySelector('nav');

const newA1 = document.createElement('a')
newA1.textContent = 'Careers';
newA1.style.color = 'green';

const newA2 = document.createElement('a')
newA2.textContent = 'Home';
newA2.style.color = 'green';

newNavLinks.appendChild(newA1);
newNavLinks.prepend(newA2);

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// cta class
let h1Txt = document.querySelector('.cta .cta-text h1');
h1Txt.textContent = 'DOM Is Awesome';

let buttonTxt = document.querySelector('.cta .cta-text button');
buttonTxt.textContent = 'Get Started';

let roundPic = document.getElementById("cta-img");
roundPic.setAttribute('src', siteContent["cta"]["img-src"]);

// main content
let topH4 = document.querySelectorAll('.top-content h4');
topH4[0].textContent = 'Features';
topH4[1].textContent = 'About';

let topPara = document.querySelectorAll('.top-content p');
topPara[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
topPara[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

let midPic = document.getElementById("middle-img");
midPic.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let botH4 = document.querySelectorAll('.bottom-content h4');
botH4[0].textContent = 'Services';
botH4[1].textContent = 'Product';
botH4[2].textContent = 'Vision';

let botPara = document.querySelectorAll('.bottom-content p');
botPara[0].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
botPara[1].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
botPara[2].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

// contact
let contactH4 = document.querySelectorAll('.contact h4');
contactH4[0].textContent = 'Contact';

let contactPara = document.querySelectorAll('.contact p');
contactPara[0].textContent = '123 Way 456 Street Somewhere, USA'
contactPara[1].textContent = '1 (888) 888-8888'
contactPara[2].textContent = 'sales@greatidea.io'

//footer
let foot = document.querySelectorAll('footer p');
foot[0].textContent = 'Copyright Great Idea! 2018';

