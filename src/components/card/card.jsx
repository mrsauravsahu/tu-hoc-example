import * as React from 'react';
import styles from './card.module.css';

export const Card = ({ children }) => (
  <div className={styles.container}>
    {children}
  </div>
);
