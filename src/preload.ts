import {contextBridge, ipcRenderer} from 'electron';

declare global {
    interface Window {
        electronAPI: {
            runApp: (app: string) => void;
        };
    }
}

contextBridge.exposeInMainWorld('electronAPI', {
    runApp: (app: string) => ipcRenderer.send('run-app', app),
});

