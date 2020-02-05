import React from 'react';
import Main from '../main/Main';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import styles from './App.css';

export default function App() {
  return (
    <>
      <div className={styles.Container}>
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}
