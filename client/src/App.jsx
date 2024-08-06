
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
import MyRecipes from './components/recipie/my-recipes/MyRecipes'
import EditRecipe from './components/recipie/edit-recipe/EditRecipe'
import CategoryComponet from './components/recipie/category-component/CategoryComponet'
import ErrorBoundary from './components/ErrorBoundary'
import Favorites from './components/favorites/Favorites'


function App() {

	return (
		<>
		<ErrorBoundary> 
				<AuthProvider  >
					<Header/>
					
					<main>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/recipes' element={<RecipiesList />} />
							<Route path='/recipes/:recipieId/details' element={<RecipieDetails />} />
							<Route path='/category/:category' element={<CategoryComponet />} />

							<Route element={<PublicRoutes />}>
								<Route path='/register' element={<Regsiter />} />
								<Route path='/login' element={<Login />} />
							</Route>

							<Route element={<ProtectedRoutes />}>
								<Route path='/add-recipie' element={<AddRecipie />} />
								<Route path='/my-recipes' element={<MyRecipes />} />
								<Route path='/Favorites' element={<Favorites />} />
								<Route path='/recipes/:recipieId/edit' element={<EditRecipe />} />
								<Route path='/logout' element={<Logout />} />
							</Route>

							<Route path='*' element={<NotFound />} />
						</Routes>
					</main>
					<Footer />
				</AuthProvider>
				</ErrorBoundary>
		</>
	)
}

export default App
