// // // let x=10
// // // let y=20
 
// // // if (x<y) {
// // //    console.log('x bigger then y'); 
// // // } else { 
// // //    console.log('y bigger then x'); 
// // // }



// // let newDog = 'Chihuahua'
// // console.log(newDog.length);
// // // newDog.toUpperCase()
// // console.log(newDog. toLowerCase() );
// // console.log(newDog.toUpperCase()
// // );

// // if (newDog == 'Chihuahua') {
// //     console.log('I love Chihuahua ,it`s my favorite dog breed');
// // } else {
// //     console.log('I dont care, I prefer cats');
// // }

// // let pew = prompt('hi,write a num')
// // // console.log(pew);
// // if (pew % 2==0 ) {
// //     console.log(pew + ' is an even number');
// // } else {
// //     console.log(pew + ' is an odd number');
// // }



// // const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000",];

// // if (users.length==0) {
// //     console.log('no one is online');
// // } else if (users.length==1) {
// //     console.log(users[0],'is online');
// // } else if (users.length==2) {
// // console.log(users[0] , users[1]);
// // }else{ 
// // console.log(users[0],users[1],'and',users.length-2,'more online');
// // }

// // const people = ["Greg", "Mary", "Devon", "James"];
// // people.shift()
// // people[2]="Jason"
// // people.push("Ariel")
// // people.indexOf("Mary")
// // let bo = people.slice(1,3)
// // let p = people.indexOf("foo")
 
// // let last = people[people.length-1]
// // console.log(last);


// const eading1 = document.querySelector('h1')
// console.log(eading1);

// const eading2 = document.getElementById('lastP')
// eading2.remove();

// const eading3 = document.getElementById('h2')
// eading3.addEventListener('click',()=>{
// eading3.style.backgroundColor = "red";
// })

// const eading4 = document.getElementById('h3')
// eading4.addEventListener('click',()=>{
// eading4.style.display = 'none' 
// })

// const eading5 = document.getElementById('bold')
// eading5.addEventListener('click',()=>{
// const Ptags = document.getElementsByTagName('p')
// for (const Ptag of Ptags) {
// Ptag.style.fontWeight = "900";

// }
// })

const form = document.querySelector('form')

const p1= document.getElementById('fname')
const p2= document.getElementById('lname')
const p3= document.getElementById('submit')

const Fname=document.getElementsByName("firstname")
const Lname=document.getElementsByName("lastname")

form.addEventListener('submit',(event)=>{
event.preventDefault()
})

console.log(Fname);

