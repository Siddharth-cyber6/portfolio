import { render } from 'react-dom'
import App from './App'
import { ThemeProvider } from './contexts/ThemeContext'
import './index.css'

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
