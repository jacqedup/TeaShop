// Module to create about section
const renderAbout = () => {
  const containerDiv3 = document.createElement("div");
  containerDiv3.setAttribute("class", "container text-center");
  
  const heading = document.createElement("h1");
  heading.setAttribute("id", "about");
  heading.innerHTML = "About";
  
  // append heading to containerDiv3
  containerDiv3.appendChild(heading);
  
  function addParagraph(text) {
    const newParagraph = document.createTextNode(text);
    return newParagraph;
  }
  
  const p1 = addParagraph("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt in dolor quis tempus. Etiam neque tortor, condimentum ut bibendum et, consequat non ex. Mauris ullamcorper viverra luctus. Nullam pretium consectetur purus et interdum. Nulla fermentum lorem mattis, semper eros tristique, pulvinar nunc. Nam vestibulum felis leo, in maximus dui pretium vitae. Suspendisse sollicitudin justo id nisi varius, vel finibus nisl porta. Vestibulum et dolor sed urna pretium porttitor vitae pulvinar libero. Maecenas ornare odio at enim laoreet pharetra. Vivamus eu consectetur dui. Maecenas mollis tristique faucibus. In pharetra dui nec velit bibendum, sit amet tristique dolor tempus.");
  
  const p2 = addParagraph("Cras hendrerit arcu vitae tellus porttitor convallis. Nulla maximus faucibus sem at volutpat. Donec viverra eu risus et convallis. Maecenas quis vehicula ligula, ac viverra nulla. Nulla faucibus a nunc nec feugiat. Nam luctus urna in dui volutpat placerat. Morbi bibendum scelerisque metus, sed vestibulum leo semper et. Nam lobortis sapien et nibh varius, sed lobortis justo luctus. Vivamus ornare orci tortor, ut aliquet purus tincidunt vel. Quisque vel rhoncus diam.");
  
  const br = document.createElement("br");
  
  // append paragraphs to containerDiv3
  containerDiv3.appendChild(p1);
  containerDiv3.appendChild(br);
  containerDiv3.appendChild(p2);
   
  // Add about section to body
  document.querySelector(".content").appendChild(containerDiv3);
}

export default renderAbout;

