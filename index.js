const { app, BrowserWindow } = require( 'electron' );
const path = require('path')

function createWindow () {
    // Create the browser window.
    const win = new BrowserWindow( {
        // fullscreen: true,
        height: 10000,
        width: 10000,
        icon: path.join(__dirname, 'icon.png'),
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            webviewTag: true
        }
    } );

    // win.maximize()

    // and load the index.html of the app.
    win.loadFile( 'index.html' );
}

app.whenReady().then( createWindow );
