# IntroToServer - Introduction to server side in JS
This is aimed to be tought in [AliceCode](https://alicecode.org/en) and is based
 on [The Coding Train course](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X) parts 2.1-2.4.

Original css file was taken from [here](https://code.tutsplus.com/tutorials/create-a-sticky-note-effect-in-5-easy-steps-with-css3-and-html5--net-13934)

## Stage 1 - Initialize Server Side
**Learn how to set up the project and run the server side js**

Requirements:
1. Install nodeJS. Check it worked by running the command `node -v` and receiving the version you installed.
1. Run `npm init` to initialize your nodeJS project.
    1. Press `Enter` for all prompt questions, and in the end type `yes`:
    ```
      PS C:\IntroServer> npm init
      This utility will walk you through creating a package.json file.
      It only covers the most common items, and tries to guess sensible defaults.
      ...
      Is this OK? (yes) yes
    ```
1. Run `npm install express`. We will use this for our server side.
1. Use the code in this commit.
1. Start the server by running the command `node index.js` in the terminal
1. Open your browser and type the url: `localhost:3000`
1. You should see the sticky notes website!
    1. For client-side changes, refresh the browser
    1. For server-side changes, restart the host (via the terminal) 


## Stage 2 - Send Data To Server
**Use 'post' to send data and get a respond from the server**

Added a `sendTheNoteToServer` button that clicking it sends the note to the server, and the server sends back a response: List of all the notes it got!

This list is displayed in the html in order to emphasize the difference between restarting the client side and restarting the server side.

The notes are not saved yet, and restarting the server side will clear them.

(At this stage I also did some refactoring to increase readability)

### Give it a try! (Try predicting the correct answer before checking)
1. Refresh the client side:
    1. Start the server (`node index.js`) and start the client (`localhost:3000`)
    1. Add a note: click **saveTemporarily** -> click **sendTheNoteToServer**.
    1. Add another note! You now have 2 notes.
    1. Refresh the page (= restart the client)
    1. Add a note! How many notes are in each list?

1. Refresh the server side:
    1. Start the server (`node index.js`) and start the client (`localhost:3000`)
    1. Add a note: click **saveTemporarily** -> click **sendTheNoteToServer**.
    1. Add another note! You now have 2 notes.
    1. Restart the server (Ctrl+C -> `node index.js`)
    1. Add a note! How many notes are in each list?