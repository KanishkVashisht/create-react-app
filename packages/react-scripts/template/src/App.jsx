import React from 'react';
import { Footer, Header, Main } from './root'; 
import { BrowserRouter as Router } from 'react-router-dom'; 
import { createBrowserHistory } from 'history'; 

const history = createBrowserHistory(); 

function App() {
  return (
      <Router history={history}> 
        <Header/>
        <Main/>
        <Footer/>
      </Router>
  );
}

export default App;
