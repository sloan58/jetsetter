import React from 'react'
import database from './database'
import { render } from 'react-dom'
import Application from './components/Application'

render(
  <Application database={database} />,
  document.getElementById('application')
)
