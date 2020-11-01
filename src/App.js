import React from 'react';

import Sidebar from 'components/Menu';
import Contact from 'pages/Contact';
// import Posts from 'pages/Posts';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
library.add(faUser);

function App() {
  return (
    <div className='main-container'>
      <Sidebar />
      <Contact />
      {/* <Posts /> */}
    </div>
  );
}

export default App;
