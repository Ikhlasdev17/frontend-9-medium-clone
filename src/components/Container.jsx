import { Box } from '@chakra-ui/react'
import React from 'react'

const Container = ({ children }) => {
	return (
		<Box
			w={{
				base: '90%',
				md: '90%',
				lg: '80%',
			}}
			mx={'auto'}
		>
			{children}
		</Box>
	)
}

export default Container
