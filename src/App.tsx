import { Player } from './pages/Home/Player'
import { PlayerContextProvider } from './contexts/PlayerContext'

function App() {
  return (
    <PlayerContextProvider>
      <Player />
    </PlayerContextProvider>
  )
}

export default App
