import React from 'react';

import Contact from 'pages/Contact';
import Sidebar from 'components/Menu';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
library.add(faUser);

function App() {
  return (
    <div className='main-container'>
      <Sidebar />
      <Contact />
    </div>
  );
}

export default App;
