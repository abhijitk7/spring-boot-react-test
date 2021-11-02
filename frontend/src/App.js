import React from 'react'
import NavBar from './components/elements/NavBar'
import Timesheets from './components/Timesheet/Timesheets'
import './styles/App.scss'
import { Provider } from 'react-redux';
import  store from './Store';

export default function App() {
    return (
      <Provider store={store}>
        <div className="App">
          <NavBar />
          <div className="container">
            <div className="py-3">
              <Timesheets />
            </div>
          </div>
        </div>
      </Provider>
    )
}
