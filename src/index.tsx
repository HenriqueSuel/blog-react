import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Routers } from './routers';
import { LoadingProvider } from './context/loading.context';
import { Loading } from './components/Loading';
import { GithubProvider } from './context/github.context';
import { initializeApp } from "firebase/app";
/* import { RouterProvider } from 'react-router-dom'; */


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const firebaseConfig = {
  apiKey: "AIzaSyBwB6yArLLuuy3veMgtdXsw3PGHuMN5LA4",
  authDomain: "coderhouse-react-out.firebaseapp.com",
  projectId: "coderhouse-react-out",
  storageBucket: "coderhouse-react-out.appspot.com",
  messagingSenderId: "570858638308",
  appId: "1:570858638308:web:11840909ff2d688fa4d5f1"
};

 initializeApp(firebaseConfig);

root.render(
  <LoadingProvider>
    <GithubProvider>
      <Loading  name='texto'/>
      <Routers />
    </GithubProvider>
  </LoadingProvider>

  /*     <RouterProvider router={Routers} /> */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
