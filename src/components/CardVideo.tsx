import { Flex, Stack, Text, Card, Image } from '@chakra-ui/react'
import { useContext } from 'react'
import { PlayerContext } from '../contexts/PlayerContext'

export interface PlayerInfosInterface {
  id: string
  title: string | ''
  describe: string | ''
  likes: number | 0
  completed: boolean
}

interface CardVideoProps {
  id: string
  title: string
  description: string
  image: string
}
export function CardVideo({ id, image, title, description }: CardVideoProps) {
  const { setDataInPlayer } = useContext(PlayerContext)

  function addPlayerById() {
    const newPlayer: PlayerInfosInterface = {
      id,
      title,
      describe: description,
      likes: 0,
      completed: false,
    }
    setDataInPlayer(newPlayer)
  }
  return (
    <Card
      variant="outline"
      borderColor="gray.600"
      padding="3"
      marginTop="4"
      onClick={() => addPlayerById()}
    >
      <Flex justify="space-between">
        <Card minW="50%" height="100">
          <Image w="100%" h="100%" src={image} alt="Dan Abramov" />
        </Card>
        <Stack marginLeft="4">
          <Text
            color="white"
            fontSize="1.25rem"
            textAlign="center"
            fontWeight="bold"
          >
            {title}
          </Text>
          <Text color="white" fontSize="0.85rem" textAlign="center">
            {description}
          </Text>
        </Stack>
      </Flex>
    </Card>
  )
}
