import React, { Fragment } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';

import Post from './components/Post';
import Header from './components/Header';
import SideCard from './components/SideCard';
import Movies from './components/Movies';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import logo from './logo.svg';
import './App.css';
const App = () => (
 <Router>
  <Fragment>

    <Header />

    <main className="my-5 py-5">
      <Container className="px-0">
        <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">

          <Col xs={{ order: 2 }} md={{ size: 4, order: 1 }} tag="aside" className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0">
            <SideCard />
          </Col>



          <Col xs={{ order: 1 }} md={{ size: 7, offset: 1 }} tag="section" className="py-5 mb-5 py-md-0 mb-md-0">
            <Route exact path="/" component={Post}/>
            <Route path="/movies" component={Movies}/>
          </Col>

        </Row>
      </Container>
    </main>

  </Fragment>
 </Router>
);


export default App;
