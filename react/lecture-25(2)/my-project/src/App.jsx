
import './App.css'
import Cakeconainer from'./Components/Cakeconainer'
import { Provider } from 'react-redux'
import Store from'./Redux/Store'
function App() {
  

  return (
    <>
    <Provider store ={Store}>
           <Cakeconainer/>
    </Provider>

    </>
  )
}

export default App
