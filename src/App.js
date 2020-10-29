import React from 'react';

import Button from './components/Button';

import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
library.add(faUser);


const colors = {
  fadedPoster: '#81ecec',
  americanRiver:'#636e72'
}

function App() {
  const {fadedPoster, americanRiver} = colors;
  return (
    <Button
      icon='user'
      bgColor={fadedPoster}
      color={americanRiver}
    >
      Click me!
    </Button>
  );
}

export default App;
