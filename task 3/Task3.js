const fontLink = document.createElement("link");
fontLink.href = "https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap";
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);

const div = document.createElement("div");
div.className = "bimage d-flex flex-column justify-content-center";

div.style.backgroundImage = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/codingbg.png')";
div.style.backgroundSize = "cover";
div.style.height = "100vh";
div.style.padding = "30px";
div.style.borderColor = "#48ee59";
div.style.borderWidth = "5px";
div.style.borderStyle = "solid";
div.style.display = "flex";
div.style.flexDirection = "column";
div.style.justifyContent = "center";

const heading = document.createElement("h1");
heading.className = "top";
heading.textContent = "Code is more than some bytes in a file";

heading.style.color = "white";
heading.style.fontFamily = "'Bree Serif', serif";
heading.style.backgroundColor = "#00000080";
heading.style.padding = "15px";
heading.style.fontSize = "30px";

div.appendChild(heading);

document.body.appendChild(div);