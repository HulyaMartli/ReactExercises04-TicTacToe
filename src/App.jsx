import './assets/styles/reset.css'
import './App.css'
import { NavMain } from './components/NavMain'
import { TicTacToe } from './components/TicTacToe'

function App() {

  return (
    <>
      <header>
        <NavMain/>
      </header>
      <main>
        <TicTacToe/>
      </main>
    </>
  )

}

export default App
