// // let x=10
// // let y=20
 
// // if (x<y) {
// //    console.log('x bigger then y'); 
// // } else { 
// //    console.log('y bigger then x'); 
// // }



// let newDog = 'Chihuahua'
// console.log(newDog.length);
// // newDog.toUpperCase()
// console.log(newDog. toLowerCase() );
// console.log(newDog.toUpperCase()
// );

// if (newDog == 'Chihuahua') {
//     console.log('I love Chihuahua ,it`s my favorite dog breed');
// } else {
//     console.log('I dont care, I prefer cats');
// }

// let pew = prompt('hi,write a num')
// // console.log(pew);
// if (pew % 2==0 ) {
//     console.log(pew + ' is an even number');
// } else {
//     console.log(pew + ' is an odd number');
// }

const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000",];

if (users.length==0) {
    console.log('no one is online');
} else if (users.length==1) {
    console.log(users[0],'is online');
} else if (users.length==2) {
console.log(users[0] , users[1]);
}else{ 
console.log(users[0],users[1],'and',users.length-2,'more online');
}