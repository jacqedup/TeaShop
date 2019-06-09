// Module to create menu section
const renderMenu = () => {
    const containerDiv4 = document.createElement("div");
    containerDiv4.classList.add("container");
    
    const menuHeading = document.createElement("h1");
    menuHeading.classList.add("text-center");
    menuHeading.setAttribute("id", "menu");
    menuHeading.innerHTML = "Menu";
    
    // add menuHeading to containerDiv4
    containerDiv4.appendChild(menuHeading);
    
    const hr = document.createElement("hr");
    
    // add hr to containerDiv4
    containerDiv4.appendChild(hr);
    
    const rowContainer = document.createElement("div");
    rowContainer.classList.add("container");
    
    function addRow() {
      const row = document.createElement("div");
      row.classList.add("row");
      return row;
    }
    
    function addMenuItem(imgSrc, title, description) {
      const menuItemDiv = document.createElement("div");
      menuItemDiv.classList.add("col-md-4");
    
      const image = document.createElement("IMG");
      image.setAttribute("src", imgSrc);
      image.setAttribute("class", "rounded-circle mx-auto d-block");
    
      const menuTitle = document.createElement("h3");
      menuTitle.setAttribute("class", "text-center text-success");
      menuTitle.innerHTML = title;
    
      const menuDescription = document.createElement("p");
      menuDescription.classList.add("text-center");
      menuDescription.innerHTML = description;
    
      // append image to menuItemDiv
      menuItemDiv.appendChild(image);
    
      // append menuTitle to menuItemDiv
      menuItemDiv.appendChild(menuTitle);
    
      // append menuDescription to menuItemDiv
      menuItemDiv.appendChild(menuDescription);
    
      return menuItemDiv;
    }
    
    const row1 = addRow();
    
    const greenTea = addMenuItem("../src/images/aromatic-close-cup-1417945.jpg", "Green Tea", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sem rhoncus urna iaculis faucibus");
    const oolongTea = addMenuItem("../src/images/aromatic-close-cup-1417945.jpg", "Oolong Tea", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sem rhoncus urna iaculis faucibus");
    const blackTea = addMenuItem("../src/images/aromatic-close-cup-1417945.jpg", "Black Tea", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sem rhoncus urna iaculis faucibus");
    
    // append greenTea to row1
    row1.appendChild(greenTea);
    
    // append oolongTea to row1
    row1.appendChild(oolongTea);
    
    // append blackTea to row1
    row1.appendChild(blackTea);
    
    // append row1 to rowContainer
    rowContainer.appendChild(row1);
    
    const row2 = addRow();

    const greenMilkTea = addMenuItem("../src/images/beverage-caffeine-cappuccino-1025493.jpg", "Green Milk Tea", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sem rhoncus urna iaculis faucibus");
    const oolongMilkTea = addMenuItem("../src/images/beverage-caffeine-cappuccino-1025493.jpg", "Oolong Milk Tea", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sem rhoncus urna iaculis faucibus");
    const blackMilkTea = addMenuItem("../src/images/beverage-caffeine-cappuccino-1025493.jpg", "Black Milk Tea", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sem rhoncus urna iaculis faucibus");
    
    // append greenMilkTea to row2
    row2.appendChild(greenMilkTea);
    
    // append oolongMilkTea to row2
    row2.appendChild(oolongMilkTea);
    
    // append blackMilkTea to row2
    row2.appendChild(blackMilkTea);
    
    // append row2 to rowContainer
    rowContainer.appendChild(row2);

    const row3 = addRow();

    const matchaGreenTea = addMenuItem("../src/images/aroma-beverage-cup-206713.jpg", "Matcha Green Tea", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sem rhoncus urna iaculis faucibus");
    const thaiTea = addMenuItem("../src/images/aroma-beverage-cup-206713.jpg", "Thai Tea", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sem rhoncus urna iaculis faucibus");
    const gingerTea = addMenuItem("../src/images/aroma-beverage-cup-206713.jpg", "Ginger Tea", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sem rhoncus urna iaculis faucibus");

    // append matchaGreenTea to row3
    row3.appendChild(matchaGreenTea);

    // append thaiTea to row3
    row3.appendChild(thaiTea);

    // append gingerTea to row3
    row3.appendChild(gingerTea);

    // append row3 to rowContainer
    rowContainer.appendChild(row3);

    // append rowContainer to containerDiv4
    containerDiv4. appendChild(rowContainer);

    // Add menu section to body
    document.querySelector(".content").appendChild(containerDiv4);    
}

export default renderMenu;