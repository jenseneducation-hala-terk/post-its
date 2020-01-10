const notes = document.querySelectorAll('.post-it')
for(let note of notes){
    const editBtn = note.querySelector(".edit-btn")
    editBtn.addEventListener("click", () => {
        note.querySelector(".edit-form").classList.toggle("hidden")
        note.querySelector(".content").classList.toggle("hidden")
    })
}
