let notes = []

function saveTemporarily(){
    let title = document.getElementById("newTitle").textContent;
    let content = document.getElementById("newContent").textContent;
    let note = { title, content }
    console.log(note)
    notes.push(note);
    showNotes();
}
function showNotes(){
    let notesList = "";
    for(let i = 0; i < notes.length; i++) {
        notesList += `
        <li>
            <a>
                <h2>${notes[i].title}</h2>
                <p>${notes[i].content}</p>
            </a>
        </li>`;

    }
    document.getElementById("allNotes").innerHTML = notesList
}