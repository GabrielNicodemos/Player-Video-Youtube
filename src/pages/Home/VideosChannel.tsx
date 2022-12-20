import { useEffect, useState } from 'react'
import { playlistChannel } from '../../services/playlist'
import { Flex, Text, Heading, Card } from '@chakra-ui/react'
import { CardVideo } from '../../components/CardVideo'

export function VideosChannel() {
  const [playlist, setPlaylist] = useState<any>([])
  useEffect(() => {
    async function fetchPlaylistChannel() {
      const res = await fetch('')
      const result = await res.json()
      const list = result.items
      setPlaylist(list)
    }
    fetchPlaylistChannel()
  }, [])

  return (
    <>
      <Card
        minW="100%"
        colorScheme="teal"
        variant="outline"
        padding="4"
        borderColor="gray.600"
      >
        <Heading color="white" size="md">
          Módulo
        </Heading>
        <Flex gap="1" flexDirection="column" marginTop="4">
          <Flex gap="2">
            <Text color="white" size="sm">
              Descrição
            </Text>
            <Text color="white" size="sm">
              -
            </Text>
            <Text color="white" size="sm">
              {playlist.length}
            </Text>
          </Flex>
          {playlist.length > 0 &&
            playlist.map((player: any) => {
              return (
                <Flex key={player.id.videoId}>
                  <CardVideo
                    id="iU9L2T8RSzg"
                    title={player.snippet.title}
                    description={player.snippet.description}
                    image="https://www.3nions.com/wp-content/uploads/2020/09/Best-Size-for-YouTube-Thumbnail.jpg"
                  />
                </Flex>
              )
            })}
          {playlist.length === 0 && (
            <Flex flexDir="column" align="center" justify="center">
              <Flex>
                <CardVideo
                  id="iU9L2T8RSzg"
                  title="Aula 1"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                  image="https://www.3nions.com/wp-content/uploads/2020/09/Best-Size-for-YouTube-Thumbnail.jpg"
                />
              </Flex>
            </Flex>
          )}
        </Flex>
      </Card>
    </>
  )
}
