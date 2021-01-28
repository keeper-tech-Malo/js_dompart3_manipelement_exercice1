//1 
let exo1 = document.querySelector('h2')
console.log(exo1.innerText);

//2
exo1.innerText = 'Exercice 1 <b>test</b>'
// exo1.innerHTML = 'Exercice 1 <b>test</b>'

//3
let exo3 = exo1.nextElementSibling
exo3.innerText = `exo1.innerText = 'Exercice 1 <b>test</b>'`
// exo3.innerText = exo1.innerText

//4
let exo4 = document.querySelector('#users').id

let exo4bis = document.querySelectorAll('section')[0]
console.log(exo4bis.getAttribute('id'));
console.log(exo4);

//5
let exo5 = document.querySelectorAll('h1')[0]
console.log(exo5.classList);
console.log(exo5.className);
console.log(exo5.getAttribute('class'));

//6
let exo6 = document.querySelectorAll('h1')
let arrayExo6 = Array.from(exo6)

arrayExo6.forEach(el => {
    console.log(el.className);
});

//7
let exo7 = document.querySelector('input')
console.log(exo7.attributes);

//8
let exo8 = document.querySelector('input')
console.log(exo8.getAttribute('type'));


//9
let exo9 = document.querySelector('input#inputPassword3')
exo9.setAttribute('type', 'password')

//10
let exo10 = document.querySelectorAll('input')[0]
exo10.setAttribute('type', 'color')




