// Module to create map section
const renderMap = () => {
    const containerDiv6 = document.createElement("div");
    containerDiv6.classList.add("container");

    const mapDiv = document.createElement("div");
    mapDiv.setAttribute("id", "map-container-google-11");
    mapDiv.setAttribute("class", "z-depth-1-half map-container-6");

    const mapFrame = document.createElement("iframe");
    mapFrame.setAttribute("height", "400");
    mapFrame.setAttribute("width", "100%");
    mapFrame.setAttribute("src", "https://maps.google.com/maps?q=lakeside%20mall&t=&z=13&ie=UTF8&iwloc=&output=embed");
    mapFrame.setAttribute("frameborder", "0");
    mapFrame.setAttribute("style", "border:0");
    mapFrame.setAttribute("allowfullscreen", "");

    // append mapFrame to mapDiv
    mapDiv.appendChild(mapFrame);

    // append mapDiv to containerDiv6
    containerDiv6.appendChild(mapDiv);

    // Add map section to body
    document.querySelector(".content").appendChild(containerDiv6);
}

export default renderMap;