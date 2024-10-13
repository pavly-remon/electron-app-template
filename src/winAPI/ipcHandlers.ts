import {ipcMain} from 'electron';
import {runApp} from './runApp';

const registerAppIpcHandlers = () => {
    ipcMain.on('run-app', (event, app: string) => {
        runApp(app);
    });
};

export {registerAppIpcHandlers};