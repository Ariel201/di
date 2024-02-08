//alert`hello`

// let conf = confirm(`are you learning`)
// if(conf == true) {
//     alert(`good job!`)
// } else{
//     alert`not good!`
// }

let prop = prompt(`what is your favorite number?`)
if (! (isNaN (prop))) {
    if(prop == 7) {
        alert(`Hi nadav!`)
    } else if (prop == 5) {
        alert`bye nadav`
    } else {
        alert `hey guest`
    }
} else {
    alert`not a number`
}

