function Footer() {
	return (
		<footer id='site-footer'>
			<hr />
			<div>
				<p>
					©Copyright {new Date().getFullYear()} by nobody. All rights reversed.
				</p>
				<a href='#site-header'>
					<span>
						To the top <span aria-hidden='true'>↑</span>
					</span>
				</a>
			</div>
		</footer>
	);
}

export default Footer;
