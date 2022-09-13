import data from "./data.js";


const list = document.getElementById("list");
const title = document.getElementById('title');
const paragraph = document.getElementById('paragraph');
const image = document.getElementById('image');

data.forEach(item => {
    const listElement = document.createElement('li');
    const hrefElement = document.createElement('a');
    hrefElement.textContent = item.title;
    listElement.appendChild(hrefElement);
    hrefElement.addEventListener('click', () => {
        title.textContent = item.title;
        paragraph.textContent = item.description;
        image.src = item.img;
    })
    list.appendChild(listElement);
})
