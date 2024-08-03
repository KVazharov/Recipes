import { useContext } from "react"
import { Link } from "react-router-dom"
import AuthContext from "../../contexts/authContext"
import './Header.css'
export default function Header() {

	const { isAuthenticated, username } = useContext(AuthContext)
	return (
		<div>
			<div className="site-header">
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
										<Link to="#"> Hello, {username}</Link>
									</li>
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
					<li><a href="#">Salads</a></li>
					<li><a href="#">BBQ</a></li>
					<li><a href="#">Socktails</a></li>
					<li><a href="#">Soups</a></li>
					<li><a href="#">Burgers</a></li>
					<li><a href="#">Dessert</a></li>
				</ul>
			</div>
		</div>
	)
}