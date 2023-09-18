import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { themeConfig } from './config/theme.config.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<ChakraProvider theme={themeConfig}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ChakraProvider>
)
