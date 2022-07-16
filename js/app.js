function changeColor(details) {
    details[`target`][`style`][`backgroundColor`] = `orange`;
}

let head = document.getElementById(`header`);
head.addEventListener(`click`, changeColor);

function doubleClick(details) {
    details[`target`][`outerHTML`] = `<a href="https://google.com">Google</a>`;
}

let name_id = document.getElementById(`name`);
name_id.addEventListener(`dblclick`, doubleClick);

function mouseOver(details) {
    let counter = 0;
    let array = [`one`,`two`,`three`];
for(counter = 0; counter < array.length; counter++){
    details[`target`][counter][`outerHTML`] = array[counter] + details[`target`][counter][`outerHTML`];
}
    
}
let city_id = document.getElementById(`city`);
city_id.addEventListener(`mouseover`, mouseOver);