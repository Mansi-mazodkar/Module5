let createDiv = document.createElement("div");
document.body.appendChild(createDiv);
createDiv.classList.add("background");

let heading =document.createElement("h1");
heading.textContent="welcome to the book world!";
heading.style.color="white";
heading.style.textAlign="center";
createDiv.appendChild(heading);

let para= document.createElement("p");
para.textContent="This book will take you on a journey through imagination and wisdom";
para.style.color="white";
para.style.textAlign="center";
para.style.marginTop="10px";
createDiv.appendChild(para);

const Heading= document.createElement("h4");
Heading.textContent="Read Book";
Heading.style.color="#ffcc00";
Heading.style.textAlign="center";
Heading.style.marginTop="30px";
createDiv.appendChild(Heading);

const buttonn= document.createElement("div");
buttonn.style.textAlign="center";
createDiv.appendChild(buttonn);

const skip= document.createElement("p");
skip.textContent="Skip";
skip.style.color="#ddd";
skip.style.textDecoration="underline";
skip.style.textAlign="center";
createDiv.appendChild(skip);