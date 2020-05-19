import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Polls } from './layout/private/components/polls/Polls';
import { Home } from './layout/public/components/Home';
import Navbar from './layout/public/components/Navbar';
import { Orders } from './layout/private/components/orders/Orders';
import { Settings } from './layout/private/components/settings/Settings';
import { Votes } from './layout/private/components/polls/Votes';


function App() {
  return (
    <div>
      <Router>
          <Navbar />
          <div className='container'>
            <Route exact path='/' component={Home} />
            <Route exact path='/poll' component={Polls} />
            <Route exact path='/orders' component={Orders}/>
            <Route exact path='/settings' component={Settings}/>
            <Route exact path='/votes' component={Votes}/>
          </div>
      </Router>
    </div>
  );
}

export default App;
