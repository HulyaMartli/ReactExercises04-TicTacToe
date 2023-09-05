import './assets/styles/reset.css'
import './App.css'
import { NavMain } from './components/NavMain'
import { TicTacToe } from './components/TicTacToe'
import { NavFooter } from './components/NavFooter'

function App() {

  return (
    <>
      <header>
        <NavMain/>
      </header>
      <main>
        <TicTacToe/>
      </main>
      <footer>
        <NavFooter/>
      </footer>
    </>
  )

}

export default App
