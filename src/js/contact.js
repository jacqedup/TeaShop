// Module to create contact section
const renderContact = () => {
  const containerDiv5 = document.createElement("div");
  containerDiv5.classList.add("container");

  const contactHeading = document.createElement("h1");
  contactHeading.classList.add("text-center");
  contactHeading.setAttribute("id", "contact");
  contactHeading.innerHTML = "Contact";

  const contactRow = document.createElement("div");
  contactRow.classList.add("row");

  const contactRowItem = document.createElement("div");
  contactRowItem.setAttribute("class", "col-12 text-center");
  contactRowItem.setAttribute("style", "padding-top: 10px;");

  function addParagraph(text) {
    const newParagraph = document.createTextNode(text);
    return newParagraph;
  }

  function addBreak() {
    const br = document.createElement("br");
    return br;
  }

  const p3 = addParagraph("1234 Tea Shop Ave.");
  const br1 = addBreak();
  const p4 = addParagraph("Metairie, LA 70002");
  const br2 = addBreak();

  const telephone = document.createElement("a");
  telephone.setAttribute("href", "tel:1-504-555-5555");
  telephone.innerHTML = "1-504-555-5555";

  const br3 = addBreak();
  const p5 = addParagraph("Monday-Thursday: 11am - 9pm");
  const br4 = addBreak();
  const p6 = addParagraph("Friday-Sunday: 11am - 10pm");

  // append contactHeading to containerDiv5
  containerDiv5.appendChild(contactHeading);

  // append paragraphs, br and telephone to contactRowItem
  contactRowItem.appendChild(p3);
  contactRowItem.appendChild(br1);
  contactRowItem.appendChild(p4);
  contactRowItem.appendChild(br2);
  contactRowItem.appendChild(telephone);
  contactRowItem.appendChild(br3);
  contactRowItem.appendChild(p5);
  contactRowItem.appendChild(br4);
  contactRowItem.appendChild(p6);

  // append contactRowItem to contactRow
  contactRow.appendChild(contactRowItem);

  // append constactRow to constainerDiv5
  containerDiv5.appendChild(contactRow);

  // Add contact section to body
  document.querySelector(".content").appendChild(containerDiv5);
}

export default renderContact;