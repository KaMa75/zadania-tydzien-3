import React from 'react';

import Contact from 'pages/Contact';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
library.add(faUser);

function App() {
  return (
    <Contact />
  );
}

export default App;
