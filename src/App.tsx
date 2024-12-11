import React from 'react';
import Landing from './Landing';
import Kanbas from "./Kanbas";
import './App.css';
import {HashRouter, Route, Routes, Navigate, BrowserRouter} from "react-router-dom";
import store from "./Kanbas/store";
import { Provider } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import Labs from './Labs';


export default function App() {
  return (
    <HashRouter>
      <ToastContainer />
      <Provider store={store}>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Landing" />} />
          <Route path="/Landing/*" element={<Landing />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
      </Provider>
    </HashRouter>
  );
}