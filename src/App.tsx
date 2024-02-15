import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles'
import { theme } from './themes/theme'
import { Header } from './components/Header'
import { AppRoutes } from './routes'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Header/>
      <AppRoutes/>
    </ThemeProvider>
  )
}

export default App
