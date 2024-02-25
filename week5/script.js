let personform = document


let nameInput = document.getElementById('name')
let nameResult = document.getElementById('nemeResult')

nameInput.addEventListener('change',(event)=>{
    nameResult.textContent = event.target.value
console.log(event.target.value);
})

personform.addEventListener('submit',(e)=>{
    console.log(e);
})