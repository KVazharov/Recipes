
import './App.css'
import { Routes, Route } from 'react-router-dom'

import { AuthProvider } from './contexts/authContext'

import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/user/login/Login'
import Regsiter from './components/user/register/Regsiter'
import Logout from './components/user/Logout'
import AddRecipie from './components/recipie/add-recipie/AddRecipie'
import RecipiesList from './components/recipie/recipie-list/RecipieList'
import NotFound from './components/not-found/NotFound'
import RecipieDetails from './components/recipie/recipie-details/RecipieDetails'
import ProtectedRoutes from './route-guard/ProtectedRoutes'
import PublicRoutes from './route-guard/PublicRoutes'
function App() {

	return (
		<>
			<AuthProvider >
				<Header />
				<main>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/recipes' element={<RecipiesList />} />
						<Route path='/recipes/:recipieId/details' element={<RecipieDetails />} />

						<Route element={<PublicRoutes />}>
							<Route path='/register' element={<Regsiter />} />
							<Route path='/login' element={<Login />} />
						</Route>

						<Route element={<ProtectedRoutes />}>
							<Route path='/add-recipie' element={<AddRecipie />} />
							<Route path='/logout' element={<Logout />} />
						</Route>

						<Route path='*' element={<NotFound />} />
					</Routes>
				</main>
				<Footer />

			</AuthProvider>
		</>
	)
}

export default App
