import React from 'react';

import Form from 'components/Form';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
library.add(faUser);

function App() {
  return (
    <Form />
  );
}

export default App;
