import ScrollToTop from './ScrollToTop';

function Footer() {
	return (
		<footer id='site-footer'>
			<hr />
			<div>
				<p>
					©Copyright {new Date().getFullYear()} by nobody. All rights reversed.
				</p>
				<ScrollToTop />
			</div>
		</footer>
	);
}

export default Footer;
