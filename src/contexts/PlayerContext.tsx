import { createContext, ReactNode, useState } from 'react'

export interface PlayerInfosInterface {
  id: string
  title: string | ''
  describe: string | ''
  likes: number | 0
  completed: boolean
}

interface PlayerContextType {
  playerInfo: PlayerInfosInterface
  setDataInPlayer: (data: PlayerInfosInterface) => void
}

export const PlayerContext = createContext({} as PlayerContextType)

interface PlayerContextProviderProps {
  children: ReactNode
}

export function PlayerContextProvider({
  children,
}: PlayerContextProviderProps) {
  const [playerInfo, setPlayerInfo] = useState<PlayerInfosInterface>({
    id: 'iU9L2T8RSzg',
    title: 'Como o aluno gera tickets de suporte',
    describe:
      'Neste vídeo você vai aprender como o aluno gera tickets de suporte e como respondê-los.',
    likes: 10522,
    completed: false,
  })

  function setDataInPlayer(data: PlayerInfosInterface) {
    setPlayerInfo(data)
  }

  return (
    <PlayerContext.Provider value={{ playerInfo, setDataInPlayer }}>
      {children}
    </PlayerContext.Provider>
  )
}
