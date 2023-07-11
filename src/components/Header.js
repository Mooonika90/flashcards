import MainMenu from './MainMenu';
function Header(props) {
	const { children, ...rest } = props;
	return (
		<header {...rest}>
			{children}
			<MainMenu />
		</header>
	);
}

export default Header;
