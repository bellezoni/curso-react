import React, {Component} from "react";

import './styles.css';

import Header from './components/header';
import Main from './pages/main/index';

const App = () => (
    <div className="App">
        <Header/>
        <Main/>
    </div>
);

export default App;
