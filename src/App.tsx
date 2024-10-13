import React, {FC} from "react";


const App: FC = () => {
    const handleClick = () => {
        window.electronAPI.runApp('calc.exe');
    }
    return (
        <div className="app">
            <h1>Hello React</h1>
            <button onClick={handleClick}>Open Calculator</button>
        </div>);
}

export default App;