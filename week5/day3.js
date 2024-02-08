// let button = document.getElementsByTagName('button')[0]
// function raphy() {
//     console.log('hello');
// }


let ul= document.getElementById('shalom');
let chris= 1
function addline () {
   let li= document.createElement('li')
   li.textContent= `line number ${chris}`
   ul.appendChild(li) 
   chris++
}

let button2= document.getElementById('button')
button2.addEventListener('click',Respondmouseover)

let changeP= document.getElementById('onchange')
function e (params) {
    changeP.textContent = e.target.valou
}
