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
				<ul>
					<li>
						<Link to={'/'} onClick={handleLinkClick}>
							Start
						</Link>
					</li>
					<li>
						<Link to={'/addword'} onClick={handleLinkClick}>
							Add word
						</Link>
					</li>
					<li>
						<Link to={'/words'} onClick={handleLinkClick}>
							Words list
						</Link>
					</li>
					<li>
						<Link to={'/aboutus'} onClick={handleLinkClick}>
							About Us
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default MainMenu;
