import {
	Avatar,
	Badge,
	Box,
	Card,
	CardBody,
	Divider,
	Flex,
	Text,
} from '@chakra-ui/react'
import React from 'react'
import { users } from '../config/constants'

const Sidebar = () => {
	return (
		<Box>
			<Card>
				<CardBody>
					{users.map((item, index) => (
						<Box key={item.id}>
							<Flex>
								<Avatar src={item.avatar} />
								<Box ml='3'>
									<Text fontWeight='bold'>
										{item.fullName}
										{item.new ? (
											<Badge ml='1' colorScheme='green'>
												New
											</Badge>
										) : null}
									</Text>
									<Text fontSize='sm'>{item.job}</Text>
								</Box>
							</Flex>
							{index !== users.length - 1 ? <Divider my={3} /> : null}
						</Box>
					))}
				</CardBody>
			</Card>
		</Box>
	)
}

export default Sidebar
