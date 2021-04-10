import React from 'react';

import Routes from './routes'
import Navbar from '../components/navbar'

import 'bootswatch/dist/flatly/bootstrap.css'
import '../custom.css'

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container mt-5">
          <Routes />
        </div>
      </>
    )
  }
}

export default App;
