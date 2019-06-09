// Module to create jumbotron
// Set background image in CSS
const renderJumbotron = () => {
  const containerDiv2 = document.createElement("div");
  containerDiv2.classList.add("container");
  
  const jumbotronDiv = document.createElement("div");
  jumbotronDiv.setAttribute("class", "jumbotron jumbotron-fluid");
  
  // append jumbotronDiv to containerDiv
  containerDiv2.appendChild(jumbotronDiv);
  // Add jumbotron to body 
  document.querySelector(".content").appendChild(containerDiv2);
}

export default renderJumbotron;