import fs from 'fs';
import path from 'path';

export function list(folder, deep) {
    let result = [];
    fs.readdirSync(folder).forEach(i => {
        let fp = path.resolve(folder, i);
        let stat = fs.statSync(fp);
        if (deep && stat.isDirectory()) {
            list(fp, deep).forEach(j => result.push(j));
        } else if (stat.isFile()) {
            result.push(fp);
        }
    });
    return result;
}

export function move(source, target) {
    if (fs.existsSync(source)) try {
        fs.renameSync(source, target);
        return true;
    } catch (e) {
        return e;
    }
}

export function load(path) {
    let buffer = fs.readFileSync(path);
    return new Uint8Array(buffer);
}

export default function setup(ipcMain) {
    ipcMain.on('fs-list', (event, id, folder, deep) => {
        let result = list(folder, deep);
        event.reply('fs-list-end', id, result);
    });
    ipcMain.on('fs-move', (event, id, source, target) => {
        let result = move(source, target);
        event.reply('fs-move-end', id, result);
    });
    ipcMain.on('fs-load', (event, id, path) => {
        let result = load(path);
        event.reply('fs-load-end', id, result);
    });
}