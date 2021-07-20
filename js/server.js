const express = require('express');
const path = require('path');

let { PythonShell } = require('python-shell')

const app = express();

app.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});

app.get('/', (req, res) => {
    let pyshell = new PythonShell('python/main.py');
    // sends a message to the Python script via stdin
    pyshell.send('hello');

    pyshell.on('message', function (message) {
        // received a message sent from the Python script (a simple "print" statement)
        console.log('Node server received from python script    :', message);

        /// I RAN THESCRIPT AND GOT THE MESSAGE BUT HOW DO  I SENT IT WITH HTML TO  THECLIENT?
    });

    res.sendFile(path.join(__dirname, '../index.html'));
    res.send(`Server is  listening`);
});

app.listen(3000, () => console.log('Example app is listening on port 3000.'));