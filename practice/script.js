let title = document.querySelector('#title')

title.textContent = 'hello'

let qqq = document.getElementsByTagName('body')[0]
let p  = document.createElement('p')
p.innerText ='ariel'
p.classList.add('text')
qqq.appendChild(p)
// title.remove()


title.style.color='red';

let Myform=document.forms.personform
let age = Myform.elements.age.value
console.log(Myform);

for (let index = 0; index < 3; index++) {
   console.log('hello!!!');   
}

for (let index = 0; index < array.length; index++) {
console.log(ne);    
}

let counter = 0
while (counter < names.length){
    counter++
    console.log(counter);
}