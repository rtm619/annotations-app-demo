import React from 'react';

import styles from './App.module.css'
import Intro from './components/Intro/Intro';

function App() {
  return (
    <div className={styles.container}>
      <Intro />
    </div>
  );
}

export default App;
