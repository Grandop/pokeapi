import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles'
import { theme } from './themes/theme'
import { Header } from './components/Header'
import { AppRoutes } from './routes'
import { Provider } from 'react-redux';
import { store } from './store';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyle/>
        <Header/>
        <AppRoutes/>
      </Provider>
    </ThemeProvider>
  )
}

export default App
