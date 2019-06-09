// Module to create footer section
const renderFooter = () => {
    const containerDiv7 = document.createElement("div");
    containerDiv7.classList.add("container");

    const footer = document.createElement("footer");
    footer.setAttribute("class", "page-footer font-small blue pt-1");

    const footerDiv = document.createElement("div");
    footerDiv.setAttribute("class", "footer-copyright text-center py-2");
    footerDiv.innerHTML = "© 2018 Copyright: Tea Shop";

    // append footerDiv to footer
    footer.appendChild(footerDiv);

    // append footer to containerDiv7
    containerDiv7.appendChild(footer);

    // Add footer section to body
    document.querySelector(".content").appendChild(containerDiv7);
}

export default renderFooter;