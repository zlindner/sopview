const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');
const async = require('async');
const aws = require('aws-sdk');

let mainWindow;
//const textract = new aws.Textract();

const createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            webSecurity: false
        },
        backgroundColor: '#ffffff'
    });

    mainWindow.loadFile(path.join(__dirname, 'build/index.html'));

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    mainWindow.on('ready-to-show', () => {
        mainWindow.show();
        mainWindow.focus();
    });
};

app.on('ready', () => {
    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
    if (mainWindow === null) createWindow();
});

ipcMain.on('load-documents', (event, paths) => {
    let documents = [];

    async.forEachOf(
        paths,
        (path, _, callback) => {
            fs.readFile(path, (err, bytes) => {
                if (err) return callback(err);

                let filename = path.replace(/^.*[\\\/]/, '');
                documents.push({ filename, path, bytes: Buffer.from(bytes.toJSON()) });

                callback();
            });
        },
        err => {
            if (err) console.err(err.message);

            event.reply('load-documents-complete', documents);
        }
    );
});
