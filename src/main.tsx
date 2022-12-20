import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const theme = extendTheme({
  fonts: {
    body: 'Roboto',
  },
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'gray.900',
        color: 'white',
      },
    },
  },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
      <CSSReset />
    </ChakraProvider>
  </React.StrictMode>,
)
