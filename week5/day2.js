const div1 = document.querySelector("div");
console.log(div1);
const list1 = document.getElementsByClassName("list")[0].lastElementChild;
list1.textContent = "Richard";
const list2 = document.getElementsByTagName("li")[3];
list2.remove(list2);
const ulLists = document.querySelectorAll(".list");
console.log(ulLists);

for (let i = 0; i < ulLists.length; i++) {
  const firstNameElement = ulLists[i].querySelector("li");
  console.log(firstNameElement.textContent);
  firstNameElement.textContent = "ariel"
}


// const div = document.querySelector("div");
// div.style.background = "blue";
// div.style.padding = "5px";
// const john = document.getElementsByTagName("li")[0];
// john.style.display = "none";
// const pete = document.getElementsByTagName("li")[1];
// pete.style.border = "solid black 5px";
// pete.style.fontSize = "25px";
