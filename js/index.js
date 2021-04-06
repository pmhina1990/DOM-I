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



const navBar = document.querySelector('nav')
const navA = document.querySelectorAll('nav a')
navA[0].textContent = siteContent['nav']['nav-item-1']
navA[1].textContent = siteContent['nav']['nav-item-2']
navA[2].textContent = siteContent['nav']['nav-item-3']
navA[3].textContent = siteContent['nav']['nav-item-4']
navA[4].textContent = siteContent['nav']['nav-item-5']
navA[5].textContent = siteContent['nav']['nav-item-6']

let imgLogo = document.getElementById("cta-img");
imgLogo.setAttribute('src', siteContent["cta"]["img-src"])
const header = document.querySelector('h1')
header.innerHTML = siteContent['cta']['h1'].split(' ').join('<br>')
const button = document.querySelector('button')
button.textContent = siteContent['cta']['button']

const mainContentPara = document.querySelectorAll('.main-content p')
const mainContentHtext = document.querySelectorAll('.main-content h4')
const mainContentImg = document.getElementById('middle-img')

mainContentHtext[0].textContent = siteContent['main-content']['features-h4']
mainContentHtext[1].textContent = siteContent['main-content']['about-h4']
mainContentHtext[2].textContent = siteContent['main-content']['services-h4']
mainContentHtext[3].textContent = siteContent['main-content']['product-h4']
mainContentHtext[4].textContent = siteContent['main-content']['vision-h4']

mainContentPara[0].textContent = siteContent['main-content']['features-content']
mainContentPara[1].textContent = siteContent['main-content']['about-content']
mainContentPara[2].textContent = siteContent['main-content']['services-content']
mainContentPara[3].textContent = siteContent['main-content']['product-content']
mainContentPara[4].textContent = siteContent['main-content']['vision-content']

mainContentImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

 const contactHtext = document.querySelector('.contact h4')
 const contactPara = document.querySelectorAll('.contact p')

 contactHtext.textContent = siteContent['contact']['contact-h4']
 contactPara[0].innerHTML = siteContent['contact']['address'].split('t S').join('t <br> S')
 contactPara[1].textContent = siteContent['contact']['phone']
 contactPara[2].textContent = siteContent['contact']['email']

 const copyRights = document.querySelector('footer p')
 copyRights.textContent = siteContent['footer']['copyright']

 for(var i = 0; i < navA.length; i++ ){
   navA[i].style.color = 'green'
   
 }
 const extraNavOne = document.createElement('a')
 extraNavOne.textContent = 'Our DOM Instructors'
const extraNavTwo = document.createElement('a')
extraNavTwo.textContent = 'Other resources'
const extraSauce = [extraNavOne,extraNavTwo];
for(var i=0;i<extraSauce.length;i++){
  extraSauce[i].style.color = 'green'
}

navBar.appendChild(extraNavOne)
navBar.prepend(extraNavTwo)

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])