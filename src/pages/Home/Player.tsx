import { Box, Flex, Stack } from '@chakra-ui/react'
import { useContext, useState } from 'react'
import { useYoutubePlayer } from 'react-hook-youtube'
import comments from '../../data/comments'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../../styles/toast.css'
import { VideosChannel } from './VideosChannel'
import { PlayerFooter } from './PlayerFooter'
import { VideoFiles } from './VideoFiles'
import { PlayerContext } from '../../contexts/PlayerContext'

export function Player() {
  const { playerInfo } = useContext(PlayerContext)

  let timeout: any = null

  const [isReady, setIsReady] = useState(false)

  const { YoutubePlayer, player } = useYoutubePlayer({
    videoId: String(playerInfo.id),
    height: '800rem',
    width: '100%',
    events: {
      onReady: (event) => {
        setIsReady(true)
      },
      onStateChange: (event) => {
        if (event.data === 1) {
          timeout = setInterval(() => {
            const secondsCurrentPlayer = Math.floor(
              event.target.getCurrentTime(),
            )

            comments.map((comment) => {
              if (comment.seconds === secondsCurrentPlayer) {
                return toast(`${comment.comment}`, {
                  position: toast.POSITION.BOTTOM_CENTER,
                  className: 'toast-message',
                  autoClose: 3000,
                })
              } else {
                return console.log()
              }
            })
          }, 1000)
        } else {
          clearInterval(timeout)
        }
      },
    },
  })
  return (
    <Flex w="100vw" align="center" justifyContent="center" flexDir="column">
      <Box bg="gray.800" w="90%" minH="800" margin="6">
        <YoutubePlayer />
      </Box>
      <Flex w="90%" h="50vh" align="flex-start" justify="center">
        <PlayerFooter />
        <Box w="container.sm" h="95%">
          <Flex
            align="flex-end"
            justifyContent="center"
            flexDirection="column"
            w="100%"
            gap="4"
          >
            <VideoFiles />
            <Stack
              direction="column"
              align="center"
              justifyContent="center"
              w="80%"
            >
              <VideosChannel />
            </Stack>
          </Flex>
        </Box>
        <ToastContainer />
      </Flex>
    </Flex>
  )
}
