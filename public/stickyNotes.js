let notes = []
let notesCounter = 0
let note = {}

function saveTemporarily(){
    let title = document.getElementById("newTitle").textContent;
    let content = document.getElementById("newContent").textContent;
    note = { title, content }
    console.log(note)
    notes.push(note);
    showNotes(notes, "allLocalNotes");

    // just for asthetics
    notesCounter++;
    document.getElementById("newTitle").textContent = "Title #" + ( notesCounter + 1 );
    document.getElementById("newContent").textContent = "Text Content #" + ( notesCounter + 1 );

    // to force the flow
    document.getElementById("sendToServerBtn").disabled = false; 
    document.getElementById("saveTempBtn").disabled = true; 
}

function showNotes(notes, element_id){
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
    document.getElementById(element_id).innerHTML = notesList
}

async function sendTheNoteToServer(){
    
    document.getElementById("sendToServerBtn").disabled = true; 
    document.getElementById("saveTempBtn").disabled = false; 
    
    options = {
        method: "POST",
        body: JSON.stringify(note),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const fetch_response = await fetch('api/', options)
    const json = await fetch_response.json();
    console.log(json);
    showNotes(json.notes, "allServerNotes");
}