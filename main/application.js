const path = require('path')
const electron = require('electron');
const client = require('electron-connect').client;
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

/**
 * 应用程序预备事件。
 * 
 */
app.on('ready', () => {
    let root = path.dirname(__dirname);
    win = new BrowserWindow({
        width: 800,
        height: 600,
        show: false
    });
    win.webContents.openDevTools();
    win.setMenu(null);
    win.once('ready-to-show', () => {
        win.show();
    });
    win.on('closed', () => {
        win = null;
    });
    win.loadURL(`file://${root}/asset/index.html`);
    client.create(win);
});

/**
 * 窗口全关闭事件。
 * 
 */
app.on('win-all-closed', () => {
    app.quit();
});