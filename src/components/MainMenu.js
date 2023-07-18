import { Link } from 'react-router-dom';
import { useState } from 'react';
function MainMenu() {
	const [showNavbar, setShowNavbar] = useState(false);

	const handleShowNavbar = () => {
		setShowNavbar(!showNavbar);
	};
	const handleLinkClick = () => {
		setShowNavbar(false);
	};

	return (
		<nav id='mainmenu'>
			<div className='menu-icon' onClick={handleShowNavbar}>
				&#9776;
			</div>
			<div className={`nav-elements  ${showNavbar && 'active'}`}>
				<ul onClick={handleLinkClick}>
					<li>
						<Link to={'/'}>Start</Link>
					</li>
					<li>
						<Link to={'/addword'}>Add word</Link>
					</li>
					<li>
						<Link to={'/words'}>Words list</Link>
					</li>
					<li>
						<Link to={'/aboutus'}>About Us</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default MainMenu;
