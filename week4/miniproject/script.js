function playTheGame () {
    let conf = confirm(`do you want to play the game?`)
    if (conf == true) {
    let prop = prompt (`pick a number 0-10 `)
    if(! (isNaN (prop))){
        if (prop >=8 && prop <= 18 ) {
        let computerNumber = Math.floor
        }else {
            alert(`sorry,number not in range`)
        }
    }else {
        alert(`sorry,not a number`)
    }
    } else {
        alert (`ok,TY, bye!`)
    }
}