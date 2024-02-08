// function sayHi(phrase, who) {
//     alert(phrase+', '+ who );
// }
// 'arrow function'
// const Sayhi= (phrase,who) => {
//     alert(phrase +', '+ who);
// }

// setTimeout(sayHi,5000,"hello","john");


// setTimeout((phrase, who) => {
//     alert(phrase+', '+ who );

// }, 5000,"hello","sarah");

// let sonthing =confirm  ( 'do you want to study in friday');
// if (somthing) {
//     setTimeout(() => {
//       alert ('you said yes')  
//     },5000);
// } else {
//     function saidNo () {
//         alert('you said no')
//     }

//     setTimeout(saidNo, 5000)
// }


let counter=0
setInterval(() => {
    console.log(counter);
    counter++
}, 3000);
