import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Container from '../components/Container'
import Header from './header'
import Sidebar from './sidebar'
const Layout = () => {
	return (
		<>
			<Header />
			<Container>
				<Flex
					gap={4}
					my={6}
					flexDir={{
						base: 'column',
						md: 'row',
					}}
				>
					<Box
						w={{
							base: '100%',
							lg: '70%',
						}}
					>
						<Outlet />
					</Box>
					<Box
						w={{
							base: '100%',
							lg: '30%',
						}}
					>
						<Sidebar />
					</Box>
				</Flex>
			</Container>
		</>
	)
}

export default Layout
