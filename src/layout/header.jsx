import {
	Box,
	Button,
	Flex,
	HStack,
	Heading,
	Icon,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'
import { BsList, BsMoon, BsSun } from 'react-icons/bs'
import { Link, useLocation } from 'react-router-dom'
const Header = () => {
	const { colorMode, toggleColorMode } = useColorMode()
	const location = useLocation()
	return (
		<Box
			display={'flex'}
			justifyContent={'space-between'}
			alignItems={'center'}
			px={{
				base: '5%',
				md: '5%',
				lg: '10%',
			}}
			mx={'auto'}
			py={'20px'}
			borderBottom={'1px'}
			borderBottomColor={useColorModeValue('gray.100', 'gray.600')}
			pos={'sticky'}
			top={'0'}
			bg={useColorModeValue('white', 'gray.800')}
		>
			<Heading>Postium</Heading>

			<HStack>
				<Button
					display={{
						base: 'flex',
						md: 'none',
					}}
					w={'42px'}
					h={'42px'}
					colorScheme='brand'
					rounded={'full'}
				>
					<Icon as={BsList} fontSize={'18px'} />
				</Button>
				<Button
					w={'42px'}
					h={'42px'}
					colorScheme='brand'
					rounded={'full'}
					onClick={toggleColorMode}
				>
					<Icon as={colorMode === 'light' ? BsMoon : BsSun} fontSize={'18px'} />
				</Button>
				<Flex
					display={{
						base: 'none',
						md: 'flex',
					}}
				>
					<Link to={'/'}>
						<Button
							colorScheme={location.pathname === '/' ? 'brand' : ''}
							variant={'ghost'}
						>
							Home
						</Button>
					</Link>
					<Link to={'/create-post'}>
						<Button
							colorScheme={location.pathname === '/create-post' ? 'brand' : ''}
							variant={'ghost'}
						>
							Create post
						</Button>
					</Link>
				</Flex>
			</HStack>
		</Box>
	)
}

export default Header
