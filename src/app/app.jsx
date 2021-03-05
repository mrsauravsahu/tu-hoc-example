import React from 'react';
import { Card } from '../components/card/card';

import styles from './app.module.css';

export const App = () => (
  <>
    <div className={styles.card}>
      <Card>
        <div>
          <h1>title</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </Card>
    </div>

    <div className={styles.card}>

      <Card>simple content</Card>
    </div>
  </>
);
