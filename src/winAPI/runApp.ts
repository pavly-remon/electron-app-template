import {exec} from "child_process";

const runApp = (app: string) => {
    exec(app, (err) => {
        if (err) {
            console.error(`Error launching ${app}: ${err}`);
            return;
        }
    });
};

export {runApp};