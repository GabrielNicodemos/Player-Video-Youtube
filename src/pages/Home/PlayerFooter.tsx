import {
  AddIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  EditIcon,
  TriangleDownIcon,
  TriangleUpIcon,
} from '@chakra-ui/icons'
import {
  Box,
  Button,
  Flex,
  Stack,
  Text,
  Heading,
  IconButton,
  Avatar,
  Divider,
  FormControl,
  Input,
  FormHelperText,
} from '@chakra-ui/react'
import { useState, useContext } from 'react'
import { PlayerContext } from '../../contexts/PlayerContext'
import { BiLike, BiDislike } from 'react-icons/bi'

export function PlayerFooter() {
  const [isEditTitle, setIsEditTitle] = useState<boolean>(false)
  const [isEditDescribe, setIsEditDescribe] = useState<boolean>(false)

  const { playerInfo, setDataInPlayer } = useContext(PlayerContext)

  function handleTitleChange(e: any) {
    setDataInPlayer({
      ...playerInfo,
      title: String(e.target.value),
    })
  }

  function handleNewTitle() {
    setIsEditTitle(false)
  }

  function handleDescribeChange(e: any) {
    setDataInPlayer({ ...playerInfo, describe: String(e.target.value) })
  }

  function handleNewDescribe() {
    setIsEditDescribe(false)
  }

  function handleLikeVideo() {
    const newLike = playerInfo.likes ? playerInfo.likes + 1 : 1
    setDataInPlayer({ ...playerInfo, likes: newLike })
  }

  function handleDeslikeVideo() {
    const newLike = playerInfo.likes ? playerInfo.likes - 1 : 1
    setDataInPlayer({ ...playerInfo, likes: newLike })
  }

  function handleCompletedVideo() {
    setDataInPlayer({ ...playerInfo, completed: !playerInfo.completed })
  }

  return (
    <>
      <Box w="container.lg" h="95%">
        <Stack spacing="4" marginBottom="16">
          <Flex gap="1">
            <Text color="green.600">Mais curtido</Text>
            <Text>-</Text>
            <Text>{playerInfo.likes}</Text>
          </Flex>
          <Flex gap="5">
            {!isEditTitle && (
              <>
                <Heading size="lg" noOfLines={2}>
                  {playerInfo.title}
                </Heading>
                <EditIcon onClick={() => setIsEditTitle(true)} />
              </>
            )}
            {isEditTitle && (
              <FormControl>
                <Input
                  type="text"
                  name="title"
                  placeholder="Title of vídeo"
                  value={playerInfo.title}
                  onChange={handleTitleChange}
                />
                <FormHelperText>Well never share your email.</FormHelperText>
                <IconButton
                  onClick={handleNewTitle}
                  aria-label="Search database"
                  icon={<CheckIcon />}
                  colorScheme="teal"
                  variant="outline"
                />
              </FormControl>
            )}
          </Flex>
          <Flex gap="1">
            {!isEditDescribe && (
              <>
                <Text maxW="80%" noOfLines={3}>
                  {playerInfo.describe}
                </Text>
                <EditIcon onClick={() => setIsEditDescribe(true)} />
              </>
            )}
            {isEditDescribe && (
              <FormControl>
                <Input
                  type="text"
                  name="describe"
                  placeholder="Describe of vídeo"
                  value={playerInfo.describe}
                  onChange={handleDescribeChange}
                />
                <FormHelperText>Well never share your email.</FormHelperText>
                <IconButton
                  onClick={handleNewDescribe}
                  aria-label="Search database"
                  icon={<CheckIcon />}
                  colorScheme="teal"
                  variant="outline"
                />
              </FormControl>
            )}
          </Flex>
          <Flex justifyContent="space-between">
            <Stack direction={['column', 'row']}>
              <IconButton
                aria-label="Previus Video"
                icon={<ArrowLeftIcon />}
                colorScheme="teal"
                variant="outline"
              />
              <Button
                rightIcon={<CheckIcon />}
                colorScheme={!playerInfo.completed ? 'teal' : 'green'}
                variant={!playerInfo.completed ? 'outline' : 'solid'}
                onClick={handleCompletedVideo}
              >
                Concluído
              </Button>
              <IconButton
                aria-label="Next Video"
                icon={<ArrowRightIcon />}
                colorScheme="teal"
                variant="outline"
              />
            </Stack>
            <Stack direction={['column', 'row']} marginRight="50">
              <IconButton
                aria-label="Plus"
                icon={<AddIcon />}
                colorScheme="teal"
                variant="outline"
              />
              <IconButton
                aria-label="Deslike Video"
                icon={<BiDislike />}
                colorScheme="teal"
                variant="outline"
                onClick={handleDeslikeVideo}
              />
              <IconButton
                aria-label="like Video"
                icon={<BiLike />}
                colorScheme="teal"
                variant="outline"
                onClick={handleLikeVideo}
              />
            </Stack>
          </Flex>
          <Flex gap="4">
            <Avatar
              marginTop="4"
              size="lg"
              name="Oshigaki Kisame"
              src="https://bit.ly/broken-link"
            />
            <Flex
              marginTop="4"
              direction="column"
              align="flex-start"
              justifyContent="center"
              gap="1"
            >
              <Heading size="sm">Gabriel Eduardo</Heading>
              <Text as="u">Mais detalhes</Text>
            </Flex>
          </Flex>
          <Divider orientation="horizontal" w="95%" />
        </Stack>
      </Box>
    </>
  )
}
