import { useContext } from "react"
import { Link } from "react-router-dom"
import AuthContext from "../../contexts/authContext"
import './Header.css'
export default function Header() {

	const { isAuthenticated, username } = useContext(AuthContext)
	return (
		<div className="wrapper">
			<div className="site-header">
				<Link to='/'> 
					<img className="logo" src="../../../public/recipes-logo.jpg" alt="" />
					</Link>
				<div className="search">
					<Link to="#">
						<i className="fa-solid fa-magnifying-glass "></i>
					</Link>
					<Link to="/recipes">Recipes</Link>
				</div>
				<nav>
					<div className="header-container">
						{!isAuthenticated && (<div className="login-register-nav">
							<nav>
								<ul>
									<li>
										<Link to="/login">Login</Link>
									</li>
									<li>
										<Link to="/register">Register</Link>
									</li>
								</ul>
							</nav>
						</div>)}

						{isAuthenticated && (<div className="user-nav">
							<nav>
								<ul>
									<li>
										<Link to="/add-recipie">Add Recipe</Link>
									</li>
									<li>
										<Link to="/favorites">Favorites</Link>
									</li>
									<li>
										<Link to="/my-recipes">My recipes</Link>
									</li>
									<li>
										<Link to="#"> Hello, {username}</Link>
									</li>
									<li>
										<Link to="/logout">Logout</Link>
									</li>
								</ul>
							</nav>
						</div>)}
					</div>
				</nav >
			</div>
			<div className="category">
				<ul>
					<li>
						<Link to="/category/salads">Salads</Link>
					</li>
					<li>
						<Link to="/category/bbq">BBQ</Link>
					</li>
					<li>
						<Link to="/category/cocktails">Cocktails</Link>
					</li>
					<li>
						<Link to="/category/soups">Soups</Link>
					</li>
					<li>
						<Link to="/category/burgers">Burgers</Link>
					</li>
					<li>
						<Link to="/category/dessert">Dessert</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}