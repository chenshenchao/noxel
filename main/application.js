const path = require('path')
const electron = require('electron');
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
    win.setMenu(null);
    win.once('ready-to-show', () => {
        win.show();
    });
    win.on('closed', () => {
        win = null;
    });
    win.loadURL(`file://${root}/view/index.html`);
});

/**
 * 窗口全关闭事件。
 * 
 */
app.on('win-all-closed', () => {
    app.quit();
});