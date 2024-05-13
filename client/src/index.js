import React from 'react';
import { createRoot } from 'react-dom/client';
// import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import history from './history';
import Homepage from './components/Homepage';
import AddCandidate from './components/AddCandidate';
import Candidates from './components/Candidates';
import VerifyVoter from './components/VerifyVoter';
import Results from './components/Results';
import Phase from './components/Phase';
import Voting from './components/Voting';
import Register from './components/Register';

import ErrorBoundary from './components/ErrorBoundary'; // Import the ErrorBoundary component

const root = createRoot(document.getElementById('root'));
root.render(
    <ErrorBoundary> {/* Wrap the Router with the ErrorBoundary */}
        <Router history={history}>
            <Routes>
                <Route exact path='/' element={<Homepage />} />
                <Route path='/AddCandidate' element={<AddCandidate />} />
                <Route path='/CandidateDetails' element={<Candidates />} />
                <Route path='/VerifyVoter' element={<VerifyVoter />} />
                <Route path='/Result' element={<Results />} />
                <Route path='/Phase' element={<Phase />} />
                <Route path='/Vote' element={<Voting />} />
                <Route path='/Register' element={<Register />} />
            </Routes>
        </Router>
    </ErrorBoundary>
);