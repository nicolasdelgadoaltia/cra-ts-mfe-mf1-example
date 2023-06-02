import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import SoundCloudPlayer from './components/SoundCloudPlayer';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

const AppComp = (
  <div className="App">
    <header className="App-header">
      <h2>MFE 1 child</h2>
      <SoundCloudPlayer />
    </header>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={AppComp} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
