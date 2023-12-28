// variable declear start
const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");
// variable declear end

// show notes funttion start
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes()
// show notes funttion end

// local Storege function start 
function updateStorege() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}
// local Storege function end

// notes handeling javaScirpt start
createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.classList = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorege()
    } else if (e.target.tagName === "p") {
        notes = document.querySelectorAll("input-box");
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorege();
            }
        })
    }
})
// notes handeling javaScirpt ene