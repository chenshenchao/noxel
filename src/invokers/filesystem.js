import {
    ipcRenderer
} from 'electron';
import {
    v4 as uuidv4
} from 'uuid';

const processes = {};

export async function list(folder, deep) {
    return new Promise((resolve, reject) => {
        const id = uuidv4();
        processes[id] = {
            resolve,
            reject,
        };
        ipcRenderer.send('fs-list', id, folder, deep);
    });
}

export async function load(path) {
    return new Promise((resolve, reject) => {
        const id = uuidv4();
        processes[id] = {
            resolve,
            reject,
        };
        ipcRenderer.send('fs-load', id, path);
    });
}

ipcRenderer.on('fs-list-end', (event, id, result) => {
    const {
        resolve,
        reject
    } = processes[id];
    if (Array.isArray(result)) {
        resolve(result);
    } else {
        reject(result);
    }
});

ipcRenderer.on('fs-load-end', (event, id, result) => {
    const {
        resolve,
        reject
    } = processes[id];
    if (result instanceof Uint8Array) {
        resolve(new Blob([result], {
            type: "application/octet-binary"
        }));
    } else {
        reject(result);
    }
});