import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import { ThemeProvider } from "@mui/joy/"
import "./index.css";
import { calorySoftTheme } from './styles/joy-theme.ts';
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={calorySoftTheme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})
