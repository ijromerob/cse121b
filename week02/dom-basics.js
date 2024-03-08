//adding a new paragraph
const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

//adding a new image
const newImg = document.createElement("img");
newImg.setAttribute("src","https://picsum.photos/200");
newImg.setAttribute("alt","Description of image");
document.body.appendChild(newImg);

//Adding a new section
const newSection = document.createElement("section");
newSection.innerHTML = "<h2>CSE 121b</h2><p>Welcome to Javascript Language</p>"
document.body.appendChild(newSection);

//Another way of doing it
// const newSection = document.createElement("section");
// const newH2 = document.createElement("h2");
// newH2.innerText = "CSE 121b";
// newSection.appendChild(newH2);
// const newP = document.createElement("p");
// newH2.innerText = "Welcome to Javascript Language";
// newSection.appendChild(newP);

// document.body.appendChild(newSection);
