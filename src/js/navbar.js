// Module to create navbar
const renderNavbar = () => {
  const containerDiv = document.createElement("div");
  containerDiv.classList.add("container");
  
  const nav = document.createElement("nav");
  nav.setAttribute("class", "navbar navbar-expand-lg navbar-light bg-light");
  
  // append nav to containerDiv
  containerDiv.appendChild(nav);
  
  const brand = document.createElement("a");
  brand.setAttribute("class", "navbar-brand text-success");
  brand.setAttribute("href", "#");
  brand.innerHTML = "Tea Shop";
  
  // append brand to nav
  nav.appendChild(brand);
  
  const navBtn = document.createElement("button");
  navBtn.classList.add("navbar-toggler");
  navBtn.setAttribute("type", "button");
  navBtn.setAttribute("data-toggle", "collapse");
  navBtn.setAttribute("data-target", "#navbarNav");
  navBtn.setAttribute("aria-controls", "navbarNav");
  navBtn.setAttribute("aria-expanded", "false");
  navBtn.setAttribute("aria-label", "Toggle navigation");
  const navBtnSpan = document.createElement("span");
  navBtnSpan.classList.add("navbar-toggler-icon");
  
  // append navBtnSpan to navBtn
  navBtn.appendChild(navBtnSpan);
  // append navBtn to nav
  nav.appendChild(navBtn);
  
  const navDiv = document.createElement("div");
  navDiv.setAttribute("class", "collapse navbar-collapse");
  navDiv.setAttribute("id", "navbarNav");
  
  // append navDiv to nav
  nav.appendChild(navDiv);
  
  const navUl = document.createElement("ul");
  navUl.classList.add("navbar-nav");
  
  // append navUl to navDiv
  navDiv.appendChild(navUl);
  
  const aboutLi = document.createElement("li");
  aboutLi.setAttribute("class", "nav-item active");
  const aboutAnchor = document.createElement("a");
  aboutAnchor.classList.add("nav-link");
  aboutAnchor.setAttribute("href", "#about");
  aboutAnchor.innerHTML = "About";
  const aboutSpan = document.createElement("span");
  aboutSpan.classList.add("sr-only");
  aboutSpan.innerHTML = "(current)";
  
  // append aboutSpan to aboutAnchor
  aboutAnchor.appendChild(aboutSpan);
  // append aboutAnchor to aboutLi
  aboutLi.appendChild(aboutAnchor);
  // append aboutLi to navUl
  navUl.appendChild(aboutLi);
  
  const menuLi = document.createElement("li");
  menuLi.classList.add("nav-item");
  const menuAnchor = document.createElement("a");
  menuAnchor.classList.add("nav-link");
  menuAnchor.setAttribute("href", "#menu");
  menuAnchor.innerHTML = "Menu";
  
  // append menuAnchor to menuLi
  menuLi.appendChild(menuAnchor);
  // append menuLi to navUl
  navUl.appendChild(menuLi);
  
  const contactLi = document.createElement("li");
  contactLi.classList.add("nav-item");
  const contactAnchor = document.createElement("a");
  contactAnchor.classList.add("nav-link");
  contactAnchor.setAttribute("href", "#contact");
  contactAnchor.innerHTML = "Contact";
  
  // append contactAnchor to contactLi
  contactLi.appendChild(contactAnchor);
  // append contactLi to navUl
  navUl.appendChild(contactLi);
  
  const iconUl = document.createElement("ul");
  iconUl.setAttribute("class", "navbar-nav ml-auto");
  
  // append iconUl to navDiv
  navDiv.appendChild(iconUl);
  
  const igLi = document.createElement("li");
  const igAnchor = document.createElement("a");
  igAnchor.setAttribute("href", "http://instagram.com");
  const igI = document.createElement("i");
  igI.setAttribute("class", "fab fa-instagram text-success");
  
  // append igI to igAnchor
  igAnchor.appendChild(igI);
  // append igAnchor to igLi
  igLi.appendChild(igAnchor);
  // append igLi to iconUl
  iconUl.appendChild(igLi);
  
  const fbLi = document.createElement("li");
  const fbAnchor = document.createElement("a");
  fbAnchor.setAttribute("href", "http://facebook.com");
  const fbI = document.createElement("i");
  fbI.setAttribute("class", "fab fa-facebook-square text-success");
  
  // append fbI to fbAnchor
  fbAnchor.appendChild(fbI);
  // append fbAnchor to fbLi
  fbLi.appendChild(fbAnchor);
  // append fbLi to iconUl
  iconUl.appendChild(fbLi);
  
  // Add container to body
  document.querySelector(".content").appendChild(containerDiv);
}

export default renderNavbar;