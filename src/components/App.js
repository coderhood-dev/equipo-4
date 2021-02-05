import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from './Layout';
import ModalSwitch from './ModalSwitch';

function App() {
  return (
    <Router>
      <Layout>
        <ModalSwitch />
      </Layout>
    </Router>
  );
}

export default App;
