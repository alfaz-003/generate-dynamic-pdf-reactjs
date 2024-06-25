// src/App.js
import React from 'react';
import PurchaseOrderForm from './components/PurchaseOrderForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Purchase Order System</h1>
      </header>
      <main>
        <PurchaseOrderForm />
      </main>
    </div>
  );
}

export default App;
