
import './App.css'
import { Routes, Route } from 'react-router-dom'

import  { AuthProvider } from './contexts/authContext'



import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/user/login/Login'
import Regsiter from './components/user/register/Regsiter'
import Logout from './components/user/Logout'
import AddRecipie from './components/recipie/add-recipie/AddRecipie'
import RecipiesList from './components/recipie/recipie-list/RecipieList'
import NotFound from './components/not-found/NotFound'

function App() {

	return (
		<>
			<AuthProvider >
				<Header />
				<main>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/login' element={<Login />} />
						<Route path='/register' element={<Regsiter />} />
						<Route path='/logout' element={<Logout />} />
						<Route path='/recipes' element={<RecipiesList/>}/>
						<Route path='/add-recipie' element={<AddRecipie />} />

						<Route path='*' element={<NotFound/>} />

					</Routes>
				</main>
				<Footer />

			</AuthProvider>
		</>
	)
}

export default App
