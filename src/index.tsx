import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Routers } from './routers';
import { LoadingProvider } from './context/loading.context';
import { Loading } from './components/Loading';
import { GithubProvider } from './context/github.context';
/* import { RouterProvider } from 'react-router-dom'; */

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

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
