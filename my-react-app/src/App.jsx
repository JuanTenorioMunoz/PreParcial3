
import { Provider } from 'react-redux'
import './App.css'
import Router from './routes/Router'
import { store } from './store/store'

function App() {

  return (
    <>
    <Provider store={store}>
      <Router></Router>
    </Provider>
    </>
  )
}

export default App
