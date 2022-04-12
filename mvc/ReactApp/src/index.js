import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {Articles} from './routes/Articles';
import {Authors} from './routes/Authors';
import {CreateArticle} from './routes/CreateArticle';
import Images from './routes/Images';
import { CreateAuthor } from './routes/CreateAuthor';
import { EditAuthor} from './routes/EditAuthor';



const baseUrl = "Admin";
const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <Routes>
      <Route path="/" element={<App />}>
      <Route path="Articles" element={<Articles />}/>
      <Route path="CreateArticle" element={<CreateArticle />} />
      <Route path="CreateAuthor" element={<CreateAuthor />} /> 
      <Route path="Authors" element={<Authors />}>
        <Route path=":AuthorId" element ={<EditAuthor />} />
        </Route>
      <Route path="Images" element={<Images />} />
      <Route
      path="*"
      element={
          <p>There's nothing here!</p>
      }
    />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
