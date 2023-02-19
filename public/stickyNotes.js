let notes = []
let notesCounter = 0

function saveTemporarily(){
    let title = document.getElementById("newTitle").textContent;
    let content = document.getElementById("newContent").textContent;
    let note = { title, content }
    console.log(note)
    notes.push(note);
    showNotes();

    // just for asthetics
    notesCounter++;
    document.getElementById("newTitle").textContent = "Title #" + ( notesCounter + 1 );
    document.getElementById("newContent").textContent = "Text Content #" + ( notesCounter + 1 );

    // also for asthetics, to avoid sending empty list
    document.getElementById("sendToServer").disabled = false; 
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

// sendNotesToServer, written with '.then()'
function sendNotesToServer(){
    const data = {"notes": notes}
    options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch('api/', options).then( response => {
        response.json().then(json=>{
            console.log(json);
        })
    });
}

// sendNotesToServer, written with 'async' and 'await'
async function sendNotesToServerAsync(){
    const data = {"notes": notes}
    options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const fetch_response = await fetch('api/', options)
    const json = await fetch_response.json();
    console.log(json);
}