import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'

const Home = () => {
	return (
		<Box>
			<Tabs colorScheme='brand' variant={'line'}>
				<TabList>
					<Tab>New posts</Tab>
					<Tab>Following</Tab>
				</TabList>

				<TabPanels>
					<TabPanel>New posts</TabPanel>
					<TabPanel>Following</TabPanel>
				</TabPanels>
			</Tabs>
		</Box>
	)
}

export default Home
