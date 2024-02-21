// // let button = document.getElementsByTagName('button')[0]
// // function raphy() {
// //     console.log('hello');
// // }


// let ul= document.getElementById('shalom');
// let chris= 1
// function addline () {
//    let li= document.createElement('li')
//    li.textContent= `line number ${chris}`
//    ul.appendChild(li) 
//    chris++
// }

// let button2= document.getElementById('button')
// button2.addEventListener('click',Respondmouseover)

// let changeP= document.getElementById('onchange')
// function e (params) {
//     changeP.textContent = e.target.valou
// }

// let personform = document.forms[0]
// let personform2 = document.forms.personform
// let elements = personform.elements
// let age = elements.age
// let ageValue = age.value 
// ageValue = 50
// console.log(ageValue);

function sayHello() {
    alert('Hello!!!')
}
let cake = document.getElementById('cake')
cake.addEventListener('click',sayHello)
cake.addEventListener('click',()=>{
console.log('cheesecake');
})
