import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {AdaptivityProvider, ConfigProvider} from '@vkontakte/vkui'
import React from 'react'
import {Provider} from "react-redux";
import {store} from "./app/store.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ConfigProvider>
        <AdaptivityProvider>
            <React.StrictMode>
                <Provider store={store}>
                    <App/>
                </Provider>
            </React.StrictMode>
        </AdaptivityProvider>
    </ConfigProvider>,
);
