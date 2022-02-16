import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import BugContextProvider from './components/BugContext'

ReactDOM.render(
  <BugContextProvider>
    <App />
  </BugContextProvider>
  ,
  document.getElementById('root')
)
