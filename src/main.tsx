import React from 'react';
import ReactDOM from 'react-dom/client';
import StylesProvider from '@styles/StylesProvider';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <StylesProvider>
            <App />
        </StylesProvider>
    </React.StrictMode>,
);
