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
**Use post to send data and get a respond the server received it**

Added a `sendNotesToServer` button that clicking it sends the notes to the server, and the server sends back a respond.

Notes are not saved yet, and refreshing the page / restarting the server side will start over.
