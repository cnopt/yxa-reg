import React from 'react';
import axios from 'axios'
import ReactDOM from 'react-dom/client';
import CarDetails from './CarDetails';
import './index.css';
import VehicleReg from './VehicleReg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <VehicleReg type="input" defaultValue="HY06ZVX"></VehicleReg>
    <CarDetails></CarDetails>

  </React.StrictMode>
);


