import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import UrlForm from './components/UrlForm';
import UrlList from './components/UrlList';
import UrlRecord from './components/UrlRecord';
import axios from 'axios';

import React, { useState, useEffect } from 'react';
const url = 'http://localhost:3001';

function App() {

  const [loading, setLoading] = useState(true);
  const [urls, setUrls] = useState([]);

  const fetchUrls = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      // const response = await axios.get(url, {withCredentials: true});
      // console.log('====' + document.cookie);
      const urls = response.data;
      setLoading(false);
      setUrls(urls);
      console.log(urls);
    } catch (error) {
      setLoading(false);
      console.error(error.response);
    }
  };

  useEffect(() => {
    fetchUrls();
  }, []);

  return (
    <div className="container">
      <Header />
      <UrlForm />
      {/* <div className="input-group input-group-lg">
        <input type="text" className="form-control" placeholder="Shorten your link" aria-label="Recipient's username" aria-describedby="button-addon2" />
        <button className="btn btn-outline-primary" type="button" id="button-addon2">Shorten</button>
      </div> */}

      {/* <hr /> */}
      <br />

      <UrlList urls={urls}></UrlList>

    </div>
  );
}

export default App;
