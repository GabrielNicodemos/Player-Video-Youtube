import { DownloadIcon } from '@chakra-ui/icons'
import { Flex, Stack, Text, Heading, IconButton, Card } from '@chakra-ui/react'

export function VideoFiles() {
  return (
    <>
      <Stack direction="column" align="flex-end" w="100%">
        <Heading size="md" float="left">
          Materiais complementares
        </Heading>
        <Stack w="80%" gap="4">
          <Card minW="100%" colorScheme="teal" variant="outline" padding="2">
            <Flex
              justifyContent="space-between"
              gap="10"
              alignItems="center"
              paddingStart="4"
              paddingEnd="4"
            >
              <Text color="white">image.jpg</Text>
              <IconButton
                aria-label="Search database"
                icon={<DownloadIcon />}
                colorScheme="teal"
                variant="outline"
              />
            </Flex>
          </Card>
          <Card minW="100%" colorScheme="teal" variant="outline" padding="2">
            <Flex
              justifyContent="space-between"
              gap="10"
              alignItems="center"
              paddingStart="4"
              paddingEnd="4"
            >
              <Text color="white">image-teste.jpg</Text>
              <IconButton
                aria-label="Search database"
                icon={<DownloadIcon />}
                variant="outline"
                colorScheme="teal"
              />
            </Flex>
          </Card>
        </Stack>
      </Stack>
    </>
  )
}
