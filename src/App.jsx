import React, { useReducer } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout/layout'
import CreatePost from './pages/CreatePost'
import DetailedPost from './pages/DetailedPost'
import Home from './pages/Home'
import { initialState, reducer } from './store/reducer'
import { StoreContext } from './store/store'

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<StoreContext.Provider value={{ state, dispatch }}>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='/' element={<Home />} />
					<Route path='/post/:slug' element={<DetailedPost />} />
					<Route path='/create-post' element={<CreatePost />} />
				</Route>
			</Routes>
		</StoreContext.Provider>
	)
}

export default App
