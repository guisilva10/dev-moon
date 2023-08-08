import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { useEffect } from 'react';
import NProgress from './nprogress';

export const Nprogress = () => {
  useEffect(() => {
    NProgress.start(); // Inicia a barra de progresso ao carregar o componente
    
    // Simule um carregamento demorado
    setTimeout(() => {
      NProgress.done(); // Completa a barra de progresso quando o conteúdo estiver pronto
    }, 2000);
  }, []);
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nprogress/>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
