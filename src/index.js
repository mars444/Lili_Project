import React from 'react';
import ReactDOM from 'react-dom/client'
import App from "./App";

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import 'primeflex/primeflex.scss';
import "./index.css"
import "scss/index.scss"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);