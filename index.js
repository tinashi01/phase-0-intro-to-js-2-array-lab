// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name) {
    return cats.push(name);
}

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    return cats.pop();
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function appendCat(name = "Broom") {
    const newCats = [...cats, name];
    return newCats;
}

function prependCat(name = "Arnold") {
    const newCats1 = [ name, ...cats];
    return newCats1;
}

function removeLastCat() {
    return cats.slice(0, -1);
}

function removeFirstCat() {
    return cats.slice(1);
}