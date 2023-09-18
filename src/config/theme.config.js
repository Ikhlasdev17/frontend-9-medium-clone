import { extendTheme } from '@chakra-ui/react'

export const themeConfig = extendTheme({
	config: {
		initialColorMode: 'system',
		useSystemColorMode: true,
	},
	colors: {
		brand: {
			200: '#02c5b5',
			300: '#01ac9d',
			400: '#019286',
			500: '#01796f',
			600: '#016058',
			700: '#014641',
			800: '#002d29',
		},
		gray: {
			900: '#323a45',
			800: '#464d57',
			700: '#5a616a',
			600: '#6f757c',
			500: '#84888f',
			400: '#989ca2',
			300: '#adb0b4',
			200: '#c1c3c7',
			100: '#d6d7d9',
		},
	},
})
