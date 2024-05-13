// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

import React from 'react';
import { createRoot } from 'react-dom/client';
// import ReactDOM from 'react-dom';
import './index.css';
import { Router, Routes, Route } from 'react-router-dom';
import history from './history';
import Homepage from './components/Homepage';
import AddCandidate from './components/AddCandidate';
import Candidates from './components/Candidates';
import VerifyVoter from './components/VerifyVoter';
import Results from './components/Results';
import Phase from './components/Phase';
import Voting from './components/Voting';
import Register from './components/Register'

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);  // Create a root using the new API
  root.render(
    <Router history={history}>
      <Routes>
        <Route exact path='/' component={Homepage} />
        <Route path='/AddCandidate' component={AddCandidate} />
        <Route path='/CandidateDetails' component={Candidates} />
        <Route path='/VerifyVoter' component={VerifyVoter} />
        <Route path='/Result' component={Results} />
        <Route path='/Phase' component={Phase} />
        <Route path='/Vote' component={Voting} />
        <Route path='/Register' component={Register} />
      </Routes>
    </Router>
  ); // Render the app into the root
  root.unmount(); // Clean up after the test
});